class AddDefaultToRole < ActiveRecord::Migration[5.1]
  def change
    remove_column :projects, :user_id
    change_column :roles, :role, :string, default: "author"
  end
end
