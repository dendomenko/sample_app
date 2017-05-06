class DeleteJoinTable < ActiveRecord::Migration[5.1]
  def change
    drop_table :Projects_Users
  end
end
