
json.(@teams) do |t|
  json.id t.id
  json.name t.name
  json.users t.users
end