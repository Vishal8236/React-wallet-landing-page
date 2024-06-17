import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import CompanyLogo from './Components/CompanyLogo';
import DashboardImg from './Components/DashboardImg';
import Pros from './Components/Pros';
import Feedback from './Components/Feedback';
import QuestionTalk from './Components/QuestionTalk';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="w-full">
      <Navbar />

      {/* main content  */}
      <div className='bg-primary'>
        <div className='max-w-4xl mx-auto'>
          <Hero />
          <CompanyLogo />
          <DashboardImg />
          <Pros />
          <Feedback />
          <QuestionTalk />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
