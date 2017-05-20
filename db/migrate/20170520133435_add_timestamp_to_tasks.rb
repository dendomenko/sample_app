class AddTimestampToTasks < ActiveRecord::Migration[5.1]
  def change_table
    add_column(:tasks, :created_at, :datetime)
    add_column(:tasks, :updated_at, :datetime)
  end
end
