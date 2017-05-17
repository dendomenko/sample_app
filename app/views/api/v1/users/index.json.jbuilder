json.users @users do |u|
  json.id u.id
  json.name u.name
  json.email u.email
  json.avatar do
    json.origin URI.join(request.url, u.avatar.url())
    json.medium URI.join(request.url, u.avatar.url(:medium))
    json.thumb URI.join(request.url, u.avatar.url(:thumb))
  end
end