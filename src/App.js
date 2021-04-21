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
import MessageModal from "./components/_modals/MessageModal";

const App = () => {
  //Modals State
  const [modals, setModals] = useState({
    currentPostId: null,
    viewPost: { state: false, post: {} },
    addPost: { state: false, post: {} },
    enterPostId: { state: false, action: "" },
    message: { state: false, type: "", text: "" },
  });

  return (
    <div>
      {/* ---- Modals ---- */}

      {/* View Post Modal */}
      <AnimatePresence>
        {modals.viewPost.state && (
          <ViewPostModal modals={modals} setModals={setModals} />
        )}
      </AnimatePresence>

      {/* Add Post Modal */}
      <AnimatePresence>
        {modals.addPost.state && (
          <AddPostModal modals={modals} setModals={setModals} />
        )}
      </AnimatePresence>

      {/* Enter Post ID Modal */}
      <AnimatePresence>
        {modals.enterPostId.state && (
          <EnterPostIdModal modals={modals} setModals={setModals} />
        )}
      </AnimatePresence>

      {/* MessageModal Modal */}
      <AnimatePresence>
        {modals.message.state && (
          <MessageModal modals={modals} setModals={setModals} />
        )}
      </AnimatePresence>

      <Navbar modals={modals} setModals={setModals} />
      <Hero />
      <Home modals={modals} setModals={setModals} />
    </div>
  );
};

export default App;
