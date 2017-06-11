team ||= @team

json.team team do |member|
  json.id member.user.id
  json.name member.user.name
  json.role member.role
  json.avatar do
    json.origin URI.join(request.url, member.user.avatar.url())
    json.medium URI.join(request.url, member.user.avatar.url(:medium))
    json.thumb URI.join(request.url, member.user.avatar.url(:thumb))
  end
end