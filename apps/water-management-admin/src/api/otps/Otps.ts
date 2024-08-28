export type Otps = {
  createdAt: Date;
  id: string;
  identifier: string | null;
  token: string | null;
  updatedAt: Date;
  valid: boolean | null;
  validity: number | null;
};
