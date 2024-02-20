// import logo from './logo.svg';
import './App.css';
import HeroBanner from './components/HeroBanner';
import WorkSection from './components/WorkSection';
import PlaygroundSection from './components/PlaygroundSection';

function App() {
  return (
    <div className="App flex px-4 py-4 bg-[#171717] pb-56 flex-col">
      <div className='mb-48'>
        <HeroBanner />
      </div>
      <div className='mb-48'>
        <WorkSection />
      </div>
      <div>
        <PlaygroundSection />
      </div>
    </div>
    
  );  
}

export default App;
