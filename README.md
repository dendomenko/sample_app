## How to run app using docker

1. Install docker and docker-compose.
2. Run containers using ```sudo docker-compose up```
3. Check container id using ```sudo docker ps```
4. Create DB ```sudo docker exec <your web container id> rails db:create```
5. Migrate DB ```sudo docker exec <your web container id> rails db:migrate```
6. Restart containers (if problem with server start check ```/tmp/pids/server.pid``` if this file exist delete it and start again)
7. Test using ```localhost:3000```


