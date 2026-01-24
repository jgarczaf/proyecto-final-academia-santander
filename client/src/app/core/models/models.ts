export type Role = 'ADMIN' | 'CLIENT';

export interface UserPayload {
  id: number;
  email: string;
  role: Role;
}

export interface Debtor {
  id: number;
  companyName: string;
  fiscalId: string;
  country: string;
  limit: number;
  status: 'ACTIVE' | 'INACTIVE';
  contactName: string;
  contactEmail: string;
  createdAt: string;
}

export type BillStatus = 'PENDING' | 'IN_REQUEST' | 'APPROVED' | 'REJECTED';
export interface Bill {
  id: number;
  invoiceNumber: string;
  amount: number;
  issueDate: string | Date;
  dueDate: string | Date;
  status: BillStatus;
  debtor: Debtor;
}

export type RequestStatus = 'REVIEW' | 'APPROVED' | 'REJECTED';
export interface RequestItem {
  id: number;
  status: RequestStatus;
  createdAt: string;
  bills: Bill[];
}

export interface BillsByStatusRaw {
  status: 'PENDING' | 'IN_REQUEST' | 'APPROVED' | 'REJECTED';
  count: string;
}

export interface ClientDashboardResponse {
  totals: { debtors: number; bills: number };
  billsByStatus: BillsByStatusRaw[];
  amounts: { pending: number; inRequest: number };
  lastBills: Bill[];
  lastRequests: RequestItem[];
}

export interface AdminDashboardResponse {
  totals: {
    clients: number;
    billsInRequest: number;
    requestsInReview: number;
    amountInReview: number;
  };
  lastRequests: RequestItem[];
}
