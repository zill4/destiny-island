import { useNavigate } from "react-router-dom";

export default function CallToAction() {
    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate('/register');
    }

    return (
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="mb-8">Join thousands of users who have already improved their productivity with AppName.</p>
          <button onClick={handleSignUp} className="bg-blue-200 text-gray-800 px-8 py-3 rounded-md hover:bg-pink-300 transition-colors">
            Sign Up Now
          </button>
        </div>
      </section>
    );
  }