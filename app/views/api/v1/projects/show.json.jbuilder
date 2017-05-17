p ||= @project
tasks ||= @tasks

json.id p.id
json.name p.name
json.slug p.slug
json.task_name p.task_name
json.description p.description
json.created p.created_at
json.tasks tasks
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