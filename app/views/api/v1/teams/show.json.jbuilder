json.id @team.id
json.name @team.name
json.projects(@projects) do |p|
  json.id p.id
  json.name p.name
end
json.users(@users) do |u|
  json.id u.id
  json.name u.name
  json.email u.email
end