export type AddSubscriptionPayload = {
  userId: string;
  email: string;
  cardName: string;
  cardNumber: string;
  cardCVV: string;
  expiration: string;
  plan: string;
};

export type PaymentHistory = {
  userId: string;
  planId: string;
  membershipId: string;
  status: string;
  paymentMethodUsed: string;
  paymentDate: string;
}

export type PaymentHistoryDB = {
  id: string;
  eInvoiceId: boolean; // Electronic Invoice required in Colombia
  createdAt: string;
}

// OpenPay
export interface OpenpayWebhook {
  type: 'charge.succeeded' | 'charge.refunded' | 'subscription.charge.failed'
  event_date: string;
  transaction: Transaction;
}

export interface Transaction {
  id: string;
  authorization: string;
  operation_type: string;
  transaction_type: string;
  status: string;
  conciliated: boolean;
  iva: string;
  creation_date: string;
  operation_date: string;
  description: string;
  error_message: null;
  order_id: null;
  card: Card;
  customer_id: string;
  subscription_id: string;
  fee: Fee;
  amount: number;
  currency: string;
  method: string;
}

export interface Card {
  id: string;
  type: string;
  brand: string;
  address: null;
  card_number: string;
  holder_name: string;
  expiration_year: string;
  expiration_month: string;
  allows_charges: boolean;
  allows_payouts: boolean;
  creation_date: string;
  bank_name: string;
  bank_code: string;
  customer_id: string;
}

export interface Fee {
  amount: number;
  tax: number;
  currency: string;
}
