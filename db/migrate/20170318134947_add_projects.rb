class AddProjects < ActiveRecord::Migration[5.0]
  def change
    create_table :projects do |t|
      t.string :name
      t.string :task_name
      t.timestamps
    end
    create_table :tasks do |t|
      t.string :name
      t.time :time
      t.text :description
    end
  end
end
