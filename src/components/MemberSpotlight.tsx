
import React from 'react';

interface MemberSpotlightProps {
  name: string;
  title: string;
  story: string;
  image?: string;
}

const MemberSpotlight = ({ name, title, story, image }: MemberSpotlightProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center mb-4">
        <div className="w-16 h-16 bg-gradient-to-br from-[#53C3CC] to-[#3AAFA7] rounded-full flex items-center justify-center mr-4">
          {image ? (
            <img src={image} alt={name} className="w-full h-full rounded-full object-cover" />
          ) : (
            <span className="text-white text-xl font-bold">
              {name.split(' ').map(n => n[0]).join('')}
            </span>
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-[#9582C4] font-medium">{title}</p>
        </div>
      </div>
      <p className="text-gray-700 leading-relaxed">{story}</p>
    </div>
  );
};

export default MemberSpotlight;
