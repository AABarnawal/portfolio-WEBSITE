import React from 'react';
import { useRef,useState, useEffect } from 'react';
import './AboutStyle.css'
function About() {
  const targetRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { rootMargin: '0px', threshold: 0.1 }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <div className="about-menu">
      <div className="about-section">
        <h1 className={`visible-element ${isVisible ? 'show' : ''}`}
          ref={targetRef}
        >About Me</h1>
        <p className={`visible-element ${isVisible ? 'show' : ''}`}
          ref={targetRef}
        >A proficient developer skilled in diverse platforms, languages, and embedded systems. Experienced in cutting-edge development tools and procedures. Notable roles include Android Developer at 366pi, enhancing user experience and integrating APIs, and Frontend Developer at Besant Technologies, improving website scalability. Currently pursuing a Bachelor's in Computer Application at Indira Gandhi National Open University.
        </p>
        
      </div>
      <div className={`visible-element ${isVisible ? 'show' : ''} card-container `}
          ref={targetRef}
        >
        <Card highnum="32" title="Projects" block="+" />
        <Card highnum="2" title="Companies" block=">>" />
        <Card highnum="4" title="Coding Journey" block="+years" />
      </div>
    </div>
  );
}

function Card({ title, highnum, block }) {
        const [number, setNumber] = useState(0);
    
        useEffect(() => {
          const interval = setInterval(() => {
            // Increase the number by 1 each time the interval is triggered
            setNumber((prevNumber) => {
              const nextNumber = prevNumber + 1;
              if (nextNumber >= highnum) {
                clearInterval(interval); // Stop the interval when number >= 10
                return highnum; // Set the number to the desired value (10 in this case)
              }
              return nextNumber;
            });
          }, 50); 
          return () => clearInterval(interval);
        }, []);
  return (
    <div className="AboutCard">
      <h2>{number}{block}</h2>
      <p>{title}</p>
    </div>
  );
}

export default About
