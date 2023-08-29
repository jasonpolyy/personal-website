import React from 'react';
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export const Photos = ({
  title,
  description,
  image,
  photo1,
  photo2,
  photo3,
  photo4,
  photo5,
  photo6,
  photo7,
  photo8,
  photo9,
  photo10,
  photo11,
  photo12,
  buttons

}) => {
  return (
    <div className="bg-secondary py-5 px-2">
      <div className="container">
        <div className=" row align-items-center g-1">
          <div className="col-sm-0">
            <h1 className="text-primary fw-bold display-5">{title}</h1>
            <p className="text-primary fw-normal">{description}</p>
            {/* <div className="text-center">
            {buttons.map((value, index) => (
              (value.isPrimary) ?
                <Link key={index} href={value.link}>
                  <a className="btn btn-primary my-0 mx-3">{value.title}</a>
                </Link>
                :
                <Link key={index} href={value.link}>
                  <a target="_blank" rel="noreferrer" className="btn btn-outline-primary my-0 mx-3">{value.title}</a>
                </Link>
            ))}
          </div> */}
          </div>
          <div className="col-sm-4 text-center">
            <img
              className="img-fluid my-0 image" width="500"
              height="250" src={publicRuntimeConfig.basePath + photo1}
              alt=""
            />
          </div>
          <div className="col-sm-4 text-center">
            <img
              className="img-fluid my-0 image" width="500"
              height="250" src={publicRuntimeConfig.basePath + photo2}
              alt=""
            />
          </div>
          <div className="col-sm-4 text-center">
            <img
              className="img-fluid my-0 image" width="500"
              height="250" src={publicRuntimeConfig.basePath + photo3}
              alt=""
            />
          </div>
          <div className="col-sm-4 text-center">
            <img
              className="img-fluid my-0 image" width="500"
              height="250" src={publicRuntimeConfig.basePath + photo4}
              alt=""
            />
          </div>
          <div className="col-sm-4 text-center">
            <img
              className="img-fluid my-0 image" width="500"
              height="250" src={publicRuntimeConfig.basePath + photo5}
              alt=""
            />
          </div>
          <div className="col-sm-4 text-center">
            <img
              className="img-fluid my-0 image" width="500"
              height="250" src={publicRuntimeConfig.basePath + photo6}
              alt=""
            />
          </div>
          <div className="col-sm-4 text-center">
            <img
              className="img-fluid my-0 image" width="500"
              height="250" src={publicRuntimeConfig.basePath + photo7}
              alt=""
            />
          </div>
          <div className="col-sm-4 text-center">
            <img
              className="img-fluid my-0 image" width="500"
              height="250" src={publicRuntimeConfig.basePath + photo8}
              alt=""
            />
          </div>
          <div className="col-sm-4 text-center">
            <img
              className="img-fluid my-0 image" width="500"
              height="250" src={publicRuntimeConfig.basePath + photo9}
              alt=""
            />
          </div>
          <div className="col-sm-4 text-center">
            <img
              className="img-fluid my-0 image" width="500"
              height="250" src={publicRuntimeConfig.basePath + photo10}
              alt=""
            />
          </div>
          <div className="col-sm-4 text-center">
            <img
              className="img-fluid my-0 image" width="500"
              height="250" src={publicRuntimeConfig.basePath + photo11}
              alt=""
            />
          </div>
          <div className="col-sm-4 text-center">
            <img
              className="img-fluid my-0 image" width="500"
              height="250" src={publicRuntimeConfig.basePath + photo12}
              alt=""
            />
          </div>
        </div>
      </div>
    </div >
  );
}

// export const About = ({ title, description }) => {
//   return (
//     <div id="about" className="bg-white py-5 px-5">
//       <div className="container">
//         <h1 className="text-primary fw-bold">{title}</h1>
//         <div className="px-sm-5">
//           {description.map((value, index) => (
//             <p key={index} >{value}</p>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }