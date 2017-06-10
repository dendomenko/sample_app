class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.text :comment
      t.belongs_to :user
      t.belongs_to :task
      t.timestamps
    end
  end
end
