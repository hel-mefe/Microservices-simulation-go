FROM alpine:3.19.0

RUN mkdir /app

COPY authApp /app

RUN chmod +x /app/authApp

CMD ["/app/authApp"]