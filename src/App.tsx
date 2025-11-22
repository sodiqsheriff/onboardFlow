import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar';
import AppRoutes from './route/appRoute';
import Footer from './components/footer';


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="grow">
          <AppRoutes />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;