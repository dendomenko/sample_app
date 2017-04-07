class AddIndexesToRole < ActiveRecord::Migration[5.1]
  def change
    remove_column :roles, :user_id
    remove_column :roles, :project_id

    change_table :roles do |t|
      t.belongs_to :user, index: true
      t.belongs_to :project, index: true
    end
  end
end
