import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PreLoader from './components/PreLoader';
import Home from './ui/Home';

const Layout = React.lazy(() => import('./components/Layout'));
const About = React.lazy(() => import('./ui/About'));
const Blog = React.lazy(() => import('./ui/Blog'));
const Projects = React.lazy(() => import('./ui/Projects'));


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PreLoader />}>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Layout>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
