import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './routes/home';
import About from './routes/about';
import Kittens from './routes/kittens/kittens';
import Contact from './routes/contact';
import Resources from './routes/resources';
import Sidebar from './components/Sidebar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="grid grid-cols-2 md:grid-cols-4 py-8 items-center px-[7%] w-[100vw]  mt-8">
            <div className="">
              <Link to="/">
                <h1 className="text-lg uppercase font-black">
                  My cute kittens
                </h1>
              </Link>
            </div>
            <div className="col-span-2  md:flex md:justify-evenly hidden">
              <Link to="/">
                <a
                  className="mr-8 hover:scale-110 hover:uppercase font-bold text-lg"
                  href="/"
                >
                  home
                </a>
              </Link>
              <Link to="/about">
                <a
                  className="mr-8 hover:uppercase font-bold text-lg hover:scale-110"
                  href="/about"
                >
                  about
                </a>
              </Link>
              <Link to="/kittens">
                <a
                  className="mr-8 hover:uppercase font-bold text-lg hover:scale-110"
                  href="/kittens"
                >
                  kittens
                </a>
              </Link>
              <Link to="/resources">
                <a
                  className="mr-8 hover:uppercase hover:scale-110 font-bold text-lg"
                  href="/contact"
                >
                  resources
                </a>
              </Link>
            </div>
            <div className="hidden md:flex md:justify-end">
              <Link to="/contact">
                <a
                  href="/contact"
                  className="px-6 py-2 font-bold bg-gradient-to-b from-indigo-800 to-pink-400 text-white tracking-wide text-large shadow-lg"
                >
                  Contact
                </a>
              </Link>
            </div>
            <div className="md:hidden justify-end flex">
              <Sidebar />
            </div>
          </nav>

          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/kittens" element={<Kittens />}></Route>
            <Route exact path="/resources" element={<Resources />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
}
export default App;
