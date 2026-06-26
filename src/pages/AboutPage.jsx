import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">About SkillPath</h1>
            <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
              Empowering individuals to reach their full potential through accessible, high-quality education.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-10 lg:p-16 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  At SkillPath, we believe that education is the ultimate equalizer. Our mission is to democratize learning by providing world-class, interactive courses that anyone can access from anywhere.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  We're building a future where your background doesn't limit your opportunities. Whether you're looking to start a new career, advance in your current role, or simply learn something new, we're here to help you pave your path to success.
                </p>
                <div className="mt-8 border-l-4 border-blue-500 pl-6">
                  <p className="text-xl italic text-gray-700">
                    "Education is not preparation for life; education is life itself."
                  </p>
                </div>
              </div>
              <div className="bg-blue-50 p-10 lg:p-16 flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">What We Offer</h2>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-900">Expert-Led Curriculum</h3>
                      <p className="mt-2 text-gray-600">Courses designed and taught by industry professionals with real-world experience.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-900">Interactive Learning</h3>
                      <p className="mt-2 text-gray-600">Hands-on projects and exercises that ensure you master the concepts, not just memorize them.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-100 text-blue-600">
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-900">Supportive Community</h3>
                      <p className="mt-2 text-gray-600">Join thousands of learners worldwide to share knowledge, get help, and grow together.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
