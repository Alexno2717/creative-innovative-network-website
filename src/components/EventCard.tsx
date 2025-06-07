
import React from 'react';
import { Calendar, MapPin, Users } from 'lucide-react';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  attendees?: number;
  type: 'upcoming' | 'past';
}

const EventCard = ({ title, date, time, location, description, attendees, type }: EventCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-[#F7DD3C]">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        {type === 'upcoming' && (
          <span className="bg-[#F7DD3C] text-black px-2 py-1 text-xs rounded-full font-medium">
            Tomorrow
          </span>
        )}
      </div>
      
      <div className="space-y-2 mb-4">
        <div className="flex items-center text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          <span className="text-sm">{date} at {time}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{location}</span>
        </div>
        {attendees && (
          <div className="flex items-center text-gray-600">
            <Users className="w-4 h-4 mr-2" />
            <span className="text-sm">{attendees} attending</span>
          </div>
        )}
      </div>
      
      <p className="text-gray-700 text-sm leading-relaxed">{description}</p>
      
      {type === 'upcoming' && (
        <a 
          href="https://lu.ma/ox99gh1g"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 bg-[#F7DD3C] text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-[#F7DD3C]/90 transition-colors inline-block"
        >
          RSVP on Luma
        </a>
      )}
    </div>
  );
};

export default EventCard;
