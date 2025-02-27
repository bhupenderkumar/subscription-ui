import SubscriberContent from '../components/SubscriberContent';

const Subscribers = () => {
  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h2 className="text-lg font-medium leading-6 text-gray-900">Subscriber Information</h2>
        <div className="mt-5">
          <SubscriberContent />
        </div>
      </div>
    </div>
  );
};

export default Subscribers;
