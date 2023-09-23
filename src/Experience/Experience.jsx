import React from 'react'
import './ExperienceStyle.css'
import ExperienceData from './ExperienceData'
import { useSpring, animated } from '@react-spring/web';

function Experience() {
  return (
    <div className="experience-page" style={{minHeight:"100vh" , textAlign:"center"}} >
    <h1 className='ExpHeading'>Experience</h1>
    <p className='ExpTitle'  >I'm happy to have the privelege of collaborating with these Companies</p>
    <div className="d-flex flex-column justify-content-center" style={{alignItems:"center"}}>
      {ExperienceData.map(ncard)}
    </div>
  </div>
  )
}


const ncard = (val)=>{
  return(  <CompanyCard
   key={val.id}
   imageUrl={val.logo}
   title={val.title}
   description={val.Description}
   Slink={val.SiteLnk}
   clink={val.Certificate}
   isImageOnLeft={val.islef}
   />
   
   )
}

 // Import the CSS file for styling


function CompanyCard({ title, description,Slink, clink, imageUrl, isImageOnLeft }) {
  const cardClass = isImageOnLeft ? "Expcard" : 'card card-reverse';

  return (
    <div className={cardClass}>
      <img className="card-image" src={imageUrl} alt="Card" />
      <div className=" .card-content w-100 p-5">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="card-buttons">
        <a  href={Slink} >
        <button onClick={()=>Slink} style={{ backgroundColor: '#3483DE', color: 'white' }}>
            Website
          </button>
          </a>
          <a href={clink}>
          <button onClick={()=>clink} style={{ backgroundColor: '#3483DE', color: 'white' }}>
              Certificate
             </button>
             </a>
        </div>
      </div>
    </div>
  );
}

// function CompanyCard( props ){
  
//   return(
//     // <div className="mb-3 m-4" >
//       <div className="cardd " >
//         <div className="card-body p-3 ">
//         <img src={props.logo} alt="Logo" className="card-img ImageClass" />
//           <h2 className="card-title">{props.title}</h2>
//           <p className="card-text">{props.Des}</p>
//           <div className="d-flex justify-content-between">
//             <button className="btn btn-primary">
//               Website
//             </button>
//             <button  className="btn btn-success">
//               Certificate
//             </button>
//           </div>
//       </div>
//     </div>
//   // </div>
//   );

// }

export default Experience;