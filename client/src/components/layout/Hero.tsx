import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    console.log('Get started clicked');
    navigate('/register');
  };

  const handleHowItWorks = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log('How it works clicked');
    navigate('/how-it-works');
  };

  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <h1 className="text-6xl font-bold tracking-tight text-gray-900">
            Transform Your Scripts into Visual Stories
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Analyze scripts, generate storyboards, and visualize relationships between characters, places, and objects using AI.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <button 
              onClick={handleGetStarted}
              className="rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white hover:bg-indigo-500"
            >
              Get started for free
            </button>
            <a 
              href="/how-it-works"
              onClick={handleHowItWorks}
              className="text-lg font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              See how it works <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}