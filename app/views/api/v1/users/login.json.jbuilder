user ||= @user

json.id user['id']
json.name user['name']
json.email user['email']
json.created user['created_at']
json.access_token @auth_token
json.avatar user['avatar_file_name']