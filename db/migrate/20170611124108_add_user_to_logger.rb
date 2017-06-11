class AddUserToLogger < ActiveRecord::Migration[5.1]
  def change
    add_reference :project_loggers, :user, foreign_key:true
  end
end
