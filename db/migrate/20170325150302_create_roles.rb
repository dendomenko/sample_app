class CreateRoles < ActiveRecord::Migration[5.1]
  def change
    change_table :roles do |t|
      t.timestamps
    end
  end
end
