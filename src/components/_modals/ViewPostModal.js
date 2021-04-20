import React from "react";

//Elements
import CloseButton from "../_elements/CloseButton";

const ViewPostModal = () => {
  return (
    <div className="modal">
      <div className="card">
        <CloseButton />
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
      </div>
    </div>
  );
};

export default ViewPostModal;
