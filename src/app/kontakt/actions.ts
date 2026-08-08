"use server";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  /** Field name → error message. */
  errors?: Record<string, string>;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Handles the contact form submission.
 *
 * TODO: wire up an actual delivery mechanism (Resend, Postmark, a CRM webhook…)
 * where marked below. Until then the submission is only validated and logged.
 */
export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // Honeypot: real users never fill a hidden field. Pretend success for bots.
  if (formData.get("company")) {
    return { status: "success", message: "Danke! Wir melden uns in Kürze." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  const errors: Record<string, string> = {};
  if (name.length < 2) errors.name = "Bitte gib deinen Namen an.";
  if (!EMAIL_PATTERN.test(email)) errors.email = "Bitte gib eine gültige E-Mail-Adresse an.";
  if (message.length < 10) errors.message = "Bitte beschreibe dein Anliegen in ein paar Worten.";

  if (Object.keys(errors).length > 0) {
    return { status: "error", message: "Bitte prüfe die markierten Felder.", errors };
  }

  try {
    // --- Delivery goes here -------------------------------------------------
    // await resend.emails.send({ to: siteConfig.contact.email, ... });
    console.info("[contact] submission", { name, email, message });
    // -----------------------------------------------------------------------

    return { status: "success", message: "Danke! Wir melden uns in Kürze." };
  } catch (error) {
    console.error("[contact] delivery failed", error);
    return {
      status: "error",
      message: "Das hat leider nicht geklappt. Bitte versuche es später erneut.",
    };
  }
}
