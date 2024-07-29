import './App.css';
import React, { useState } from 'react';
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import AboutSection from './Components/AboutSection';
import TextArea from './Components/TextArea';
import AuthorSection from './Components/AuthorSection';

function App() {
  const [isChecked, setIsChecked] = useState(true);

  const handleToggleSwitch = (event) => {
    setIsChecked(event.target.checked);
  };

  const mode = isChecked ? 'body' : 'dark-subtle';

  const scrollUp = () => {
    const scrollY = window.scrollY;
    const scrollUp = document.getElementById('scroll-up');
    if (scrollY >= 75) {
      scrollUp.classList.add('show-scroll');
    } else {
      scrollUp.classList.remove('show-scroll');
    }
  }
  window.addEventListener('scroll', scrollUp);

  return (
    <div className="d-flex flex-column min-vh-100">
      <NavBar title='TextTuner' toggleSwitch={handleToggleSwitch} isChecked={isChecked} className='mb-3' />
      <div className={`flex-fill bg-${mode}`}>
        <div className="row mx-3">
          <div className="col-md-9">
            <TextArea placeholder="Enter something...." />
            <AuthorSection className='my-3 mb-3' />
          </div>
          <div className="col-md-3 my-3">
            <AboutSection rightHeading='About' />
            <a href="#" className="scrollup" id="scroll-up">
            <i className="uil uil-arrow-up scrollup__icon"></i>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
