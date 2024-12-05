import { useForm } from 'react-hook-form';
import { Card } from '../ui/Card';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import Layout from '../layout/Layout';

type FormData = {
  email: string;
  password: string;
};

export default function SignIn() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <Layout>
      <div className="min-h-[calc(100vh-8rem)] flex items-center justify-center px-4 py-12">
        <Card className="w-full max-w-md">
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-primary-900">Welcome back</h2>
              <p className="mt-2 text-primary-600">Sign in to your account</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <Input
                label="Email"
                {...register('email')}
                type="email"
                error={errors.email?.message}
                placeholder="Enter your email"
              />

              <Input
                label="Password"
                {...register('password')}
                type="password"
                error={errors.password?.message}
                placeholder="Enter your password"
              />

              <Button type="submit" variant="primary" size="lg" className="w-full">
                Sign In
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-primary-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-primary-500">
                  Or continue with
                </span>
              </div>
            </div>

            <Button variant="secondary" size="lg" className="w-full">
              Sign in with Google
            </Button>
          </div>
        </Card>
      </div>
    </Layout>
  );
}