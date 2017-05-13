projects ||= @projects

json.(projects) do |p|
  json.id p.id
  json.name p.name
  json.slug p.slug
  json.task p.task_name
  json.description p.description
  json.created p.created_at
end