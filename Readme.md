docker build -t hastudiowinsome/meeting-board .

docker push hastudiowinsome/meeting-board

docker run -p 3353:3353 -p 3005:3005 -d hastudiowinsome/meeting-board:latest


### react 16.8

升到 16.8
```
npm i react@16.8.0 react-dom@16.8.0 --save
```

### 開發

前端
```
cd frontend
npm start
```

後端
```
cd backend
npm run dev
```