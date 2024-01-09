# base go image
FROM alpine:latest

RUN mkdir /app

COPY brokerApp /app

RUN chmod +x /app/brokerApp

CMD ["/app/brokerApp"]