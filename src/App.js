// import logo from './logo.svg';
import './App.css';
import HeroBanner from './components/HeroBanner';
import WorkSection from './components/WorkSection';

function App() {
  return (
    <div className="App flex px-4 py-4 bg-[#171717] pb-56 flex-col">
      <div>
        <HeroBanner />
      </div>
      <div>
        <WorkSection />
      </div>
    </div>
    
  );  
}

export default App;
