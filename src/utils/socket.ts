import { io } from "socket.io-client";

const socket = io("http://localhost:5000"); // Back-end server URL

export default socket;
