// import React from 'react'
import ProjectsData from './ProjectsData'

// function Projects() {
//   return (
//     <div>
//       <h1>Projects</h1>
//       {/* <div className="w-100"> */}
//         {ProjectsData.map((item) => {
//          return <Card logo={item.img} title={item.title} description={item.description} />
//     })}
//       {/* </div> */}

//     </div>
//   )
// }



// const Card = (props) => {


//   return (
//     // <div className="card mb-3">
//       <div className="ProjectCard row">
//         <div className="col-md-4">
//           <img src={props.logo} alt="Logo" className="card-img" />
//         </div>
//         <div className="col-md-8">
//           <div className="card-body">
//             <h2 className="card-title">{props.title}</h2>
//             <p className="card-text">{props.description}</p>
//             <div className="d-flex justify-content-between">
//               <button className="btn btn-primary">
//                 Project
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     // </div>
//   );
// };



// export default Projects


import React,{useEffect, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProjectsStyle.css'

const ProjectCard = ({ title, description, imageUrl, link }) => (
  <div className="project-card">
    <img src={imageUrl} alt={title} />
    <h2>{title}</h2>
    <p>{description}</p>
    <a href={link}><button className="project-button">Learn More</button></a>
  </div>
);

const PrevArrow = (props) => (
  <button {...props} className="slick-arrow slick-prev bt-s">
  </button>
);

const NextArrow = (props) => (
  <button {...props} className="slick-arrow slick-next bt-s">
  </button>
);

const Projects = () => {
  const [state, setState] = useState(3)
  useEffect(()=>{
    const width = window.innerWidth;
    if( width <= 420){
      setState(1)
    }else{
      setState(3)
    }
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: state,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    accessibility:true,
    focusOnSelect: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="project-car">
      <h1 className='ExpHeading'>Projects</h1>
    {/* <p className='ExpTitle'  >I'm happy to have the privelege of collaborating with these Companies</p>
     */}
      <div className='project-carousel' >
        <Slider {...settings}>
          {ProjectsData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.Description}
              imageUrl={project.img}
              link={project.Link}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};



export default Projects;
