import React from "react";
import { Message } from "../Types/Message";

type Props = {
  message: Message;
};

const Messagebox = (props: Props) => {
  const { message } = props;
  return (
    <div className="w-4/5 flex flex-col  gap-2 p-2 m-2 border border-gray-200 text-white text-start">
      <div className="flex-shrink-0">
        <h6 className="text-sm font-semibold ">{message.user.name}</h6>
      </div>
      <div className="flex-grow">
        <p className="text-sm text-gray-600">{message.content}</p>
      </div>
    </div>
  );
};

export default Messagebox;
