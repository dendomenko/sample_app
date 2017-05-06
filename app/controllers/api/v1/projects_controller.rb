module Api
  module V1
    class ProjectsController < ApplicationController
      before_action :authenticate_request!
      # def new
      #   user = User.find(params[:user_id])
      #   @project = user.projects.build
      # end

      def index
        @projects = load_current_user!.projects
        render status: :ok
      end

      def create
        # user = User.find(params[:user_id])
        @project = load_current_user!.projects.create(project_params)

        if @project.save
          render json: {message: 'Project created'}, status: :ok
        else
          render json: {message: 'Wrong query'}, status: :bad_request
        end
      end

      def show
        user = load_current_user!
        @project = user.projects.find(params[:id])
        @role = @project.roles.find_by_user_id(load_current_user!.id).role
      end

      def add_user
        @users = User.all
        @roles = Role.all
      end

      def add_user_create
        @role = Role.create(user_id: params[:user], project_id: params[:project_id], role: params[:role])

        if @role.save
          redirect_to user_projects_path(params[:user_id])
        else
          render 'show'
        end
      end

      def destroy
        if Project.find(params[:id]).destroy
          redirect_to user_projects_path(params[:user_id])
        end
      end


      private

      def project_params
        params.require(:project).permit(:name, :task_name, :description)
      end

    end
  end
end
