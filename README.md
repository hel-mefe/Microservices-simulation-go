# Microservices simulation in Go
![Alt text](https://github.com/hel-mefe/Microservices-simulation-go/blob/main/docs/microservices.png)

This repository is about a simple microservices simulation with Go and dockerized using docker, the communication between each pair of microservices can be either RESTFUL with JSON or following the gRPC framework. Also, RabbitMQ is used as a message queue to dispatch messages between microservices.

The following are the built-in microservices:
 - <b>Authentication service:</b> A simple authentication service that simulates the behavior of authentication in a web app, for the database part PostgreSQL is used.
 - <b>Logger service:</b> Logger service that logs some messages to a database and serves them when needed, for the database part it's using MongoDB.
 - <b>Mail service:</b> Mail service makes use of mailhog a go package that simulates the behavior of emails being sent to the user.
 - <b>Listener service:</b> A rabbitMQ service that listens for incoming requests and pushes them to the producer queue therefore the consumer services can serve those requests
 - <b>Broker service:</b> The only entry to the application from the client side, the broker listens on TCP port 80 for incoming requests, expects JSON format requests then the broker communicates with the listener service to push the requests to the rabbitMQ.

### The following diagram depicts the whole communication mechanism:
![Alt text](https://github.com/hel-mefe/Microservices-simulation-go/blob/main/docs/depicts.png)

## Build
to launch the project go to the project folder

 `` cd project``

 After that, you can follow along with the makefile or simply type

 `` make up_build ``

Make sure the docker daemon is running in your machine before writing the above command

Now simply you can launch the front end with the following command

`` make start ``
