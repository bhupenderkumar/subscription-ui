import SubscriptionPlans from '../components/SubscriptionPlans';

const Plans = () => {
  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-lg font-medium leading-6 text-gray-900">Available Subscription Plans</h2>
        <div className="mt-5">
          <SubscriptionPlans />
        </div>
      </div>
    </div>
  );
};

export default Plans;
