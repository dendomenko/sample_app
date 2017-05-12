class AddTableForConnectProjectUserTaskAndDeleteApiKeyTable < ActiveRecord::Migration[5.1]
  def change
    drop_table :api_keys

    add_column :tasks, :project_id, :integer
    add_column :tasks, :creator_id, :integer
    add_column :tasks, :executor_id, :integer
    add_column :tasks, :time_do, :time
    add_column :tasks, :time_done, :time
    add_column :tasks, :status, :string


  end
end
