import React from 'react';

const SavedGraph = ({ title, dateCreated, thumbnailUrl }) => {
  return (
    <div className="mb-4 bg-[#293645] p-6 rounded-md flex flex-col items-center">
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-500">Date Created: {dateCreated}</p>
      <img className="mt-10 h-50 w-45  rounded-md" src={thumbnailUrl} alt="Graph Thumbnail" />
    </div>
  );
};

export default SavedGraph;
