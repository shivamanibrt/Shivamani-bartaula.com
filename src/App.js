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

          <Route path='shivamani' element={<AllPages />} />
          <Route path='home' element={<AboutUs />} isDarkMode={isDarkMode} />
          <Route path='recentWork' element={<RecentWork />} isDarkMode={isDarkMode} />
          <Route path='techStack' element={<TechStack />} isDarkMode={isDarkMode} />
          <Route path='getInTouch' element={<GetInTouch />} isDarkMode={isDarkMode} />
          <Route path='contactUsFile' element={<ContactUsFile />} isDarkMode={isDarkMode} />
        </Routes>
      </Layout>
    </>
  );
}
export default App;
