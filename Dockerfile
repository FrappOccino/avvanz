#This dockerfile is grate for static images

# Use an official Nginx image as base
FROM nginx:alpine

# Remove the default Nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy your static website to the Nginx web directory
COPY . /usr/share/nginx/html

# Expose port 80 (default Nginx port)
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]


#or

# FROM node:alpine

# # Install http-server globally
# RUN npm install -g http-server

# WORKDIR /app
# COPY . .

# # http-server will serve files from /app
# EXPOSE 4000

# CMD ["http-server", ".", "-p", "4000"]
