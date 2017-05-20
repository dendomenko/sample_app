# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Type.create([{name: 'Bug'},{name: 'Task'},{name: 'Feature'},{name: 'Improvement'}])
Priority.create([{name: 'Lowest'},{name: 'Low'},{name: 'Medium'},{name: 'High'},{name: 'Highest'}])
Status.create([{name: 'To Do'},{name: 'On Hold'},{name: 'In Progress'},{name: 'In Review'},{name: 'Done'}])
