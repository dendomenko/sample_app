user ||= @user

json.id user.id
json.name user.name
json.email user.email
json.created user.created_at
json.avatar do
  json.origin URI.join(request.url, user.avatar.url())
  json.medium URI.join(request.url, user.avatar.url(:medium))
  json.thumb URI.join(request.url, user.avatar.url(:thumb))
end
