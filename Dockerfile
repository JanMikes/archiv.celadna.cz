# syntax=docker/dockerfile:1
FROM nginx:1.27-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY public/ /usr/share/nginx/html

HEALTHCHECK --interval=30s --timeout=3s --retries=3 \
  CMD wget -qO- http://localhost || exit 1

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
