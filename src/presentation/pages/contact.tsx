'use client';

import { DefaultLayout } from '../layouts/DefaultLayout';
import { ContactForm } from '../components/ContactForm';

export default function ContactPage() {
  return (
    <DefaultLayout>
      <div className="pt-16 md:pt-24">
        <ContactForm />
      </div>
    </DefaultLayout>
  );
} 