import {
  HubConnection,
  HubConnectionBuilder,
  HttpTransportType,
} from "@microsoft/signalr";
import { useEffect, useRef, useState } from "react";
import Chat from "../Components/Chat";

const Game = () => {
  const connectionRef = useRef<HubConnection | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    let stoppingConnection = false;

    startConnection(stoppingConnection);

    return () => {
      stoppingConnection = true;
      if (connectionRef.current) {
        connectionRef.current.stop();
      }
    };
  }, []);

  const startConnection = async (stoppingConnection: boolean) => {
    try {
      const conection = new HubConnectionBuilder()
        .withUrl(
          `http://localhost:5296/hubs/game?access_token=${
            localStorage.getItem("token") || ""
          }`,
          {
            skipNegotiation: true,
            transport: HttpTransportType.WebSockets,
          }
        )
        .withAutomaticReconnect()
        .build();

      conection.on("UserConnected", (userId: string) => {
        console.log("Usuário conectado:", userId);
      });
      conection.on("UserDisconnected", (userId: string) => {
        console.log("Usuário desconectado:", userId);
      });

      if (!stoppingConnection) {
        await conection.start();
        setIsConnected(true);
      }
      connectionRef.current = conection;
    } catch (error) {
      console.error("SignalR Connection Error:", error);
      alert(
        "Failed to connect to game server. Please check if the server is running."
      );
    }
  };

  return <>{isConnected && <Chat conectionRef={connectionRef} />}</>;
};

export default Game;
