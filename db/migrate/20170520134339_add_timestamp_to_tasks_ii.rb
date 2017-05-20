class AddTimestampToTasksIi < ActiveRecord::Migration[5.1]
  def change
    drop_table :tasks

    create_table :tasks do |t|
      t.string :name
      t.string :title
      t.text :description
      t.belongs_to :project
      t.belongs_to :user
      t.bigint :executor_id
      t.time :time_do
      t.time :time_done
      t.belongs_to :status
      t.belongs_to :type
      t.belongs_to :priority
      t.timestamps
    end
  end
end
