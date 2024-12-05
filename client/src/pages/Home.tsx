import Hero from '../components/layout/Hero';
import Layout from '../components/layout/Layout';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
}