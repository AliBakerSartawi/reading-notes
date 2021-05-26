# Event Driven Architecture

## Questions

- **What’s the difference between a FIFO and a standard queue?**
  - Standard queues provide best-effort ordering which ensures that messages are generally delivered in the same order as they are sent. Occasionally (because of the highly-distributed architecture that allows high throughput), more than one copy of a message might be delivered out of order.
  - FIFO queues offer first-in-first-out delivery and exactly-once processing: the order in which messages are sent and received is strictly preserved. [source](https://jayendrapatil.com/aws-sqs-standard-vs-fifo-queue/)

- **How can the server be assured a message was properly received?**
  - Include a nonce with each sent message, (nonce is like a one time password or id).
  - The client sends a confirmation message that they received successfully.

- **What classic design pattern is best represented by event driven programming?**
  - Not sure I understand the question, but maybe the answer is the **Observer Pattern**.

- **How do you test an event driven system?**
  - By fake-firing (manually emitting) simulating user/server behavior. 



---

## Terms

- **FIFO Queue**: 
  - First In First Out method sorts the assets in order of their enrollment in the structure.
  - Assets can only be used/sent/removed in order, the oldest is affected first.

- **Pub/Sub**:
  - Publish/Subscribe architecture is not based on who is publishing or who has subscribed to receive messages.
  - Messages are categorized into classes.
  - Publishers label their messages with the proper class.
  - Subscribers receive messages depending on the classes they prefer regardless of who is publishing them.



---

## Resources

**[AWS SNS and SQS](https://www.youtube.com/watch?v=mXk0MNjlO7A)**

---

## SNS vs SQS

- **SNS**: Simple Notification Service:

- **SQS**: Simple Queue Service:

| **SNS**                                      | **SQS** |
| -------------------                          | ----------- |
| Simple Notification Service                  | Simple Queue Service |
| Publisher/Subscriber System (topic based)    | Queueing service for message processing |
| -----------------------------------------    | SQS can be subscribed to SNS |
| Publishing messages to a topic can deliver <br> to many subscribers (fan out)    | A system must poll the Queue to discover new events. <br> So they manually need to have a notification function <br> when new assets are added to the Queue |
| -----------------------------------------    | Messages are typically consumed by a single customer |
| Useful if you want to publish to many <br> interested clients    | Useful to receive data on a topic you are interested in |

- *note*: From **SNS** to **lambda function**, the process is best-effort delivery... if the logic is bad in the function, the data is lost. But, when it is **SNS** to **SQS** (queue), the data received is guaranteed to be present.