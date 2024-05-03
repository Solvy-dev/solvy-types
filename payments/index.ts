import { OpenPayCard } from '../openpay/webhook'

export type AddSubscriptionPayload = {
  nid: string
  userId: string
  email: string
  cardName: string
  cardNumber: string
  cardCVV: string
  expiration: string
  plan: string
}

export type PaymentHistory = {
  userId: string
  planId: string
  membershipId: string

  status: string
  paymentGateway: 'OPENPAY'
  customerId: string
  subscriptionId: string

  amount: number
  currency: string
  method: string
  card: OpenPayCard
  eInvoiceId?: string // Electronic Invoice required in Colombia
}

export type PaymentHistoryDB = PaymentHistory & {
  id: string
  createdAt: string
  updatedAt: string
}
