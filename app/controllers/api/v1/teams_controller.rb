module Api
  module V1
    class TeamsController < ApplicationController
      def index
        @teams = Team.where("#{load_current_user!.id} = ANY (users)")
        render  status: :ok
      end

      def show
        @team = Team.find(params[:id])
        @users = User.find(@team.users)
        render status: :ok
      end

      def create
        team = Team.new(team_params)
        team.users << load_current_user!.id
        team.save

        project = Project.find params[:project_id]
        project.team_id = team.id
        project.save!

        render json: {team: team}
      end

      def update
        Team.update team_params
      end

      def destroy
        Team.find(params[:id]).delete
      end

      private
      def team_params
        params.permit(:name,:users)
      end



    end
  end
end
