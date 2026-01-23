import { SignupForm } from '@/components/auth/SignupForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Create Account - Strategic Accountability Hub',
  description: 'Create an account to contribute strategic reports and participate in governance oversight.',
};

export default function SignupPage() {
  return <SignupForm />;
}
