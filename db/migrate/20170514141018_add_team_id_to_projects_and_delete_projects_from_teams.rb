class AddTeamIdToProjectsAndDeleteProjectsFromTeams < ActiveRecord::Migration[5.1]
  def change
    remove_column :teams, :projects
    add_column :projects, :team_id, :integer
  end
end
