import React from 'react';
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

export const Photos = ({
  title, description, image,
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
    <div className="bg-secondary py-5 px-1">
      <div className="container">
        <div className=" row align-items-center">
          <div className="col-sm-0">
            <h1 className="text-primary fw-bold display-5">{title}</h1>
            <p>{description}</p>
            {/* <div className="text-center">
              {buttons.map((value, index) => (
                (value.isPrimary) ?
                  <Link key={index} href={value.link}>
                    <a className="btn btn-primary my-1 mx-3">{value.title}</a>
                  </Link>
                  :
                  <Link key={index} href={value.link}>
                    <a target="_blank" rel="noreferrer" className="btn btn-outline-primary my-1 mx-3">{value.title}</a>
                  </Link>
              ))}
            </div> */}
          </div>
          <div className="col-sm-4 text-center">
            <img
              className="img-fluid my-5 image" width="600"
              height="250" src={publicRuntimeConfig.basePath + photo1}
              alt="profile picture"
            />
          </div>
          <div className="col-sm-4 text-center">
            <img
              className="img-fluid my-5 image" width="600"
              height="250" src={publicRuntimeConfig.basePath + photo2}
              alt="profile picture"
            />
          </div>
          <div className="col-sm-4 text-center">
            <img
              className="img-fluid my-4 image" width="600"
              height="250" src={publicRuntimeConfig.basePath + photo3}
              alt="profile picture"
            />
          </div>
          <div className="col-sm-4 text-center">
            <img
              className="img-fluid my-4 image" width="500"
              height="250" src={publicRuntimeConfig.basePath + photo4}
              alt="profile picture"
            />
          </div>
          <div className="col-sm-4 text-center">
            <img
              className="img-fluid my-4 image" width="500"
              height="250" src={publicRuntimeConfig.basePath + photo5}
              alt="profile picture"
            />
          </div>
          <div className="col-sm-4 text-center">
            <img
              className="img-fluid my-4 image" width="500"
              height="250" src={publicRuntimeConfig.basePath + photo6}
              alt="profile picture"
            />
          </div>
          {/* <div className="col-sm-2 text-center">
            <img
              className="img-fluid my-4 image" width="250"
              height="250" src={publicRuntimeConfig.basePath + photo7}
              alt="profile picture"
            />
          </div>
          <div className="col-sm-2 text-center">
            <img
              className="img-fluid my-4 image" width="250"
              height="250" src={publicRuntimeConfig.basePath + photo8}
              alt="profile picture"
            />
          </div>
          <div className="col-sm-2 text-center">
            <img
              className="img-fluid my-1 image" width="250"
              height="250" src={publicRuntimeConfig.basePath + photo9}
              alt="profile picture"
            />
          </div>
          <div className="col-sm-2 text-center">
            <img
              className="img-fluid my-4 image" width="250"
              height="250" src={publicRuntimeConfig.basePath + photo10}
              alt="profile picture"
            />
          </div>
          <div className="col-sm-2 text-center">
            <img
              className="img-fluid my-4 image" width="250"
              height="250" src={publicRuntimeConfig.basePath + photo11}
              alt="profile picture"
            />
          </div> */}
          {/* <div className="col-sm-2 text-center">
            <img
              className="img-fluid my-4 image" width="250"
              height="250" src={publicRuntimeConfig.basePath + photo12}
              alt="profile picture"
            />
          </div> */}
        </div>
      </div>
    </div>
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