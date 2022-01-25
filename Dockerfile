FROM node:8.12.0 as builder
WORKDIR /app
COPY ./frontend/package.json .
RUN npm install
RUN ls -al
COPY ./frontend ./
RUN ls -al
RUN npm run build

FROM node:alpine
WORKDIR /usr/web
COPY ./backend/package.json .Î
RUN npm install
COPY ./backend /usr/web/
COPY --from=builder /app/dist /usr/web/public
RUN ls -al
EXPOSE  3353 3005
CMD [ "npm", "run", "dev" ]
