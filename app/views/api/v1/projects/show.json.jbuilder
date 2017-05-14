p ||= @project
role ||= @role
tasks ||= @tasks

json.id p.id
json.name p.name
json.slug p.slug
json.task_name p.task_name
json.description p.description
json.created p.created_at
json.role role
json.tasks tasks