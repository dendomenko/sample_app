p ||= @project
role ||= @role

json.id p['id']
json.name p['name']
json.task p['task_name']
json.description p['description']
json.role role
json.created p['created_at']