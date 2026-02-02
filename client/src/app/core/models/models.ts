export type Role = 'ADMIN' | 'CLIENT';

export interface UserPayload {
  id: number;
  email: string;
  role: Role;
}

export interface IClientGroup {
  userId: number;
  user?: IUser;
  requests: IRequestItem[];
  searchQuery: string;
  selectedStatus: RequestStatus | null;
  sortColumn: SortColumn;
  sortDirection: SortDirection;
  filtered: IRequestItem[];
  paginated: IRequestItem[];
  pageSize: number;
  pageIndex: number;
  anticiparState: ModalState;
  rechazarState: ModalState;
  anticiparResult?: { completed: number; errors: number };
  rechazarResult?: { completed: number; errors: number };
}

export interface IDebtor {
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
export interface IBill {
  id: number;
  invoiceNumber: string;
  amount: number;
  issueDate: string | Date;
  dueDate: string | Date;
  status: BillStatus;
  debtor: IDebtor;
  selected?: boolean;
}

export interface IBillRow {
  id: number;
  invoiceNumber: string;
  amount: any;
  issueDate: string | Date;
  dueDate: string | Date;
  debtor?: IDebtor;
}

export type RequestStatus = 'REVIEW' | 'APPROVED' | 'REJECTED';
export interface IRequestItem {
  id: number;
  status: RequestStatus;
  createdAt: string | Date;
  bills: IBillRow[];
  user?: IUser;
  selected?: boolean;
}

export interface BillsByStatusRaw {
  status: 'PENDING' | 'IN_REQUEST' | 'APPROVED' | 'REJECTED';
  count: string;
}

export interface ClientDashboardResponse {
  totals: { debtors: number; bills: number };
  billsByStatus: BillsByStatusRaw[];
  amounts: { pending: number; inRequest: number };
  lastBills: IBill[];
  lastRequests: IRequestItem[];
}

export interface AdminDashboardResponse {
  totals: {
    clients: number;
    billsInRequest: number;
    requestsInReview: number;
    amountInReview: number;
  };
  lastRequests: IRequestItem[];
}

export interface IUser {
  id: number;
  name?: string;
  companyName?: string;
  email?: string;
  fiscalId?: string;
}

export type ModalState = 'confirm' | 'success' | 'error';
export type SortColumn =
  | 'status'
  | 'debtor'
  | 'invoice'
  | 'amount'
  | 'issueDate'
  | 'dueDate'
  | 'createdAt';
export type SortDirection = 'asc' | 'desc';
