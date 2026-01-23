import { LoginForm } from '@/components/auth/LoginForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In - Strategic Accountability Hub',
  description: 'Sign in to access strategic governance reports and institutional oversight data.',
};

export default function LoginPage() {
  return <LoginForm />;
}
