import { OpenPayCard } from "../openpay"

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

export type Payment = {
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

export type PaymentDB = Payment & {
  id: string
  createdAt: string
  updatedAt: string
}

export type PendingPayment = {
    status: 'pending' | 'completed' | 'failed'
    userId: string
    customerId: string
    planId: string
    subscriptionId: string
    gateway: 'openpay'
}

export type PendingPaymentDB = PendingPayment & {
    id: string
    createdAt: string
    updatedAt: string
}