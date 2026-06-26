const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-8 border border-gray-100 flex flex-col items-center text-center">
      <div className="h-14 w-14 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{description}</p>
    </div>
  );
};

export default FeatureCard;
