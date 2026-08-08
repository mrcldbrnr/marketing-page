"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";
import { submitContactForm, type ContactFormState } from "@/app/kontakt/actions";

const initialState: ContactFormState = { status: "idle" };

const fieldClass =
  "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-foreground " +
  "placeholder:text-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-accent bg-accent/5 p-6 text-center leading-relaxed"
      >
        {state.message}
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="flex flex-col gap-5">
      <Field id="name" label="Name" error={state.errors?.name}>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className={fieldClass}
          aria-invalid={state.errors?.name ? true : undefined}
          aria-describedby={state.errors?.name ? "name-error" : undefined}
        />
      </Field>

      <Field id="email" label="E-Mail" error={state.errors?.email}>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          className={fieldClass}
          aria-invalid={state.errors?.email ? true : undefined}
          aria-describedby={state.errors?.email ? "email-error" : undefined}
        />
      </Field>

      <Field id="message" label="Nachricht" error={state.errors?.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={cn(fieldClass, "resize-y")}
          aria-invalid={state.errors?.message ? true : undefined}
          aria-describedby={state.errors?.message ? "message-error" : undefined}
        />
      </Field>

      {/* Honeypot — hidden from users, tempting for bots. */}
      <div aria-hidden className="hidden">
        <label htmlFor="company">Firma</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {state.status === "error" && !state.errors ? (
        <p role="alert" className="text-sm text-red-600 dark:text-red-400">
          {state.message}
        </p>
      ) : null}

      <SubmitButton />

      <p className="text-sm text-muted">
        Mit dem Absenden stimmst du unserer Datenschutzerklärung zu.
      </p>
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" disabled={pending} className="w-full sm:w-auto">
      {pending ? "Wird gesendet…" : "Nachricht senden"}
    </Button>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      ) : null}
    </div>
  );
}
