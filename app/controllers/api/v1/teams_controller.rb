module Api
  module V1
    class TeamsController < ApplicationController
      def index
        Team.all
      end

      def show
        Team.find(params[:id])
      end

      def create
        Team.new team_params
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
