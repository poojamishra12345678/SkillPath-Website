import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <span className="font-bold text-2xl text-white">SkillPath</span>
            <p className="mt-2 text-gray-400 text-sm">Empowering your journey to mastery.</p>
          </div>
          <div className="flex space-x-6">
            <Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link>
            <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link>
            <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} SkillPath. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
