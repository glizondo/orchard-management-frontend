import dashboard1 from './images/dashboard1.jpg';
import dashboard2 from './images/dashboard2.jpg';
import dashboard3 from './images/dashboard3.jpg';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useState, useEffect } from 'react';

function Dashboard() {

  const imagesDashboard = [
    dashboard1,
    dashboard2,
    dashboard3
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % imagesDashboard.length);
    }, 7000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <TransitionGroup className="slideshow-container">
      <CSSTransition
        key={currentSlide}
        timeout={2000}
        classNames="fade"
      >
        <img src={imagesDashboard[currentSlide]} />
      </CSSTransition>
    </TransitionGroup>
  )
}

export default Dashboard;