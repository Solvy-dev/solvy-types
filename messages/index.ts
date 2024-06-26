export type MessageBody = {
  topic: string
  data: any
}
export type WelcomeData = { email: string, firstName?: string }
export type WelcomeMessage = Omit<MessageBody, 'data'> & { data: WelcomeData }