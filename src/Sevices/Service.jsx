import React, { useRef, useEffect, useState } from 'react';
import './ServiceStyle.css';
import frontend from '../Components/frontend.jpg';
import backend from '../Components/backend.jpg';
import andro from '../Components/andro.jpg';

function Service() {    
    return (
      <div style={{textAlign:"center", minHeight:"100vh", width:"99%", margin:0}}>
          <h1 className='ServiceHeading'>Services We Provide</h1>
          <p className='ServiceTitle' >Through the combination of people, process, and technology, We delivers a closing experience that is simple, secure, and consistent at scale.</p>    
            <div  className={` row justify-content-around`}>    
          <ServiceCard
          logo={frontend}
          title="Frontend"
          Desc= {<p style={{
                      color:"white",
                      fontWeight:"Bold",
                      fontSize:"25px",

                      }}>
                    HTML <br />
                    CSS<br />
                    JavaScript<br />
                    React.js
                </p>}
          />
          <ServiceCard
          logo={backend}
          title="Backend"
          Desc={<p style={{
                      color:"white",
                      fontWeight:"Bold",
                      fontSize:"25px",

                      }}>
                    Nodejs<br />
                    MongoDB<br />
                    JAVA
                </p>}
                />
          <ServiceCard
          logo = {andro}
          title="App Development"
          Desc = {<p style={{
                        color:"white",
                        fontWeight:"Bold",
                        fontSize:"25px",

                        }}>
                      Kotlin <br />
                      Jetpack Compose<br />
                      Material 3<br />
                      RoomDB<br/>
                  </p>}
          />
          </div>
      </div>
    )
}

const ServiceCard = (props) =>{
  const [isHovered, setIsHovered] = useState(false);
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
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
return (<div
  className={`visible-element ${isVisible ? 'show' : ''} image-container mb-2`}
  ref={targetRef}
onMouseEnter={handleMouseEnter}
onMouseLeave={handleMouseLeave}
>
<div className="box">
  <img
    src={props.logo} // Replace with your image URL
    alt={props.title}
    className="img"
  />
  <h1 className='title-text'>{props.title}</h1>
</div>
{isHovered && (
  <div className="text-overlay">
    <p >{props.Desc}</p>
  </div>
)}
</div>)
}


export default Service


