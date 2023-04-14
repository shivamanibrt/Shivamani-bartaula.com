import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavigationBarFile } from './Components/NavigationBarFile';
import { AboutUs } from './Components/AboutUs';
import { RecentWork } from './Components/RecentWork';
import { GetInTouch } from './Components/GetInTouch.js';
import { TechStack } from './Components/TechStack';
import { FooterFile } from './Components/FooterFile';

function App() {
  return (
    <>
      <NavigationBarFile />
      <AboutUs />
      <RecentWork />
      <GetInTouch />
      <TechStack />
      <FooterFile />

    </>
  );
}

export default App;
