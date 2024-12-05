import LoginForm from '../components/auth/LoginForm';
import Layout from '../components/layout/Layout';

export default function Login() {
  return (
    <Layout>
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Log In</h1>
      <LoginForm />
    </div>
    </Layout>
  );
}