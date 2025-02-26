import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Plan {
  planId: number;
  planName: string;
  price: number;
  duration: string; 
  features: string;
  description?: string;
}

const SubscriptionPlans: React.FC = () => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPlans = async () => {
      setLoading(true);
      setError('');

      try {
        const response = await axios.get('http://localhost:8080/plans');
        setPlans(response.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  const handleSubscribe = async (planId: number) => {
    try {
      const response = await axios.post(`/subscribe/${planId}`);
      console.log('Subscription successful:', response.data);
      // Handle success scenario
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Subscription Plans</h2>
      {error && <p>{error}</p>}
      {loading ? (
        <p>Loading plans...</p>
      ) : (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.isArray(plans) && plans.length > 0 ? (
            plans.map((plan) => (
              <div key={plan.planId} className="bg-white rounded-lg shadow-md p-4">
                <h3 className="text-xl font-semibold">{plan.planName}</h3>
                <p className="text-gray-600">{plan.description}</p>
                <p className="text-green-500">Price: ${plan.price.toFixed(2)}</p>
                <p className="font-bold">Features:</p>
                <ul className="feature-list">
                  {plan.features.split(',').map((feature: string, index: number) => (
                    <li key={index} className="list-disc ml-4">{feature.trim()}</li>
                  ))}
                </ul>
                <button
                  onClick={() => handleSubscribe(plan.planId)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Subscribe
                </button>
              </div>
            ))
          ) : (
            <p>No plans available.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SubscriptionPlans;