import React, { useState } from 'react';

const CreateNewGraphForm = () => {
  const [graphTitle, setGraphTitle] = useState('');
  const [graphDescription, setGraphDescription] = useState('');
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [layout, setLayout] = useState('hierarchical');
  const [colors, setColors] = useState('default');

  const handleFileUpload = (e) => {
    // Handle file upload logic here
  };

  const handleCreateGraph = () => {
    // Handle graph creation logic here
  };

  return (
    <div className="container mx-auto mt-8 ">
     
      <div className="mb-6 mx-10" >
        <label htmlFor="graphTitle" className="block text-sm font-medium text-[#B2B7BC]">
          Graph Title
        </label>
        <input
          type="text"
          id="graphTitle"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          onChange={(e) => setGraphTitle(e.target.value)}
        />

        <label htmlFor="graphDescription" className="block text-sm font-medium text-[#B2B7BC] mt-4">
          Graph Description
        </label>
        <textarea
          id="graphDescription"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          onChange={(e) => setGraphDescription(e.target.value)}
        />
      </div>

      
      <div className="mb-6 mx-10">
        <label className="block text-sm font-medium text-[#B2B7BC]">Upload Papers</label>
        <input 
          type="file"
          className="mt-1 p-2 border bg-white border-gray-300 rounded-md w-full "
          onChange={handleFileUpload}
        />
      </div>

      
      <div className="mb-6 mx-10">
        <label htmlFor="layout" className="block text-sm font-medium text-[#B2B7BC]">
          Layout
        </label>
        <select
          id="layout"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          onChange={(e) => setLayout(e.target.value)}
        >
         
        </select>

        <label htmlFor="colors" className="block text-sm font-medium text-[#B2B7BC] mt-4">
          Colors
        </label>
        <select
          id="colors"
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          onChange={(e) => setColors(e.target.value)}
        >
          <option value="Red"> Red</option>
          <option value="Blue"> Blue</option>
          <option value="Green"> Green</option>

        </select>
      </div>

      <button
        className="bg-gradient-to-r from-blue-700 to-teal-500 text-white px-10 py-2 mx-10 rounded mb-20"
        onClick={handleCreateGraph}
      >
        Create Graph
      </button>
    </div>
  );
};

export default CreateNewGraphForm;
