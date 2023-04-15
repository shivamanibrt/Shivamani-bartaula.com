import './App.css';
import './Style components/Navigation.css'
// import './Style components/AboutUs.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavigationBarFile } from './Components/NavigationBarFile';
import { AboutUs } from './Components/AboutUs';
import { RecentWork } from './Components/RecentWork';
import { GetInTouch } from './Components/GetInTouch.js';
import { TechStack } from './Components/TechStack';
import { FooterFile } from './Components/FooterFile';
import ContactUsFile from './Components/ContactUsFile';
import { useState } from 'react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  }
  return (
    <>
      <NavigationBarFile handleThemeChange={handleThemeChange} isDarkMode={isDarkMode} />
      <AboutUs isDarkMode={isDarkMode} />
      <RecentWork isDarkMode={isDarkMode} />
      <TechStack isDarkMode={isDarkMode} />
      <GetInTouch isDarkMode={isDarkMode} />
      <ContactUsFile isDarkMode={isDarkMode} />
      <FooterFile isDarkMode={isDarkMode} />
    </>
  );
}

export default App;
