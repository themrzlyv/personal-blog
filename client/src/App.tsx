import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import About from './ui/About';
import Blog from './ui/Blog';
import Home from './ui/Home';
import PostDetail from './ui/PostDetail';
import Projects from './ui/Projects';

// import PreLoader from './components/PreLoader';
// const Layout = React.lazy(() => import('./components/Layout'));
// const About = React.lazy(() => import('./ui/About'));
// const Blog = React.lazy(() => import('./ui/Blog'));
// const Projects = React.lazy(() => import('./ui/Projects'));


const App: React.FC = () => {
  return (
      // {/* <Suspense fallback={<PreLoader />}> */}
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/post/:title" element={<PostDetail />} />
          </Routes>
        </Layout>
      // {/* </Suspense> */}
  );
};

export default App;
