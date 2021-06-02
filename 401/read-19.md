# AWS - Events

- **Describe the similarities between AWS API Gateway + Lambda functions and an ExpressJS Server**
  - Both have routes, and the lambda function acts like a middleware or an endpoint function in Express

- **List the AWS Database offerings and talk about the pros and cons of each**
  - The S3 is a very simple database option
  - Dynamoose is more advanced with NoSQL attributes, it is tremendously beneficial

- **What’s the difference between a FIFO and a standard queue?**
  - A standard queue aims at delivering messages generally in order
  - A FIFO queue will deliver messages exactly in order

- **How can the server be assured a message was properly received?**
  - By listening to a trigger on the delivered side which works if the message is received
 
---

- **Serverless API**: 
  - routes and lambda functions for microservices that do not require their own dedicated servers

- **Triggers**: 
  - They ignite whatever is listening to them

- **Dynamo vs Mongo**: 
  - Very similar, they are both NoSQL databases

- **Dynamoose vs Mongoose**: 
  - They are the packages that allow us to deal with Dynamo and Mongo


---

## Resources

- [SQS and SNS Basics](https://www.youtube.com/watch?v=UesxWuZMZqI)

- [AWS SQS vs SNS](https://medium.com/awesome-cloud/aws-difference-between-sqs-and-sns-61a397bf76c5)

- [SNS Javascript SDK](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SNS.html)

- [SQS Javascript SDK](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/SQS.html)

