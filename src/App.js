import logo from './logo.svg';
import './App.css';
import Navigation from './customer/components/navigation/Navigation';
import MainCarosel from './customer/components/HomeCarosel/MainCarosel';

function App() {
  return (
    <div>
      <Navigation />
      <MainCarosel />
    </div>
  );
}

export default App;
