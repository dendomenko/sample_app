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
unless @team.blank?
  json.team do
    json.id @team.id
    json.name @team.name
    json.users @users do |u|
      json.id u.id
      json.name u.name
      json.email u.email
      json.avatar do
        json.thumb URI.join(request.url, u.avatar.url(:thumb))
      end
    end
  end
else
  json.team nil
end