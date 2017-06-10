comments ||=@comments

json.comment comments do |c|
  json.task_id c.task_id
  json.comment c.comment
  json.user do
    json.id c.user.id
    json.name c.user.name
    json.email c.user.email
  end
end