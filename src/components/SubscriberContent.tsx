import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface FinancialData {
  revenue: number;
  expenses: number;
  profit: number;
}

const SubscriberContent: React.FC = () => {
  const [financialData, setFinancialData] = useState<FinancialData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFinancialData = async () => {
      setLoading(true);
      setError('');

      try {
        const response = await axios.get('http://localhost:8080/subscriber/financial-data');
        setFinancialData(response.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFinancialData();
  }, []);

  return (
    <div>
      <h2>Subscriber-Only Content</h2>
      {error && <p>{error}</p>}
      {loading ? (
        <p>Loading financial data...</p>
      ) : financialData ? (
        <div>
          <p>Revenue: ${financialData.revenue}</p>
          <p>Expenses: ${financialData.expenses}</p>
          <p>Profit: ${financialData.profit}</p>
        </div>
      ) : (
        <p>No financial data available.</p>
      )}
    </div>
  );
};

export default SubscriberContent;