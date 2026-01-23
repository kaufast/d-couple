import { ResetPasswordForm } from '@/components/auth/ResetPasswordForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reset Password - Strategic Accountability Hub',
  description: 'Request a password reset link for your account.',
};

export default function ResetPasswordPage() {
  return <ResetPasswordForm />;
}
