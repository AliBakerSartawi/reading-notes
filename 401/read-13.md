# Message Queue

## Questions

- **What does it mean that web sockets are bidirectional? Why is this useful?**
  - Bidirectional means that it works both ways, meaning that both parties can send and receive at the same time.

- **Does socket.io use HTTP? Why?**
  - Yep it does... to allow HTTP and websocket servers to co-exist on the same TCP port. [source](https://stackoverflow.com/questions/37836130/socket-io-why-does-it-need-an-http-server#:~:text=The%20premise%20on%20which%20your,%2C%20which%20it%20isn't.&text=Even%20when%20websockets%20can%20be,%2Fsocket.io.js%20.)

- **What happens when a client emits an event?**
  - If the server is listening to that event, the server will execute the handler function for that event.

- **What happens when a server emits an event?**
  - All listening clients will execute the handler for that event.

- **What happens if a client “misses” an event?**
  - They would not execute the handler function for that event.

- **How can we mitigate this?**
  - Maybe listen to another event on the server which waits for an emit from the client that confirms that the client received the first emit from the server.


---

## Terms

- **Socket**: 
  - A socket is one endpoint of a two-way communication link between two programs running on the network. [source](https://docs.oracle.com/javase/tutorial/networking/sockets/definition.html#:~:text=A%20socket%20is%20one%20endpoint,destined%20to%20be%20sent%20to.&text=Every%20TCP%20connection%20can%20be%20uniquely%20identified%20by%20its%20two%20endpoints.)

- **Web Socket**: 
  - It is a computer communications protocol, providing full-duplex communication channels over a single TCP connection. [source](https://en.wikipedia.org/wiki/WebSocket)

- **Socket.io**: 
  - It is a JavaScript library that enables websocket behavior.

- **Client**:
  - A client is a connection on the frontend... mostly users.

- **Server**:
  - A server is a server... what more can you say... it's the backend side of the bidirectional communication.

- **OSI Model**:
  - Seven layers of protocols that transport internet data around the world. 

- **TCP Model**:
  - The TCP/IP model (Transmission Control Protocol/Internet Protocol) is a model with four layers which is for both modelling current Internet architecture, as well as providing a set a rules that govern all forms of transmission over a network. [source](https://simple.wikipedia.org/wiki/TCP/IP_model)

- **TCP**:
  - Transmission Control Protocol... simply, it is a way/protocol of making sure that sent data is received on the other end.

- **UDP**:
  - User Datagram Protocol... this protocol sends data, but does not ensure the receival of that data on the other end.

- **Packets**:
  - Small portions of data sent over the network, packets are then added to each other to form the original shape of the data (the full data)



---

## Resources

**[Socket.io Chat Example](https://socket.io/get-started/chat/)**

**[Rooms and Namespaces](https://socket.io/docs/v3/rooms/index.html)**

**[Socket.io Emit Cheat Sheet](https://socket.io/docs/v3/emit-cheatsheet/index.html)**

