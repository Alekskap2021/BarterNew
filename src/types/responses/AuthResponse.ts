export interface AuthResponse {
  AccessToken: string;
  RefreshToken: string;
  ok: boolean;
}

export interface SendSmsResponse {
  ok: boolean;
  sms_code: string;
}
