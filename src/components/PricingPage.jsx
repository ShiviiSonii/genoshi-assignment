import React, { useState,useEffect } from 'react';

const plans = [
  {
    name: 'Basic Plan',
    price: '$4/month/user',
    graphs: 'Up to 10 graphs',
    chatbotQueries: 'Up to 500 chatbot queries',
    features: ['Basic features','New Features'],
  },
  {
    name: 'Pro Plan',
    price: '$8/month/user',
    graphs: 'Up to 50 graphs',
    chatbotQueries: 'Up to 1000 chatbot queries',
    features: ['Email support', 'Live chat support'],
  },
  {
    name: 'Enterprise Plan',
    price: 'Contact for price',
    graphs: 'Unlimited graphs',
    chatbotQueries: 'Ability to upload custom PDFs',
    features: ['24/7 phone support', 'Email support'],
  },
];

const Pricing = () => {
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);

  const handlePlanSelection = (index) => {
    setSelectedPlan(plans[index]);
  };

  useEffect(() => {
    setSelectedPlan(plans[0]);
  }, []);


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-white">Plans & Pricing</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 ">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-6 border border-gray-200 rounded-md ${
              selectedPlan === plan ? 'bg-grey-100' : ''
            }`}
          >
            <h2 className="text-xl font-bold mb-4 text-white">{plan.name}</h2>
            <p className="text-[#B2B7BC] mb-2">{plan.price}</p>
            <p className="text-[#B2B7BC] mb-2">{plan.graphs}</p>
            <p className="text-[#B2B7BC] mb-4">{plan.chatbotQueries}</p>
            <ul className="list-disc list-inside text-[#B2B7BC]">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex}>{feature}</li>
              ))}
            </ul>
            <div className='my-4 flex justify-center'>
            <input
              type="radio"
              name="plan"
              id={`plan-${index}`}
              onChange={() => handlePlanSelection(index)}
              checked={selectedPlan === plan}
            />
            <label htmlFor={`plan-${index}`} className="ml-2 text-[#B2B7BC]">
              Select Plan
            </label>
            </div>
          </div>
        ))}
      </div>

      {selectedPlan && (
        <div className="mt-8 p-6 bg-blue-100 rounded-md">
          <h2 className="text-xl font-bold mb-4">Selected Plan : {selectedPlan.name}</h2>
          <p>{selectedPlan.price}</p>
          <p>{selectedPlan.graphs}</p>
          <p>{selectedPlan.chatbotQueries}</p>
          <ul className="list-disc list-inside">
            {selectedPlan.features.map((feature, featureIndex) => (
              <li key={featureIndex}>{feature}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Pricing;
