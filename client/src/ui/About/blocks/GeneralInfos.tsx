import React from 'react';

import ProfilePhoto from '../../../assets/profile_photo.jpg';

const GeneralInfos = () => {
  return (
    <>
      <div className="mb-5">
        <img
          src={ProfilePhoto}
          alt="ProfilePhoto"
          className="w-72 h-70 float-left mx-5 shadow-lg rounded-md"
        />
        <p className="text-gray-600 px-5  font-light text-lg">
          A Successful Front End engineer with 2 years of experience who thrives in a dynamic and
          challenging production environment. Proven track record of providing fast accurate and
          efficient code in response to requests from management to improve existing products or
          address critical issues with infrastructure. Skilled in the following areas: HTML, CSS,
          Javascript, Typescript, OOP, Design Patterns, Data Structure, REST API, GraphQL API also
          modern Javascript libs and frameworks such as React Js, React Hooks, Redux, Redux Saga,
          React Query, Next Js, Express Js, Apollo Server and on style-side Material Ui,
          Styled-components, Tailwind CSS, Bootstrap CSS, Module Sass
        </p>
      </div>
      {/* <div className="flex-1 float-right m-5"></div> */}
    </>
  );
};

export default GeneralInfos;
