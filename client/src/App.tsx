import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import PreLoader from './components/PreLoader';

const Home = React.lazy(() => import('./ui/Home'));
const About = React.lazy(() => import('./ui/About'));
const Blog = React.lazy(() => import('./ui/Blog'));
const Projects = React.lazy(() => import('./ui/Projects'));
const NotFound = React.lazy(() => import('./ui/NotFound'));
const PostDetail = React.lazy(() => import('./ui/PostDetail'));

const App: React.FC = () => {
  return (
    <Suspense
      fallback={
        <Layout>
          <PreLoader />
        </Layout>
      }
    >
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/post/:title" element={<PostDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Suspense>
  );
};

export default App;
