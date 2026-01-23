import Layout from '@/components/layout/Layout';
import Breadcumb from '@/components/elements/breadcumb';
import Section1Client from '@/components/sections/contact/Section1Client';
import Section2 from '@/components/sections/home-6/Section5';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - Strategic Accountability Hub',
  description: 'Get in touch with Strategic Accountability Hub for institutional oversight inquiries.',
};

export default function PageContact() {
  return (
    <Layout headerStyle={6} footerStyle={6}>
      <Breadcumb pageCurrent="Contact" />
      <Section1Client />
      <Section2 />
    </Layout>
  );
}
