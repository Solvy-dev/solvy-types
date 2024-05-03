export interface OpenPayEvent {
  type: string
  event_date: Date
  transaction: Transaction
}

export interface Transaction {
  id: string
  authorization: string
  operation_type: string
  transaction_type: string
  status: string
  conciliated: boolean
  iva: string
  creation_date: Date
  operation_date: Date
  description: string
  error_message: null
  order_id: null
  card: OpenPayCard
  customer_id: string
  subscription_id: string
  fee: Fee
  amount: number
  currency: string
  method: string
}

export interface OpenPayCard {
  id: string
  type: string
  brand: string
  address: null
  card_number: string
  holder_name: string
  expiration_year: string
  expiration_month: string
  allows_charges: boolean
  allows_payouts: boolean
  creation_date: Date
  bank_name: string
  bank_code: string
  customer_id: string
}

export interface Fee {
  amount: number
  tax: number
  currency: string
}
