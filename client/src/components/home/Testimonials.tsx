export default function Testimonials() {
    const testimonials = [
      {
        quote: "AppName has transformed the way I work! It's intuitive and incredibly efficient.",
        author: "Alex Johnson"
      },
      {
        quote: "The collaboration features are top-notch. It's perfect for team projects.",
        author: "Maria Gonzalez"
      },
      {
        quote: "I love the data analytics capabilities. It makes decision-making so much easier.",
        author: "David Lin"
      }
    ];
  
    return (
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-16">
            What Our Users Say
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold text-gray-900">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }