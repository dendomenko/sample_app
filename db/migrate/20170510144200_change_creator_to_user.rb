class ChangeCreatorToUser < ActiveRecord::Migration[5.1]
  def change
    rename_column :tasks, :creator_id, :user_id
  end
end
