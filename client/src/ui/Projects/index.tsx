import React from 'react';
import { Chrono } from 'react-chrono';
import { TimelineItemModel } from 'react-chrono/dist/models/TimelineItemModel';

const Projects = () => {
  const items: TimelineItemModel[] = [
    {
      cardTitle: 'Personal Blog',
      cardSubtitle: 'Full-Stack Web Application',
      cardDetailedText: 'React, React Hooks, Typescript, Tailwind, Express, Prisma, PostgreSQL',
      position: 'left',
    },
    {
      cardTitle: 'Authline Car Rental',
      cardSubtitle: 'Full-Stack',
      cardDetailedText: 'React, Typescript, Mui, Express, Prisma, MongoDB',
      position: 'left',
    },
    {
      cardTitle: 'E-Commerce Website',
      cardSubtitle: 'Full-Stack',
      cardDetailedText: 'React, Typescript, Redux, Formik, Express, MongoDB',
      position: 'left',
    },
    {
      cardTitle: 'Flexline Blog',
      cardSubtitle: 'Full-Stack',
      cardDetailedText: 'React, Typescript, Redux, Formik, Bootstrap 5, Express, MongoDB',
      position: 'left',
    },
    {
      cardTitle: 'Movieland Website',
      cardSubtitle: 'Front-End',
      cardDetailedText: 'Next Js, Context Api, Sass, TMDB Api',
      position: 'left',
    },
  ];

  return (
    <div className='w-full py-5 my-5 dark:bg-zinc-900 shadow-md'>
      <Chrono
        items={items}
        hideControls
        slideShow
        slideItemDuration={4500}
        lineWidth={5}
        theme={{ primary: 'gray', secondary: 'cyan', titleColor: 'white' }}
      />
    </div>
  );
};

export default Projects;
