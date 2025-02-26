import React from 'react';
import UserCreationForm from './components/UserCreationForm';
import SubscriptionPlans from './components/SubscriptionPlans';
import SubscriberContent from './components/SubscriberContent';
import './App.css';

const App: React.FC = () => {
  return (
    <div>
      <h1>Subscription App</h1>
      <a href="/subscription-plans">Subscription Plans</a>
      <UserCreationForm />
      <SubscriptionPlans />
      <SubscriberContent />
    </div>
  );
};

export default App;
