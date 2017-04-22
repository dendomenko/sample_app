class DeleteJoitTableAndAddProjectRoles < ActiveRecord::Migration[5.1]
  def change
    remove_column :projects, :user_id

    create_table 'roles' do |t|
      t.integer 'user_id'
      t.integer 'project_id'
      t.string 'role'
    end
  end
end
