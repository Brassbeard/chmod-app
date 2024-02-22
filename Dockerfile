FROM nginx:alpine

# Copy nginx server config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy web content
COPY ./src/* /usr/share/nginx/html 

