json.activity @logger do |log|
  json.created log.created_at
  json.text log.description
end