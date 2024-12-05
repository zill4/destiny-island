export default function Features() {
    const features = [
      {
        title: "Feature One",
        description: "Explore our first feature that allows seamless connectivity and efficient task management."
      },
      {
        title: "Feature Two",
        description: "Collaborate effectively with tools designed to boost team productivity and communication."
      },
      {
        title: "Feature Three",
        description: "Analyze your data with our comprehensive analytics suite for informed decision-making."
      }
    ];
  
    return (
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }