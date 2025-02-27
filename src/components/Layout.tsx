import { Link } from 'react-router-dom';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-primary text-white py-4 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Subscription App</h1>
            <nav>
              <ul className="flex space-x-4">
                <li>
                  <Link to="/" className="hover:text-blue-200 px-4 py-2">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/subscription-plans" className="hover:text-blue-200 px-4 py-2">
                    Plans
                  </Link>
                </li>
                <li>
                  <Link to="/subscribers" className="hover:text-blue-200 px-4 py-2">
                    Subscribers
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <main className="container mx-auto py-6 px-4 ">
        {children}
      </main>
      <footer className="bg-dark text-white py-4">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Subscription App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
