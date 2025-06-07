
import React, { useState } from 'react';
import { MessageCircle, Mail, Heart, ArrowRight, CheckCircle } from 'lucide-react';

const GetInvolved = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [interests, setInterests] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your newsletter service
    console.log('Newsletter signup:', email);
    setIsSubscribed(true);
    setEmail('');
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Volunteer interest:', { name, email, interests });
    setVolunteerSubmitted(true);
    setName('');
    setEmail('');
    setInterests('');
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#9582C4] to-[#3AAFA7] text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get Involved</h1>
          <p className="text-xl leading-relaxed">
            Ready to connect with creative professionals and be part of something meaningful? 
            Here's how you can join our community.
          </p>
        </div>
      </section>

      {/* Ways to Join */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ways to Connect</h2>
            <p className="text-lg text-gray-600">
              Choose the level of involvement that works for you
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Slack Community */}
            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-[#9582C4]">
              <div className="w-16 h-16 bg-[#9582C4] rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Join Our Slack</h3>
              <p className="text-gray-700 mb-6 text-center">
                Connect with the community daily. Share ideas, ask questions, find collaborators, 
                and stay updated on events and opportunities.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#3AAFA7] mr-2" />
                  Daily conversations
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#3AAFA7] mr-2" />
                  Project collaboration channels
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#3AAFA7] mr-2" />
                  Event notifications
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-[#3AAFA7] mr-2" />
                  Resource sharing
                </li>
              </ul>
              <button className="w-full bg-[#9582C4] text-white py-3 rounded-lg font-semibold hover:bg-[#9582C4]/90 transition-colors">
                Join Slack Community
              </button>
            </div>

            {/* Newsletter */}
            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-[#FC7951]">
              <div className="w-16 h-16 bg-[#FC7951] rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Newsletter</h3>
              <p className="text-gray-700 mb-6 text-center">
                Stay informed with our monthly newsletter featuring community highlights, 
                upcoming events, and creative insights.
              </p>
              
              {isSubscribed ? (
                <div className="text-center">
                  <CheckCircle className="w-12 h-12 text-[#3AAFA7] mx-auto mb-4" />
                  <p className="text-[#3AAFA7] font-semibold">Thanks for subscribing!</p>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FC7951] focus:border-transparent"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full bg-[#FC7951] text-white py-3 rounded-lg font-semibold hover:bg-[#FC7951]/90 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

            {/* Volunteer */}
            <div className="bg-white rounded-lg shadow-md p-8 border-t-4 border-[#3AAFA7]">
              <div className="w-16 h-16 bg-[#3AAFA7] rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Volunteer</h3>
              <p className="text-gray-700 mb-6 text-center">
                Help shape our community by volunteering for events, content creation, 
                or community leadership roles.
              </p>
              <ul className="text-gray-600 mb-6 space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#3AAFA7] mr-2" />
                  Event planning
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#3AAFA7] mr-2" />
                  Content creation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#3AAFA7] mr-2" />
                  Community moderation
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-[#3AAFA7] mr-2" />
                  Workshop facilitation
                </li>
              </ul>
              <button className="w-full bg-[#3AAFA7] text-white py-3 rounded-lg font-semibold hover:bg-[#3AAFA7]/90 transition-colors">
                Express Interest
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Interest Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Volunteer Interest Form</h2>
            <p className="text-lg text-gray-600">
              Tell us how you'd like to contribute to the community
            </p>
          </div>

          {volunteerSubmitted ? (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <CheckCircle className="w-16 h-16 text-[#3AAFA7] mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Thank You!</h3>
              <p className="text-gray-700">
                We've received your volunteer interest and will be in touch soon with opportunities 
                that match your interests and availability.
              </p>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8">
              <form onSubmit={handleVolunteerSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9582C4] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="volunteer-email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="volunteer-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9582C4] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-2">
                    How would you like to contribute? (What interests you most?)
                  </label>
                  <textarea
                    id="interests"
                    value={interests}
                    onChange={(e) => setInterests(e.target.value)}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#9582C4] focus:border-transparent"
                    placeholder="Tell us about your interests, skills, and how you'd like to help..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#9582C4] text-white py-3 rounded-lg font-semibold hover:bg-[#9582C4]/90 transition-colors flex items-center justify-center"
                >
                  Submit Interest <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What Happens Next?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-12 h-12 bg-[#9582C4] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Join & Introduce</h3>
              <p className="text-gray-600">
                Jump into our Slack community and introduce yourself in the #introductions channel
              </p>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 bg-[#FC7951] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Attend an Event</h3>
              <p className="text-gray-600">
                Join your first event to meet people face-to-face and experience our community vibe
              </p>
            </div>

            <div className="p-6">
              <div className="w-12 h-12 bg-[#3AAFA7] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Get Involved</h3>
              <p className="text-gray-600">
                Start conversations, share your work, and explore collaboration opportunities
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
