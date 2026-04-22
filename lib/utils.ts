export function maskAadhaar(aadhaar: string): string {
  if (aadhaar.length !== 12) return "Invalid";

  const visible = aadhaar.slice(-4);
  return "XXXXXXXX" + visible;
}

export function maskBank(account: string): string {
  if (account.length < 4) return "Invalid";

  const visible = account.slice(-4);
  return "XXXXXX" + visible;
}