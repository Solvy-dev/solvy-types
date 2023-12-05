export type CustomerInfoPayload = {
  external_id: string;
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
