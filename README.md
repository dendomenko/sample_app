## How to run app using docker

1. Install docker and docker-compose.
2. Run containers using ```sudo docker-compose build```
3. Run containers using ```sudo docker-compose up```
4. Check container id using ```sudo docker ps```
5. Create DB ```sudo docker exec <your web container id or name> rails db:create```
6. Migrate DB ```sudo docker exec <your web container id or name> rails db:migrate```
7. Restart containers (if problem with server start check ```/tmp/pids/server.pid``` if this file exist delete it and start again)
8. Test using ```localhost:3000```


GET:<br>
```http://localhost:3000/api/v1/users/ ``` - get all users <br>
`http://localhost:3000/api/v1/users/:id` - get user by id

POST:

**REGISTRATION:**

```http://localhost:3000/api/v1/users/```
```
 {
  "user":
   { 
                   "name":"name",
                    "email":"te3st@323mail.com",
                    "password":"12345678",
                    "password_confirmation":"12345678"
  }
}
```

**LOGIN:**

```http://localhost:3000/api/v1/login/```
```
{ "email":"dendomenko@gmail.com","password":"den_domenko"}
```

