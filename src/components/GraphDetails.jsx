import React, { useState } from 'react';

const ShowGraphPage = () => {
  const [graph, setGraph] = useState({
    id: 1,
    title: 'Sample Graph',
    description: 'This is a sample graph description.',
    dateCreated: '2023-01-01',
    papers: [
      { id: 1, title: 'Paper 1', content: 'Paper 1 content' },
      { id: 2, title: 'Paper 2', content: 'Paper 2 content' },
    ],
  });

  const navigateToGraph = () => {
    console.log('Navigate to graph');
  };

  const handleEdit = () => {
    console.log('Edit graph');
  };

  const handleShare = () => {
    console.log('Share graph');
  };

  const handleDelete = () => {
    console.log('Delete graph');
  };

  return (
    <div className="mx-10 text-white my-16 bg-[#293645]">
      <h2 className="text-3xl font-bold mb-4">{graph.title}</h2>
      <p className="text-gray-300">{graph.description}</p>
      <p className="text-gray-300">Date Created: {graph.dateCreated}</p>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
        onClick={navigateToGraph}
      >
        Go to Graph
      </button>

      <h3 className="text-xl mt-6 mb-6">Papers in the Graph:</h3>
      <ul className="list-disc pl-6 pb-4">
        {graph.papers.map((paper) => (
          <li key={paper.id} className="text-gray-300">
            {paper.title} - {paper.content}
            <button className="text-blue-500 mx-2" onClick={() => console.log('Remove paper')}>
              Remove
            </button>
            <button className="text-green-500" onClick={() => console.log('Favorite paper')}>
              Favorite
            </button>
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 mb-20 px-4 mr-2 rounded"
          onClick={handleEdit}
        >
          Edit Graph
        </button>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 mb-20 px-4 mr-2 rounded"
          onClick={handleShare}
        >
          Share Graph
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 mb-20 px-4 rounded"
          onClick={handleDelete}
        >
          Delete Graph
        </button>
      </div>
    </div>
  );
};

export default ShowGraphPage;
