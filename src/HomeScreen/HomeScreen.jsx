import React,{ useRef,useState, useEffect }  from 'react'
import vector from '../Components/HomeScreen.gif'
import './HomeScreenStyle.css'
function HomeScreen() {
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
    <div className='HomeContainer bg-black py-3'>
      <br/><br/>
        <div className='HCtext my-0' >
          <h1>
            Ankit Kumar
          </h1>
          <p>Fullstack Developer</p>
        </div>
        <div className='row m-0'>
            {/* img  */}
            <div className={`visible-element ${isVisible ? 'show' : ''} col-md-8 py-5 my-5  `}
          ref={targetRef}
        >
              <p className='HomeText' >A <span style={{color:"#3483DE"}} className="headtext">FullStack Developer</span> building the Web Application and Android Applications that leads to the success of the overall product</p>
              <a href='https://drive.google.com/file/d/1X6Zx2Ws0yXZLdYEKeRJKvKQsDk4gLlJQ/view?usp=drivesdk' >
                <button className=' btn btn-primary m-5 p-3  font-weight-bold' style={{fontSize:"25px",width:"250px"}} >Download Resume</button></a>
            </div>
            <img src={vector} className='col-md-3' style={{ transform: "rotateY(180deg)", height:"400px", verticalAlign:"middle"}} alt="" srcset="" />
        </div>
        
    </div>
  )
}

export default HomeScreen
