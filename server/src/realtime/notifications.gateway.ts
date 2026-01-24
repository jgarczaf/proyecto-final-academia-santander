import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import * as jwt from 'jsonwebtoken';

@WebSocketGateway({
  cors: {
    origin: [
      'http://localhost:4200',
      'http://127.0.0.1:4200',
      'http://localhost:4201',
      'http://127.0.0.1:4201',
    ],
    credentials: true,
  },
})
export class NotificationsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;

  private userBySocket = new Map<string, number>();

  async handleConnection(client: Socket) {
    const token =
      (client.handshake.query?.token as string) || (client.handshake.auth as any)?.token;

    if (!token) return client.disconnect();

    try {
      const payload: any = jwt.verify(token, process.env.JWT_SECRET || 'superSecretKey123');
      const userId = payload.id;
      const role = payload.role;

      client.join(`user:${userId}`);
      if (role) client.join(`role:${role}`);
      this.userBySocket.set(client.id, userId);
    } catch {
      client.disconnect();
    }
  }

  handleDisconnect(client: Socket) {
    this.userBySocket.delete(client.id);
  }

  emitToUser(userId: number, event: string, payload: any) {
    this.server.to(`user:${userId}`).emit(event, payload);
  }

  emitToRole(role: 'ADMIN' | 'CLIENT', event: string, payload: any) {
    this.server.to(`role:${role}`).emit(event, payload);
  }
}
