export enum AttachmentType {
  IMAGE = 'IMAGE',
  PDF = 'PDF'
}

export type Attachment = {
  type: 'IMAGE' | 'PDF';
  url: string;
  fileName: string;
};

export type AttachmentPayload = {
  type: 'IMAGE' | 'PDF';
  payload: string; // base64 encoded string
  fileName: string;
};
