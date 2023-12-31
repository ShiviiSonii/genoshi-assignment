import React from 'react';
import Graph from './Graph';
import RecentActivity from './RecentActivity';
import SavedGraph from './SavedGraph';
import { Link } from "react-router-dom";
import { FaExternalLinkAlt } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";

const ProfileDashboard = () => {

  const pieChartData = {
    labels: ['Category 1', 'Category 2', 'Category 3'],
    values: [30, 40, 30],
  };


  const savedGraphsData = [
    { title: 'Graph 1', dateCreated: '2023-01-15', thumbnailUrl: 'https://img.freepik.com/premium-vector/pie-graph-icon-vector-flat-illustration-pie-chart-infographic-ui-business-presentation_547674-470.jpg?w=2000' },

    { title: 'Graph 2', dateCreated: '2023-01-15', thumbnailUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmVyjfxFUd3u-X1s2RbnEDr5xLrUqECSt2Gw&usqp=CAU' },

    { title: 'Graph 3', dateCreated: '2023-02-10', thumbnailUrl: 'https://content.presentermedia.com/files/clipart/00011000/11351/arrow_graph_growth_800_wht.jpg' },
   
  ];

  return (
    <div>
      <nav className="p-4 bg-[#121D24]">
        <div className="container mx-auto px-6 py-2 flex justify-between items-center">
          <div className="text-white font-bold text-xl">GRAFF</div>
          
          <div className="space-x-4">
            <a href="#" className="text-white">Home</a>
            <a href="#" className="text-white">Profile</a>
            <Link to="/pricing" className="text-white">Pricing</Link>
          </div>
        </div>
      </nav>


      <div className="bg-[#121D24] text-white p-8 text-center">
        <div className="mb-4 bg-[#293645] p-10 rounded-md mx-10">
          
          <div className="flex items-center justify-left p-4">
            <img
              className="w-30 h-40 rounded-md ml-10 mr-8"
              src="https://static.vecteezy.com/system/resources/thumbnails/007/209/020/small/close-up-shot-of-happy-dark-skinned-afro-american-woman-laughs-positively-being-in-good-mood-dressed-in-black-casual-clothes-isolated-on-grey-background-human-emotions-and-feeligs-concept-photo.jpg" // Replace with the actual path or URL
              alt="Profile"
            />
            <div>
              <div className='flex items-center gap-3'>
              <p className="text-[30px] px-2 text-white text-left font-semibold">John Doe</p>
              <CiLinkedin size={30}/>
              <FaSquareXTwitter size={25} />
              </div>
              <p className="text-[15px] px-2  text-[#B2B7BC] text-left font-semibold">UI/UX Designer</p>
              <p className="text-m px-2 py-1 text-gray-300 text-left ">john.doe@gmail.com</p>
              <p className="text-sm text-left px-2 py-2">As a graphic designer, I strive to create designs that are not only visually appealing but also communicate a message effectively.</p>
            </div>
          </div>
        </div>

        <div className='flex gap-6 mx-10'>
          <div className="mb-4 bg-[#293645] p-6  px-10 rounded-md w-[25%]">
            <h2 className="text-xl font-bold text-left">Account Details</h2>
            <div className='flex items-center gap-3'>
            <p className='py-2 text-left'>Manage your graff profile</p>
            <FaExternalLinkAlt />
            </div>
          </div>

          <div className="mb-4 bg-[#293645] p-6  px-10 rounded-md w-[25%]">
            <h2 className="text-xl font-bold text-left">Billing</h2>
            <div className='flex items-center gap-3'>
            <p className='py-2 text-left'>$ 17.28 Pending</p>
            <FaExternalLinkAlt />
            </div>
          </div>

          <div className="mb-4  bg-[#293645] p-6 px-10  rounded-md w-[25%]">
            <h2 className="text-xl font-bold text-left">Subscription</h2>
            <div className='flex items-center gap-3'>
            <p className='py-2 text-left'>Subscription Plan : Pro</p>
            <FaExternalLinkAlt />
            </div>
          </div>

          <div className="mb-4 bg-[#293645] p-6 px-10 rounded-md w-[25%]">
            <h2 className="text-xl font-bold text-left">Status</h2>
            <div className='flex items-center gap-3'>
            <p className='py-2 text-left'>Status: Active</p>
            <FaExternalLinkAlt />
            </div>
          </div>
        </div>

        <div className='flex gap-6 mx-10'>
          <div className="mb-4  bg-[#293645] p-10 rounded-md w-[28%]">
            <h2 className="text-2xl font-bold">Usage Metrics</h2>
            <p className='p-2'>Graphs Created</p>
            <Graph data={pieChartData} />
          </div>

          <div className="mb-4  bg-[#293645] p-10 rounded-md w-[50%]">
            <h2 className="text-2xl font-bold mb-10">Recent Activity Feed</h2>
    
            <RecentActivity />
            <p>Graphs Shared: 5</p>
            <p>Papers Collected: 20</p>
          </div>

          <div className="flex flex-col gap-5 mt-10">
            <button className="bg-gradient-to-r from-blue-700 to-teal-500 text-white px-10 py-2 rounded ">Create New Graph</button>
            <button className="bg-gradient-to-r from-blue-700 to-teal-500 text-white px-10 py-2 rounded">Share Graphs</button>
            <button className="bg-gradient-to-r from-blue-700 to-teal-500 text-white px-10 py-2 rounded">Upload Papers</button>
            <button className="bg-gradient-to-r from-blue-700 to-teal-500 text-white px-10 py-2 rounded">Favourite</button>
            <button className="bg-gradient-to-r from-blue-700 to-teal-500 text-white px-10 py-2 rounded">Collections</button>
          </div>
        </div>

        <div className="mt-8 mx-10">
          <h2 className="text-2xl font-bold mb-10">List of Saved Graphs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {savedGraphsData.map((graph, index) => (
              <SavedGraph
                key={index}
                title={graph.title}
                dateCreated={graph.dateCreated}
                thumbnailUrl={graph.thumbnailUrl}
              />
            ))}
          </div>
        </div>

        <div className='flex flex-col gap-4 mx-10'>
          <Link to="/create-new-graph" className=" bg-[#293645] p-2 px-10 rounded-md w-[100%]">
            <h2 className="text-xl font-bold text-left">Create New Graph Page</h2>
            <div className='flex items-center gap-4'>
           
            <p className='py-2 text-left'>Make your own graph</p>
            <FaExternalLinkAlt />
            </div>
          </Link>

          <Link to="/graph-details" className=" bg-[#293645] p-2 px-10 rounded-md w-[100%]">
            <h2 className="text-xl font-bold text-left">Graph Details Page</h2>
            
            <div className='flex items-center gap-4'>
            <p className='py-2 text-left'>Check Graph Details- Title, Description , Colors etc.</p>
            <FaExternalLinkAlt />
            </div>
          </Link>

          <Link to="/account-details" className=" bg-[#293645] p-2 px-10 rounded-md w-[100%]">
            <h2 className="text-xl font-bold text-left">Account Settings</h2>
           
            <div className='flex items-center gap-4'>
            <p className='py-2 text-left'>Update user profile details</p>
            <FaExternalLinkAlt />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileDashboard;
