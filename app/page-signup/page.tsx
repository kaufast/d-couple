import { SignUpFormStyled } from '@/components/auth/SignUpFormStyled';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign Up - Strategic Accountability Hub',
  description: 'Create your account to access governance reports and strategic accountability tools.',
};

export default function PageSignUp() {
  return <SignUpFormStyled />;
}
