json.id @team.id
json.name @team.name
json.users(@users) do |u|
  json.id u.id
  json.name u.name
  json.email u.email
end