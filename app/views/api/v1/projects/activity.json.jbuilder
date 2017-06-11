json.activity @logger do |log|
  json.created "#{log.created_at.to_date} #{log.created_at.to_s(:time)}"
  json.text log.description
  json.user do
    json.name log.user.name
    json.avatar do
      json.origin URI.join(request.url, log.user.avatar.url())
      json.medium URI.join(request.url, log.user.avatar.url(:medium))
      json.thumb URI.join(request.url, log.user.avatar.url(:thumb))
    end
  end
end