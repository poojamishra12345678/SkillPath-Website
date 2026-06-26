import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="relative bg-white overflow-hidden pt-24 pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl mb-6">
            <span className="block">Unlock Your Potential with</span>
            <span className="block text-blue-600">SkillPath</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl mb-10">
            Master new skills with interactive courses designed by industry experts. Your journey to success starts here.
          </p>
          <div className="flex justify-center mt-5 max-w-md mx-auto sm:flex md:mt-8">
            <div className="rounded-md shadow">
              <Link to="/about" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg transition-colors">
                Learn More
              </Link>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Link to="/contact" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg transition-colors">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-blue-50 to-white -z-10"></div>
    </div>
  );
};

export default HeroSection;
