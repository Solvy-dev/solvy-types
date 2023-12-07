/* 
  ---Membership statuses---
  STARTER: User signed up but not subscribed
  FREE_TRIAL: User subscribed to free trial
  ACTIVE: User subscribed to premium
  EXPIRED: User subscription expired
  CANCELLED: User cancelled subscription
  DEACTIVATED: User deactivated the account
*/
export interface Membership {
  customerId: string; // Openpay customer id
  planId: string; // Openpay plan id
  subscriptionId: string; // Openpay subscription id
  chargeDate: string; // Openpay next charge date
  userId: string;
  type: 'FREE' | 'PREMIUM';
  status:
    | 'STARTER'
    | 'FREE_TRIAL'
    | 'ACTIVE'
    | 'EXPIRED'
    | 'CANCELLED'
    | 'DEACTIVATED';
  trialEndDate?: string;
  trialStartDate?: string;
  startDate?: string;
  endDate?: string;
  paymentFrequency?: 'MONTHLY' | 'ANNUAL';
}

export type MembershipDB = Membership & {
  id: string;
  createdAt: string;
  updatedAt: string;
};

export type InitialMembership = Pick<
  MembershipDB,
  'id' | 'status' | 'type' | 'createdAt' | 'updatedAt' | 'userId'
>;

export type UpdateMembershipPayload = Partial<Omit<MembershipDB, 'id'>>;
