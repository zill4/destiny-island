import RegisterForm from '../components/auth/RegisterForm';
import Layout from '../components/layout/Layout';

export default function Register() {
  return (
    <Layout>
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Create Account</h1>
      <RegisterForm />
    </div>
    </Layout>
  );
}