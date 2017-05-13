## How to run app using docker

1. Install docker and docker-compose.
2. Run containers using ```sudo docker-compose build```
3. Run containers using ```sudo docker-compose up```
4. Check container id using ```sudo docker ps```
5. Create DB ```sudo docker exec <your web container id or name> rails db:create```
6. Migrate DB ```sudo docker exec <your web container id or name> rails db:migrate```
7. Restart containers (if problem with server start check ```/tmp/pids/server.pid``` if this file exist delete it and start again)
8. Test using ```localhost:3000```


## REQUESTS
For all requests exclude login and register you need to send token in header with name 'Authorization'

### USER requests

GET:<br>
```http://localhost:3000/api/v1/users/ ``` - get all users <br>
`http://localhost:3000/api/v1/users/:id` - get user by id

POST:

**REGISTRATION:**

```http://localhost:3000/api/v1/users/```
```
 {
    "name":"name",
    "email":"te3st@323mail.com",
    "password":"12345678",
    "password_confirmation":"12345678"
}
```
if success return 201 Created
if error return 200 OK and errors array

**LOGIN:**

```http://localhost:3000/api/v1/login/```
```
{ "email":"dendomenko@gmail.com","password":"den_domenko"}
```

### PROJECT requests

GET:<br>
**ALL PROJECT OF USER**
```http://localhost:3000/api/v1/projects/```<br>
**PROJECT BY ID**
```http://localhost:3000/api/v1/projects/:id``` <br>

POST:<br>
**CREATE PROJECT** ```http://localhost:3000/api/v1/projects/```
```
{
    "name":"<name>",
    "task_name":"<task name>",
    "description":"<description>"
}
```
if success return 201 Created
if error return 200 OK and errors array

PATCH/PUT:<br>
**UPDATE PROJECT**

```http://localhost:3000/api/v1/projects/:id```
```
{
        "name":"<name>",
        "description":"<description>"
}
```
if success return 202 Accepted
if error return 200 OK and errors array

### TASK requests

GET:<br>
Get all tasks
```/api/v1/projects/:project_id/tasks```

POST:<br>
```/api/v1/projects/:project_id/tasks```
```
{
        "name":"<name>",
        "description":"<description>",
        "time":"time",
        "project_id":"",
        "status":"",
        "creator_id":"",
        "executor_id":"",
        "time_do":"",
        "time_done":""
}
```

