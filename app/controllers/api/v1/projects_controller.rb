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
        render(json: {message: "You haven't projects"}, status: :ok) unless @projects.any?
        render status: :ok
      end

      def create
        # user = User.find(params[:user_id])
        project = load_current_user!.projects.create(project_params)

        if project.save
          render json: {id: project.id}, status: :created
        else
          render json: {errors: project.errors}, status: :ok
        end
      end

      def show
        user = load_current_user!
        @project = user.projects.find(params[:id])
        @role = @project.roles.find_by_user_id(load_current_user!.id).role
      end

      def update
        project = load_current_user!.projects.find(params[:id])
        # project.name = params[:name] unless params[:name].blank?
        # project.description = params[:description] unless params[:description].blank?

        # project.update project_params

        if project.update project_params
          render json: {message: 'Project updated'}, status: :accepted
        else
          render json: {error: project.errors}, status: :ok
        end

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
        params.permit(:name, :task_name, :description)
      end

    end
  end
end
