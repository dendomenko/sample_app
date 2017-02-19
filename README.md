## How to run app using docker

1. Install docker and docker-compose.
2. Run containers using ```sudo docker-compose build```
3. Run containers using ```sudo docker-compose up```
4. Check container id using ```sudo docker ps```
5. Create DB ```sudo docker exec <your web container id> rails db:create```
6. Migrate DB ```sudo docker exec <your web container id> rails db:migrate```
7. Restart containers (if problem with server start check ```/tmp/pids/server.pid``` if this file exist delete it and start again)
8. Test using ```localhost:3000```


