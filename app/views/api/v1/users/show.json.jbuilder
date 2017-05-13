user ||= @user

json.id user['id']
json.name user['name']
json.email user['email'] 
json.created user['created_at']
json.avatar URI.join(request.url,user.avatar.url())
json.avatar_medium URI.join(request.url, user.avatar.url(:medium))
json.avatar_thumb URI.join(request.url, user.avatar.url(:thumb))