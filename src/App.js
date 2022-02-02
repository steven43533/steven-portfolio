import './App.css';
import Projects from './Projects';
import Navbar from './Navbar';
import Skills from './Skills';
import About from './About';
import Typewriter from 'typewriter-effect'
import ScrollToTop from 'react-scroll-to-top';
import '@fontsource/roboto/300.css';
import { Typography } from '@mui/material';

function App() {
  return (
    <div className='container'>
      <Navbar />
      <div>
        <div className='name-and-typewriter'>
          <Typography variant='h2' className='my-name'>
            Steven Lopez
          </Typography>
          <Typewriter
            options={{
              strings: ['Web Developer', 'Always Learning', 'Self-Driven', 'Values team-work', 'Enjoys problem solving'],
              autoStart: true,
              loop: true
            }}
          />
        </div>
      </div>
      <Projects />
      <br />
      <Skills />
      <br />
      <About />
      <ScrollToTop
        style={{ opacity: 0.2 }}
      />
    </div>


  )
}

export default App;
