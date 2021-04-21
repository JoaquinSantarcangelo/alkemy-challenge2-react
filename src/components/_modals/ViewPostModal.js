import React from "react";

//Elements
import Modal from "../_elements/Modal";

const ViewPostModal = ({ setModals, modals }) => {
  const { viewPost } = modals;

  const handleClose = () => {
    setModals({ ...modals, viewPost: { ...viewPost, state: false } });
  };

  return (
    <Modal onClose={handleClose} id="view-post-modal">
      <>
        <div className="title">Post Title</div>
        <div className="text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur
          vitae reiciendis eos provident. Sequi necessitatibus quibusdam ut
          doloribus. Cumque consequuntur tempora amet aliquid beatae minus, vel
          ullam hic eum temporibus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Iure in molestiae at aspernatur sequi expedita
          aliquam corporis ullam id nam quae nemo, veniam error dolore
          reiciendis officiis culpa fuga suscipit!
        </div>
      </>
    </Modal>
  );
};

export default ViewPostModal;
