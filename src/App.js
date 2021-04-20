import { AnimatePresence } from "framer-motion";
import React from "react";

//Components
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

//Layout
import Home from "./components/_containers/Home";

//Modals
import AddPostModal from "./components/_modals/AddPostModal";
import ViewPostModal from "./components/_modals/ViewPostModal";
import EnterPostIdModal from "./components/_modals/EnterPostIdModal";
import ErrorModal from "./components/_modals/ErrorModal";

const App = () => {
  return (
    <div>
      {/* ---- Modals ---- */}
      {/* View Post Modal */}
      <AnimatePresence>{true && <ViewPostModal />}</AnimatePresence>
      {/* Add Post Modal */}
      <AnimatePresence>{false && <AddPostModal />}</AnimatePresence>

      {/* Enter Post ID Modal */}
      <AnimatePresence>{false && <EnterPostIdModal />}</AnimatePresence>

      {/* Error Modal */}
      <AnimatePresence>{false && <ErrorModal />}</AnimatePresence>

      <Navbar />
      <Hero />
      <Home />
    </div>
  );
};

export default App;
