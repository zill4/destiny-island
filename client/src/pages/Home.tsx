import Hero from '../components/layout/Hero';
import Layout from '../components/layout/Layout';
import Features from '../components/home/Features';
import Testimonials from '../components/home/Testimonials';
import CallToAction from '../components/home/CallToAction';

export default function Home() {
  return (
    <Layout>
      <Hero 
        title="Welcome to Destiny Island"
        description="Discover the ultimate way to enhance your productivity with Destiny Island. Our app offers innovative solutions tailored to your needs."
        ctaText="Get Started"
      />
      <Features />
      <Testimonials />
      <CallToAction />
    </Layout>
  );
}