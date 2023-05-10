import './App.css';
import './Style components/Navigation.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AboutUs } from './Components/AboutUs';
import { RecentWork } from './Components/RecentWork';
import { GetInTouch } from './Components/GetInTouch.js';
import { TechStack } from './Components/TechStack';
import { ContactUsFile } from './Components/ContactUsFile';
import { Layout } from './Components/Layout';
import { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import { AllPages } from './Components/AllPages/AllPages';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleThemeChange = () => {
    setIsDarkMode(!isDarkMode);
  }

  return (
    <>
      <Layout isDarkMode={isDarkMode} handleThemeChange={handleThemeChange} >
        <Routes>

          <Route path='shivamani' element={<AllPages isDarkMode={isDarkMode} handleThemeChange={handleThemeChange} />} />
          <Route path='home' element={<AboutUs isDarkMode={isDarkMode} handleThemeChange={handleThemeChange} />} />
          <Route path='recentWork' element={<RecentWork isDarkMode={isDarkMode} handleThemeChange={handleThemeChange} />} />
          <Route path='techStack' element={<TechStack isDarkMode={isDarkMode} handleThemeChange={handleThemeChange} />} />
          <Route path='getInTouch' element={<GetInTouch isDarkMode={isDarkMode} handleThemeChange={handleThemeChange} />} />
          <Route path='contactUsFile' element={<ContactUsFile isDarkMode={isDarkMode} handleThemeChange={handleThemeChange} />} />
        </Routes>
      </Layout>
    </>
  );
}
export default App;
