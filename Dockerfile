FROM evild/alpine-nginx

#COPY nginx.conf /etc/nginx/conf/nginx.conf

WORKDIR /etc/nginx/html
COPY dist/EasyEnvironment/. /usr/html