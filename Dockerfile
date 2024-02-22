FROM nginx:alpine

# Copy web content
COPY ./src/* /usr/share/nginx/html 

