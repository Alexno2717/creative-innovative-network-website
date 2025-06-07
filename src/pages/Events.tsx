import React from 'react';
import EventCard from '../components/EventCard';
import { Calendar, Coffee, Users, Lightbulb } from 'lucide-react';

const Events = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#FC7951] to-[#F7F080] text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Events</h1>
          <p className="text-xl text-gray-800 leading-relaxed">
            Join us for workshops, conversations, and collaborative experiences that 
            bring our community together.
          </p>
        </div>
      </section>

      {/* Event Formats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Event Formats</h2>
            <p className="text-lg text-gray-600">
              Different ways to connect, learn, and grow together
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-[#9582C4] rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Idea Exchange</h3>
              <p className="text-gray-600 text-sm">
                Interactive workshops where we dive deep into creative challenges and methodologies
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-[#FC7951] rounded-full flex items-center justify-center mx-auto mb-4">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Brew & Brainstorm</h3>
              <p className="text-gray-600 text-sm">
                Casual evening conversations about industry trends, challenges, and opportunities
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-[#3AAFA7] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaboration Labs</h3>
              <p className="text-gray-600 text-sm">
                Hands-on sessions where small teams tackle real projects and challenges together
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-[#53C3CC] rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Member Showcases</h3>
              <p className="text-gray-600 text-sm">
                Opportunities for community members to share their work, insights, and lessons learned
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600">
              Mark your calendar for this exciting gathering
            </p>
          </div>

          <div className="grid lg:grid-cols-1 gap-8 max-w-3xl mx-auto">
            <EventCard
              title="Everyday Innovation: Experiments for a better life"
              date="Thursday, 5th June"
              time="6:30 – 8:30 PM"
              location="The Bank on Collins, Melbourne CBD"
              description="Innovation is so often viewed through a commercial lens — how can we make money off a new idea? But what if we flipped that and asked: how do we innovate in our personal lives? Join us for an interactive session to explore and share ideas that can make everyday life better. Think using AI to design better routines, creating tools to save time or reduce stress, hacking your calendar for more me time, or building your own systems for better wellbeing. Whether it's a new app, a weekend project, or a simple mindset shift - this night is for the curious, the tinkerers, and anyone keen to stretch their creativity beyond the 9–5."
              attendees={undefined}
              type="upcoming"
            />
          </div>

          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-[#9582C4]/10 to-[#3AAFA7]/10 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">RSVP Required</h3>
              <p className="text-gray-700 mb-6">
                Secure your spot for this interactive session on personal innovation.
              </p>
              <a 
                href="https://lu.ma/ox99gh1g" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#F7DD3C] text-black px-6 py-3 rounded-lg font-semibold hover:bg-[#F7DD3C]/90 transition-colors inline-block mr-4"
              >
                RSVP on Luma
              </a>
              <a 
                href="https://lu.ma/u/thecreativeinnovativenetwork" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#9582C4] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#9582C4]/90 transition-colors inline-block"
              >
                Follow on Luma
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
