import { LoginFormStyled } from '@/components/auth/LoginFormStyled';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sign In - Strategic Accountability Hub',
  description: 'Sign in to access institutional oversight and governance reports.',
};

export default function PageLogin() {
  return <LoginFormStyled />;
}
