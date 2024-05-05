export type CustomerPayload = {
  name: string;
  last_name: string;
  email: string;
};

export type CardInfoPayload = {
  card_number: string;
  holder_name: string;
  expiration_year: string;
  expiration_month: string;
  cvv2: string;
};

export interface OpenPayCustomer {
  id: string;
  name: string;
  last_name: string;
  email: string;
  phone_number: null;
  address: null;
  creation_date: string;
  external_id: null;
  clabe: null;
}

export interface OpenPayCard {
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
  points_type: string;
  bank_code: string;
  customer_id: string;
  points_card: boolean;
}

export interface OpenPaySubscription {
  id: string;
  card: OpenPayCard;
  cancel_at_period_end: boolean;
  charge_date: string;
  creation_date: string;
  current_period_number: number;
  period_end_date: string;
  status: string;
  trial_end_date: string;
  default_charge_quantity: null;
  plan_id: string;
  customer_id: string;
}

// Webhook Event Object

export interface OpenPayEvent {
  type: string;
  event_date: Date;
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
  creation_date: Date;
  operation_date: Date;
  description: string;
  error_message: null;
  order_id: null;
  card: OpenPayCard;
  customer_id: string;
  subscription_id: string;
  fee: Fee;
  amount: number;
  currency: string;
  method: string;
}

export interface OpenPayCard {
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
