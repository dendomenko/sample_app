p ||= @project
tasks ||= @tasks

json.id p.id
json.name p.name
json.slug p.slug
json.task_name p.task_name
json.description p.description
json.created p.created_at
json.tasks tasks do |t|
  json.id t.id
  json.name t.name
  json.title t.title
  json.description t.description
  json.time_do t.time_do
  json.time_done t.time_done
  json.creator t.user_id
  json.executor t.executor_id
  json.status t.status.name
  json.type t.type.name
  json.priority t.priority.name
end
json.team @team do |t|
  json.id t.user.id
  json.name t.user.name
  json.email t.user.email
  json.role t.role
  json.avatar do
    json.origin URI.join(request.url, t.user.avatar.url())
    json.medium URI.join(request.url, t.user.avatar.url(:medium))
    json.thumb URI.join(request.url, t.user.avatar.url(:thumb))
  end
end