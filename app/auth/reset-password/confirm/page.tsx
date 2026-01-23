import { UpdatePasswordForm } from '@/components/auth/UpdatePasswordForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Update Password - Strategic Accountability Hub',
  description: 'Set a new password for your account.',
};

export default function UpdatePasswordPage() {
  return <UpdatePasswordForm />;
}
