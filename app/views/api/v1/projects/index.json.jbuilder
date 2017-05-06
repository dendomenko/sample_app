projects ||= @projects

json.(projects) do |p|
  json.id p['id']
  json.name p['name']
  json.task p['task_name']
  json.created p['created_at']
end