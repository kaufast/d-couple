import Layout from '@/components/layout/Layout';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout headerStyle={1} footerStyle={1}>
      {children}
    </Layout>
  );
}
