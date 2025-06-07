import React from 'react';
import { ArrowRight, Users, Lightbulb, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import EventCard from '../components/EventCard';
const Home = () => {
  return <div className="min-h-screen">
      {/* Hero Section with Banner Background */}
      <section style={{
      backgroundImage: `linear-gradient(rgba(249, 245, 122, 0.3), rgba(249, 245, 122, 0.3)), url('/lovable-uploads/banner.png')`
    }} className="relative bg-cover bg-center bg-no-repeat text-white py-20 min-h-[80vh] flex items-center bg-gradient-to-r from-[#F9F57A] via-[#FC7951] to-[#9582C4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in drop-shadow-lg text-slate-950">
            The Creative Innovative Network
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto drop-shadow-md text-slate-950">
            Connecting creative professionals across design, strategy & innovation
          </p>
          <p className="text-lg mb-10 max-w-2xl mx-auto drop-shadow-md text-slate-950">
            We're a community of curious professionals who believe that the best ideas emerge 
            when diverse minds come together to explore, create, and innovate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved" className="bg-[#F9F57A] text-black px-8 py-3 rounded-lg font-bold hover:bg-[#F9F57A]/90 transition-all hover:shadow-lg inline-flex items-center justify-center">
              Join Our Community <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link to="/about" className="bg-[#F9F57A] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#F9F57A]/90 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-[#F9F57A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We create spaces for creative professionals to connect, learn, and grow together
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#9582C4] to-[#3B82F6] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Connect</h3>
              <p className="text-gray-600">
                Build meaningful relationships with fellow creatives, strategists, and innovators
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Create</h3>
              <p className="text-gray-600">
                Collaborate on projects, share ideas, and bring innovative concepts to life
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-gradient-to-br from-[#3AAFA7] to-[#53C3CC] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Grow</h3>
              <p className="text-gray-600">
                Develop your skills, expand your perspective, and advance your career
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-200">
              Join us for our next gathering of creative minds
            </p>
          </div>
          
          <div className="grid md:grid-cols-1 gap-8 mb-8 max-w-2xl mx-auto">
            <EventCard title="Everyday Innovation: Experiments for a better life" date="Thursday, 5th June" time="6:30 – 8:30 PM" location="The Bank on Collins, Melbourne CBD" description="Innovation is so often viewed through a commercial lens — how can we make money off a new idea? But what if we flipped that and asked: how do we innovate in our personal lives? Join us for an interactive session to explore ideas that can make everyday life better, from using AI to design better routines to creating tools that save time or reduce stress." attendees={undefined} type="upcoming" />
          </div>
          
          <div className="text-center">
            <Link to="/events" className="inline-flex items-center text-[#F9F57A] font-semibold hover:text-white transition-colors">
              View All Events <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-[#F9F57A] via-[#FC7951] to-[#9582C4] py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black mb-4">
            Ready to Join Our Community?
          </h2>
          <p className="text-lg text-black/80 mb-8">
            Connect with like-minded professionals and be part of something creative
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/get-involved" className="bg-gray-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-gray-700 transition-colors">
              Join Our Slack
            </Link>
            <Link to="/get-involved" className="bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-shadow">
              Subscribe to Newsletter
            </Link>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;
