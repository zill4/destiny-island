import Hero from '../components/layout/Hero';
import Layout from '../components/layout/Layout';
import Features from '../components/home/Features';
// import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      {/* TODO: Change this to screenshots of the app  or something <Testimonials /> */}
      <CallToAction />
    </Layout>
  );
}