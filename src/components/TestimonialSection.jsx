const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      quote: "SkillPath completely transformed my career. The structured curriculum and hands-on projects gave me the confidence to land my dream job.",
      author: "Sarah Johnson",
      role: "Frontend Developer"
    },
    {
      id: 2,
      quote: "The quality of instruction is unmatched. Complex concepts are broken down into easily digestible pieces. Highly recommended!",
      author: "Michael Chen",
      role: "UX Designer"
    },
    {
      id: 3,
      quote: "I've tried many learning platforms, but SkillPath stands out for its engaging content and supportive community.",
      author: "Elena Rodriguez",
      role: "Data Analyst"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by thousands of learners
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Don't just take our word for it. Here's what our students have to say.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl shadow-sm p-8 relative">
              <div className="text-blue-500 mb-6">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 21L16.411 14.594C16.594 14.093 16.51 13.528 16.19 13.1C15.87 12.671 15.358 12.43 14.819 12.463C12.839 12.585 11.233 11.002 11.233 9.006V5H18V10.741L15.65 19.349C15.433 20.146 14.542 20.485 13.882 19.986L14.017 21ZM5.016 21L7.411 14.594C7.594 14.093 7.51 13.528 7.19 13.1C6.87 12.671 6.358 12.43 5.819 12.463C3.839 12.585 2.233 11.002 2.233 9.006V5H9V10.741L6.65 19.349C6.433 20.146 5.542 20.485 4.882 19.986L5.016 21Z" />
                </svg>
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
