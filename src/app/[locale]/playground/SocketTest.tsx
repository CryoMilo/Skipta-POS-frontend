"use client";

import socket from "@/utils/socket";
import { useEffect, useState } from "react";

const SocketTest = () => {
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState<string[]>([]);

	useEffect(() => {
		socket.on("message", (msg: string) => {
			setMessages((prevMessages) => [...prevMessages, msg]);
		});

		return () => {
			socket.off("message");
		};
	}, []);

	const sendMessage = () => {
		if (message) {
			socket.emit("message", message);
			setMessage("");
		}
	};

	return (
		<div>
			<h1>Socket.IO Chat</h1>
			<div>
				{messages.map((msg, index) => (
					<div className="text-white" key={index}>
						{msg}
					</div>
				))}
			</div>
			<input
				className="text-black"
				type="text"
				value={message}
				onChange={(e) => setMessage(e.target.value)}
			/>
			<button onClick={sendMessage}>Send</button>
		</div>
	);
};

export default SocketTest;
