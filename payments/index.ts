export type AddSubscriptionPayload = {
  userId: string;
  email: string;
  cardName: string;
  cardNumber: string;
  cardCVV: string;
  expiration: string;
  plan: string;
};
