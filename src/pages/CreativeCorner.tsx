
import React from 'react';
import MemberSpotlight from '../components/MemberSpotlight';
import { Users, Heart, Star } from 'lucide-react';

const CreativeCorner = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#53C3CC] to-[#F7F080] py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Creative Corner</h1>
          <p className="text-xl text-gray-800 leading-relaxed">
            A place to celebrate the people who make this community great. Meet the 
            designers, strategists, and innovators who bring their unique perspectives to our network.
          </p>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-[#9582C4] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">150+</h3>
              <p className="text-gray-600">Community Members</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-[#FC7951] rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">25+</h3>
              <p className="text-gray-600">Collaborative Projects</p>
            </div>
            
            <div className="p-6">
              <div className="w-16 h-16 bg-[#3AAFA7] rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">50+</h3>
              <p className="text-gray-600">Events Hosted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Member Spotlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Member Spotlights</h2>
            <p className="text-lg text-gray-600">
              Get to know some of the amazing people in our community
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <MemberSpotlight
              name="Sarah Chen"
              title="UX Design Lead at TechFlow"
              story="Sarah joined TCN looking to connect with other designers facing similar challenges in scaling design systems. Through our community, she's found not just collaborators but lifelong friends. She recently led a workshop on inclusive design that inspired a dozen new community projects. 'The diversity of perspectives here has completely changed how I approach design problems,' Sarah shares."
            />

            <MemberSpotlight
              name="Marcus Rodriguez"
              title="Innovation Strategist at FutureWorks"
              story="As a strategy consultant, Marcus was used to working solo until he discovered TCN. 'I was skeptical about creative communities at first, but the depth of conversations here is incredible,' he says. Marcus has since co-facilitated three Brew & Brainstorm sessions and launched a peer mentoring group for mid-career strategists. His favorite part? The unexpected connections across disciplines."
            />

            <MemberSpotlight
              name="Priya Patel"
              title="Product Designer & Entrepreneur"
              story="Priya credits TCN with helping her make the leap from corporate design to launching her own design consultancy. 'The community gave me the confidence and connections I needed,' she explains. She's now a regular contributor to our events and recently organized a design sprint that brought together members from different backgrounds to tackle local community challenges."
            />

            <MemberSpotlight
              name="Alex Thompson"
              title="Design Researcher at InnovateLab"
              story="Alex discovered TCN while looking for a community that valued both rigorous research and creative experimentation. 'I love how people here are genuinely curious about each other's work,' Alex notes. They've since presented their research on emerging user behaviors and helped establish our monthly research share sessions. Their work on ethical AI design has influenced several community projects."
            />

            <MemberSpotlight
              name="Jordan Kim"
              title="Brand Strategist & Creative Director"
              story="After years in agency life, Jordan was looking for deeper creative conversations. TCN provided exactly that. 'The quality of dialogue here is exceptional - people really listen and build on each other's ideas,' Jordan observes. They've become known for their insightful questions during events and recently launched a creative writing circle for community members interested in storytelling."
            />

            <MemberSpotlight
              name="Elena Vasquez"
              title="Service Design Consultant"
              story="Elena joined TCN after relocating to the city and wanting to connect with the local creative community. 'I was new to the area and nervous about networking, but TCN felt different from day one,' she reflects. Elena has since co-organized several events and leads our monthly service design discussion group. Her expertise in human-centered design has enriched countless community conversations."
            />
          </div>
        </div>
      </section>

      {/* Join the Spotlight */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Want to be Featured?</h2>
          <div className="bg-gradient-to-r from-[#9582C4]/10 to-[#FC7951]/10 p-8 rounded-lg">
            <p className="text-lg text-gray-700 mb-6">
              We love celebrating our community members! If you'd like to share your story, 
              insights, or recent projects with the TCN community, we'd love to hear from you.
            </p>
            <button className="bg-[#9582C4] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#9582C4]/90 transition-colors">
              Nominate Yourself or Someone Else
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CreativeCorner;
