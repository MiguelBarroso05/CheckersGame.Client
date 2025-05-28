import { Button, Input } from "@chakra-ui/react";
import { HubConnection } from "@microsoft/signalr";
import { useEffect, useState } from "react";
import { Message } from "../Types/Message";
import User from "../Types/user";
import Messagebox from "./Messagebox";
import { useAuth } from "../Helpers/useAuth";
import axios from "axios";

type Props = {
  conectionRef: React.RefObject<HubConnection | null>;
};
const Chat = (props: Props) => {
  const [messages, setMessages] = useState<Array<Message>>();
  const [message, setMessage] = useState<string>("");
  const { conectionRef } = props;
  const conection = conectionRef.current;
  const { user } = useAuth();
  useEffect(() => {
    if (conection) {
      axios
        .get("http://localhost:5296/api/Message")
        .then((res) => {
          setMessages(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));

      conection.on("ReceiveMessage", (content: string, user: User) => {
        setMessages((prevMessages) => [
          ...(prevMessages || []),
          { user: user, content },
        ]);
        console.log("Mensagem recebida:", content);
      });
    }
  }, [conection]);
  const sendMessage = () => {
    if (conectionRef.current && message.trim() !== "") {
      conectionRef.current.invoke("SendMessage", message).then(() => {
        setMessage("");
      });
    }
  };
  return (
    <div className="border-2 border-gray-300 p-4 rounded-lg ">
      <div className="">
        {messages &&
          messages.map((message, index) => {
            if (user?.id == message.user.id) {
              return (
                <div key={index} className="flex justify-end">
                  <Messagebox message={message} />
                </div>
              );
            } else {
              return (
                <div key={index} className="flex justify-start">
                  <Messagebox message={message} />
                </div>
              );
            }
          })}
      </div>
      <Input
        placeholder="Write your message."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage();
          }
        }}
      />
      <Button colorScheme="blue" onClick={sendMessage} mt={2} color={"white"}>
        Send
      </Button>
    </div>
  );
};

export default Chat;
