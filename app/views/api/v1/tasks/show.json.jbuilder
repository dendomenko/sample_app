json.task @task
json.attachments @attaches do |file|
  json.name file.file_file_name
  json.path URI.join(request.url, file.file.url)
end