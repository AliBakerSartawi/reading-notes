# Socket.io

## Questions

- **What is the benefit of transforming data into packets?**
  - Packets are intended to transfer data reliably and efficiently. Instead of transferring a large file as a single block of data, sending smaller packets helps ensure each section is transmitted successfully. If a packet is **not received** or is **dropped**, only the dropped packet needs to be resent. [source](https://techterms.com/definition/packet)

- **UDP is often referred to as a connectionless protocol. Why is this?**
  - **UDP** stand for **User Datagram Protocol**, and the answer is **UDP** is a connectionless protocol. No connection needs to be established between the source and destination before you transmit data. UDP does not have a mechanism to make sure that the payload is not corrupted. As a result, the application must take care of data integrity all by itself. [source](https://www.sciencedirect.com/topics/computer-science/connectionless-protocol).
  - **UDP** is commonly used for applications that are **lossy** (can handle some packet loss), such as streaming audio and video. It is also used for query-response applications, such as DNS queries. [source](https://www.sciencedirect.com/topics/computer-science/user-datagram-protocol)

- **Can a socket server application have multiple socket connections?**
  - Not sure if this is the correct answer, but here goes: The server can handle 65,536 sockets per single IP address. So the quantity can be easily extended by adding additional network interfaces to a server. Meanwhile, it's extremely important to track how many connections present on a server. [source](https://dzone.com/articles/load-balancing-of-websocket-connections)

- **Can a socket connection application be connected to multiple socket servers?**
  - Maybe this is the correct answer: Yes, each listening (bound) port is serviced by a separate socket (as are all the connections made from each listening port). [source](https://unix.stackexchange.com/questions/128677/bind-one-process-to-multiple-ports/128679)

- **Can an application be both a socket server and a socket connection?**
  - From what I understand, the socket server (ServerSocket) is the class that listens to connections on a certain port, while a socket connection is a class that connects to an already listening socket... so I'm not sure how an application can do both at the same time... but it might not be impossible.

---

## Terms

- **Observer Pattern**:
  - The Observer Pattern is an appropriate design pattern to apply in any situation where you have several objects which are dependent on another object and are required to perform an action when the state of that object changes, or an object needs to notify others without knowing who they are or how many there are. [source](https://www.sitepoint.com/understanding-the-observer-pattern/)

- **Listener**:
  - A procedure or a function that waits for an event or a connection to occur, and then responds accordingly.

- **Event Handler**:
  - A function that executes once the event is triggered.

- **Event Driven Programming**:
  - A programming paradigm where the process flow is dictated by event listeners and their handlers.

- **Event Loop**:
  - It is a construct that allows **JavaScript** and **Node.js** to perform non-blocking operations, it handles the synchronous script on a single thread, while leaving async code to be handled separately off the single thread, then adds it back to the call stack once it returns giving the impression of a multi-threaded language. Or, async code can be awaited, giving it the impression of synchronous code.
  - Also defined as: The **Event Loop** keeps running continuously and checks the Main stack, if it has any frames to execute, if not then it checks **Callback queue**, if **Callback queue** has codes to execute then it pops the message from it to the Main Stack for the execution. [source](https://medium.com/@Rahulx1/understanding-event-loop-call-stack-event-job-queue-in-javascript-63dcd2c71ecd). Meaning that synchronous code will always be executed first, then async code (micro tasks), then macro tasks such as (setTimeOut).
  - **Micro tasks** are given priority over **Macro tasks** to optimize user experience. 

- **Event Queue**:
  - An event queue is a repository where events from an application are held prior to being processed by a receiving program or system. Event queues are often used in the context of an enterprise messaging system. [source](https://www.techopedia.com/definition/24963/event-queue)
  - Another name for it is the **Callback Queue**, also defined as where the asynchronous code gets pushed to, and waits for the execution.

- **Call Stack**:
  - A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc. [source](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack#:~:text=A%20call%20stack%20is%20a,from%20within%20that%20function%2C%20etc.)

- **Emit/Raise/Trigger**:
  - All these three mean firing the event, which is telling the event listener that the event is fired, then the listener activates the handler.

- **Subscribe**:
  - It means enrolling in a service or agreeing to receive continuous info from a publisher, the user should input their emails or some credentials to become subscribed.

- **database**:
  - A local or cloud-based storage system.


---

## Resources

- **Videos**
  - [OSI Model Explained](https://www.youtube.com/watch?v=vv4y_uOneC0)
  - [TCP Handshakes Explained](https://www.youtube.com/watch?v=xMtP5ZB3wSk)

- **Read/Skim**
  - [Web Sockets](https://en.wikipedia.org/wiki/WebSocket)
  - [Socket.io Tutorial](https://www.tutorialspoint.com/socket.io/)
  - [Socket.io vs Web Sockets](https://www.educba.com/websocket-vs-socket-io/)

- **Bookmark**
  - [Socket.io Documentation](https://socket.io/docs/)
  - [Socket.io Server API](https://socket.io/docs/server-api)
  - [Socket.io Client API](https://socket.io/docs/client-api)
  - [Socket Testing Tool](https://amritb.github.io/socketio-client-tool/)

---

## OSI

[Youtube - Fireship Explanation Simplified](https://www.youtube.com/watch?v=keeqnciDVOo)

- **Open System Interconnection** model, consists of seven layers;
  - The seventh layer, the **Application** protocols, such as pixels on a screen (visual) or vibrations from a speak (sound). **Application** protocols allow computer applications (programs) to function, such as how **HTTP** allows a browser to surf the internet, and **FTP** allows file transfer, and so on.
  - The **Presentation**, which ensures that a stream of bits from a computer (like a JPEG image) is encoded to a standard format that can be used at the application layer, or vice versa.
  - The **Session**, which is responsible for managing the connection between two computers... authorization, authentication etc etc... 
  - The **Transport** layer, **TCP** which is **Transmission Control Protocol**, its job is to transfer a stream of data from computer to computer while segmenting it into smaller pieces (packets) in the right order.
  - The **Network** layer which gives the data to the **Transport** layer in the form of **packets**, in this layer we find the **Internet Protocol** aka **IP** which identifies the computer. Whenever it sends information over the network it does so in the form of an **IP** packet that contains that address in the header... this happens from a router or gateway which connects to **layer two** which is...
  - The **Data Link**, its role is to connect one physical node in the network to another via protocols like ethernet or wi-fi.
  - At the bottom, the first layer, the **Physical Hardware**, such as fiber optic cables.