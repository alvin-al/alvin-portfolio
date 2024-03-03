// import logo from './logo.svg';
import './App.css';
import HeroBanner from './components/HeroBanner';
import WorkSection from './components/WorkSection';
import PlaygroundSection from './components/PlaygroundSection';
import GetInTouchSection from './components/GetInTouchSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App flex p-4 bg-[#171717] flex-col">
      <div className='mb-48'>
        <HeroBanner />
      </div>
      <div className='mb-48'>
        <WorkSection />
      </div>
      <div className='mb-48'>
        <PlaygroundSection />
      </div>
      <div className='mb-52'>
        <GetInTouchSection />
      </div>
      <div className="overflow-hidden">
        <Footer />
      </div>
    </div>

    
  );  
}

export default App;
