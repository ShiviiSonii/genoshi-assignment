import React from 'react';
import ProfileDashboard from './components/ProfileDashboard';
import CreateNewGraphForm from "./components/CreateNewGraphForm"
import GraphDetailsPage from "./components/GraphDetails"
import AccountDetailsPage from "./components/AccountDetails"
import PricingPage from './components/PricingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const CreateNewGraph = () => (
  <div className='bg-[#293645]'>
    <h1 className='text-center font-bold p-4 text-white text-2xl'>Create New Graph</h1>
    <CreateNewGraphForm/>
  </div>
);

const GraphDetails = () => (
  <div className='bg-[#293645]'>
    <h1 className='text-center font-bold p-4 text-white text-3xl'>Graph Details</h1>
    <GraphDetailsPage/>
  </div>
);

const AccountDetails = () => (
  <div className='bg-[#293645]'>
    <AccountDetailsPage/>
  </div>
);

const Pricing = () => (
  <div className='bg-[#293645]'>
    <h1 className='text-center font-bold p-4 pt-20 text-white text-3xl'>Pricing Details</h1>
    <PricingPage/>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/create-new-graph' element={<CreateNewGraph />} />
        <Route path='/graph-details' element={<GraphDetails />} />
        <Route path='/account-details' element={<AccountDetails />} />
        <Route path="/" element={<div><ProfileDashboard /></div>} />
        <Route path='/pricing' element={<Pricing />} />
      </Routes>
    </Router>
  );
};

export default App;
