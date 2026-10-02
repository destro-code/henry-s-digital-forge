import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';
import OutLink from './OutLink';
import Reveal from './Reveal';
import SectionHeader from './SectionHeader';
import { SITE } from '@/data/site';

type Fields = { name: string; email: string; message: string };
type Errors = Partial<Record<keyof Fields, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: Fields): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) errors.email = 'Please enter your email address.';
  else if (!emailPattern.test(values.email.trim())) errors.email = 'Please enter a valid email address.';
  if (values.message.trim().length < 10) errors.message = 'Please write a message of at least 10 characters.';
  return errors;
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="meta-label mb-2 block">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="mt-2 text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactSection() {
  const [values, setValues] = useState<Fields>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [composed, setComposed] = useState(false);

  const update = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
    setComposed(false);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    const firstInvalid = (['name', 'email', 'message'] as const).find((k) => found[k]);
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }
    const subject = encodeURIComponent(`Portfolio enquiry from ${values.name.trim()}`);
    const body = encodeURIComponent(`${values.message.trim()}\n\nFrom: ${values.name.trim()} <${values.email.trim()}>`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setComposed(true);
  };

  const inputClass = 'input';
  const describe = (key: keyof Fields) => (errors[key] ? `contact-${key}-error` : undefined);

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-space border-t border-border">
      <div className="container-page">
        <SectionHeader
          index="07"
          chapter="Contact"
          titleId="contact-title"
          title={
            <>
              Let&apos;s talk about <span className="italic text-primary">what you&apos;re building.</span>
            </>
          }
          intro="Email is the fastest way to reach me. The form below opens your email app with the message ready to send."
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <ul className="border-t border-border">
              <li className="border-b border-border">
                <a href={`mailto:${SITE.email}`} className="group flex min-h-16 items-center gap-4 py-4">
                  <Mail className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span className="min-w-0">
                    <span className="meta-label block">Email</span>
                    <span className="block break-all text-lg group-hover:text-primary">{SITE.email}</span>
                  </span>
                </a>
              </li>
              <li className="border-b border-border">
                <a href={SITE.phoneHref} className="group flex min-h-16 items-center gap-4 py-4">
                  <Phone className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                  <span>
                    <span className="meta-label block">Phone</span>
                    <span className="block text-lg group-hover:text-primary">{SITE.phone}</span>
                  </span>
                </a>
              </li>
              <li className="flex min-h-16 items-center gap-4 border-b border-border py-4">
                <MapPin className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <span>
                  <span className="meta-label block">Location</span>
                  <span className="block text-lg">{SITE.location}</span>
                </span>
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-x-6">
              <OutLink href={SITE.github} className="text-link">
                GitHub
              </OutLink>
              <OutLink href={SITE.linkedin} className="text-link">
                LinkedIn
              </OutLink>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-7">
            <form onSubmit={onSubmit} noValidate className="space-y-6 border border-border bg-surface p-5 sm:p-8">
              <Field id="contact-name" label="Name" error={errors.name}>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={values.name}
                  onChange={update('name')}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={describe('name')}
                  className={inputClass}
                />
              </Field>
              <Field id="contact-email" label="Email" error={errors.email}>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={update('email')}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={describe('email')}
                  className={inputClass}
                />
              </Field>
              <Field id="contact-message" label="Message" error={errors.message}>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  value={values.message}
                  onChange={update('message')}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={describe('message')}
                  className={`${inputClass} resize-y`}
                />
              </Field>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <button type="submit" className="btn btn-primary">
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Open in email app
                </button>
                <p className="text-sm text-muted">No data is stored. Your email app will open to send the message.</p>
              </div>

              <div role="status" aria-live="polite">
                {composed && (
                  <p className="border border-signal/50 bg-signal/10 p-3 text-sm">
                    Your email app should now be open with the message ready. If nothing opened, email me directly at{' '}
                    <a href={`mailto:${SITE.email}`} className="underline underline-offset-4">
                      {SITE.email}
                    </a>
                    .
                  </p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
