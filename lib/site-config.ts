// Edit this file to update the phone number, address and default WhatsApp message.
// WhatsApp number MUST be in international format, digits only, no + or spaces.
// Example for Pakistan: 92 300 1234567  ->  923001234567
export const WHATSAPP_NUMBER = "923044476333";
export const WHATSAPP_DEFAULT_MESSAGE =
  "Assalam-o-Alaikum, mujhe Umer Child & Mother Care Complex mein appointment lena hai.";

export const CLINIC_ADDRESS = "Jump Wali Pull, Near Total Petrol Pump, Fisheries Complex, Manawan, Lahore";
export const CLINIC_PHONE = "+92 304 447 6333";
export const CLINIC_EMAIL = "info@umerchildcare.com";
export const CLINIC_HOURS_WEEKDAY = "Mon – Sat: 5:00 PM – 10:00 PM";
export const CLINIC_HOURS_SUNDAY = "Sunday: 4:00 PM – 8:00 PM";
export const CLINIC_HOURS = `${CLINIC_HOURS_WEEKDAY} · ${CLINIC_HOURS_SUNDAY}`;

// Doctor spotlight — used in the Doctors section.
export const DOCTOR_NAME = "Dr. Bilal Umer";
export const DOCTOR_ROLE = "Consultant Pediatrician, Umer Child & Mothercare";
export const DOCTOR_RATING = "4.9 / 5";
export const DOCTOR_RATING_LABEL = "from loving parents";
export const DOCTOR_PATIENTS = "25,000+";
export const DOCTOR_PATIENTS_LABEL = "little smiles healed";

export function buildWhatsAppLink(message: string = WHATSAPP_DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildTelLink() {
  return `tel:+${WHATSAPP_NUMBER}`;
}
