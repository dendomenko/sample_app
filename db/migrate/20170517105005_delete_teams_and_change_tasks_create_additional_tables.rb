class DeleteTeamsAndChangeTasksCreateAdditionalTables < ActiveRecord::Migration[5.1]
  def change
    drop_table :teams

    drop_table :tasks

    create_table :priorities do |t|
      t.string :priority
    end

    create_table :statuses do |t|
      t.string :status
    end

    create_table :types do |t|
      t.string :type
    end

    create_table :tasks do |t|
      t.string :name
      t.string :title
      t.text :description
      t.belongs_to :projects
      t.belongs_to :users
      t.bigint :executor_id
      t.time :time_do
      t.time :time_done
      t.belongs_to :statuses
      t.belongs_to :types
      t.belongs_to :priorities
    end
  end
end
