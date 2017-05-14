module Api
  module V1
    class TeamsController < ApplicationController
      def index
        @teams = Team.where("#{load_current_user!.id} = ANY (users)")
        render  status: :ok
      end

      def show
        @team = Team.find(params[:id])
        @projects = Project.find(@team.projects)
        @users = User.find(@team.users)
        render status: :ok
      end

      def create
        team = Team.new team_params
        team.save
        render json: team
      end

      def update
        Team.update team_params
      end

      def destroy
        Team.find(params[:id]).delete
      end

      private
      def team_params
        params.permit(:name, :projects,:users)
      end

    end
  end
end
