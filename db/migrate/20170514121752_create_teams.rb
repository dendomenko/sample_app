class CreateTeams < ActiveRecord::Migration[5.1]
  def change
    create_table :teams do |t|
      t.string :name
      t.integer :projects, array:true, default:[]
      t.integer :users, array:true, default:[]
      t.timestamps
    end

    add_column :tasks, :title ,:string
  end
end
