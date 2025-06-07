import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Meet the Founders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center">
            <img
              src="/alex-face.png"
              alt="Alex Shiell"
              className="w-48 h-48 rounded-full mx-auto mb-6"
            />
            <h3 className="text-xl font-semibold">Alex Shiell</h3>
            <p className="text-gray-600 mb-4">Co-Founder</p>
            <a
              href="https://www.linkedin.com/in/alex-shiell-a1513117b"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Connect on LinkedIn
            </a>
          </div>
          <div className="text-center">
            <img
              src="/arianna-photo.jpeg"
              alt="Arianna Stefani"
              className="w-48 h-48 rounded-full mx-auto mb-6"
            />
            <h3 className="text-xl font-semibold">Arianna Stefani</h3>
            <p className="text-gray-600 mb-4">Co-Founder</p>
            <a
              href="https://www.linkedin.com/in/arianna-stefani/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
