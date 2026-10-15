/**
 * Public review settings. Updated scopes, formats, durations and fees await
 * confirmation. Unpublished historical rate-card data is not distributed in
 * this public developer handoff. Keep feesPublic false until approved options
 * are entered and reviewed. This preserves the current enquiry-only display.
 */
export const feesPublic = false;
export type ConsultationOption = {
  id: string;
  mode: "Online" | "In person";
  length: string;
  fee: string;
  summary: string;
};
export const consultationOptions: ConsultationOption[] = [];
