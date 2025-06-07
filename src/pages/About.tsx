
import React from 'react';
import { Target, Eye, Heart } from 'lucide-react';

// Error boundary for image loading
const ImageWithFallback = ({ src, alt, className }: { src: string; alt: string; className?: string }) => {
  const [error, setError] = React.useState(false);
  
  return (
    <img
      src={error ? '/fallback-avatar.png' : src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setError(true)}
    />
  );
};

interface Founder {
  name: string;
  role: string;
  linkedin: string;
  image: string;
  alt: string;
}

interface AboutProps {
  founders: Founder[];
}

const About: React.FC<AboutProps> = ({ founders = [] }) => {
  // Safely access founders with fallbacks
  const founderOne = founders[0] || {
    name: "Founder",
    role: "Co-Founder",
    linkedin: "#",
    image: "/fallback-avatar.png",
    alt: "Founder"
  };

  const founderTwo = founders[1] || {
    name: "Founder",
    role: "Co-Founder",
    linkedin: "#",
    image: "/fallback-avatar.png",
    alt: "Founder"
  };

  return (
    <>
      <div role="main" className="min-h-screen" tabIndex={-1}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#3AAFA7] to-[#53C3CC] text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Community</h1>
          <p className="text-xl leading-relaxed">
            We believe that the most innovative solutions emerge when creative minds 
            from different backgrounds come together to explore, experiment, and build.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Mission */}
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#FC7951] rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To connect curious professionals and spark creative collaboration that drives 
                meaningful innovation in design, strategy, and beyond.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#9582C4] rounded-full flex items-center justify-center mx-auto mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                A thriving community where bold ideas and personal growth collide, 
                creating ripple effects that transform industries and lives.
              </p>
            </div>

            {/* Values */}
            <div className="text-center p-8 bg-white rounded-lg shadow-md">
              <div className="w-16 h-16 bg-[#3AAFA7] rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Values</h3>
              <div className="text-gray-700 space-y-2">
                <p className="font-semibold text-[#9582C4]">Curiosity</p>
                <p className="font-semibold text-[#FC7951]">Connection</p>
                <p className="font-semibold text-[#3AAFA7]">Impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who We Are</h2>
            <p className="text-lg text-gray-600">
              Our community welcomes creative professionals from all backgrounds
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#FC7951]">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Designers</h3>
              <p className="text-gray-700">
                UX/UI designers, graphic designers, product designers, and visual storytellers 
                who shape how people interact with the world.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#9582C4]">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Strategists</h3>
              <p className="text-gray-700">
                Business strategists, brand strategists, and systems thinkers who help 
                organizations navigate complexity and find opportunity.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#3AAFA7]">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Innovators</h3>
              <p className="text-gray-700">
                Innovation managers, design researchers, and future-focused professionals 
                who push boundaries and explore what's possible.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#53C3CC]">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Builders</h3>
              <p className="text-gray-700">
                Entrepreneurs, consultants, and makers in professional services who 
                turn ideas into reality and create value for clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
          <div className="bg-gradient-to-r from-[#F7F080]/20 to-[#53C3CC]/20 p-8 rounded-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The Creative Innovative Network started as a simple idea: what if creative professionals 
              had a space to connect beyond the usual networking events? A place where curiosity 
              trumps credentials, where diverse perspectives are celebrated, and where meaningful 
              collaborations naturally emerge.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Today, we're a growing community of designers, strategists, innovators, and builders 
              who believe that the future belongs to those who can think creatively, connect 
              authentically, and create impact together.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Meet the Founders</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <ImageWithFallback
                src={`/public/${founderOne.alt.toLowerCase().replace(' ', '-')}.webp`}
                alt={founderOne.alt}
                className="w-48 h-48 rounded-full mx-auto mb-6"
              />
              <h3 className="text-xl font-semibold">Alex Shiell</h3>
              <p className="text-gray-600 mb-4">Co-Founder</p>
              <a
                href={founders[0].linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                aria-label={`Connect with ${founders[0].name} on LinkedIn`}
              >
                Connect on LinkedIn
              </a>
            </div>
            <div className="text-center">
              <ImageWithFallback
                src={`/public/${founderTwo.alt.toLowerCase().replace(' ', '-')}.webp`}
                alt={founderTwo.alt}
                className="w-48 h-48 rounded-full mx-auto mb-6"
              />
              <h3 className="text-xl font-semibold">Arianna Stefani</h3>
              <p className="text-gray-600 mb-4">Co-Founder</p>
              <a
                href={founders[1].linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                aria-label={`Connect with ${founders[1].name} on LinkedIn`}
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const founders: Founder[] = [
  {
    name: "Alex Shiell",
    role: "Co-Founder",
    linkedin: "https://www.linkedin.com/in/alex-shiell-a1513117b",
    image: "/alex-face.png",
    alt: "Alex Shiell"
  },
  {
    name: "Arianna Stefani",
    role: "Co-Founder",
    linkedin: "https://www.linkedin.com/in/arianna-stefani/",
    image: "/arianna-photo.jpeg",
    alt: "Arianna Stefani"
  }
];

export default About;
