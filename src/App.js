import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";

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
  //Modals State
  const [modals, setModals] = useState({
    viewPost: { state: false, post: {} },
    addPost: { state: false, post: {} },
    enterPostId: { state: false, id: 1 },
    error: { state: false, text: {} },
  });

  return (
    <div>
      {/* ---- Modals ---- */}

      {/* View Post Modal */}
      <AnimatePresence>{false && <ViewPostModal />}</AnimatePresence>

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
