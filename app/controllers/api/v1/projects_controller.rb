module Api
  module V1
    class ProjectsController < ApplicationController
      before_action :authenticate_request!

      def index
        @projects = load_current_user!.projects
        return render(json: {message: 'No projects'}, status: :no_content) unless @projects.any?
        render status: :ok
      end

      def roles
        roles = Role.pluck(:role).uniq
        render json: {roles: roles}, status: :created
      end

      def create
        project = load_current_user!.projects.create(project_params)
        project.slug = params[:name].to_ascii.parameterize
        if project.save
          render json: {id: project.id}, status: :created
        else
          render json: {errors: project.errors}, status: :ok
        end
      end

      def show
        user = load_current_user!
        @project = user.projects.find_by slug: params[:id]
        @project ||= user.projects.find params[:id]
        @tasks = Task.all.where(project_id: @project.id)
        @team = @project.roles
      end

      def update
        project = load_current_user!.projects.find(params[:id])
        project.slug = params[:name].to_ascii.parameterize unless params[:name].blank?
        if project.update project_params
          render json: {message: 'Project updated'}, status: :accepted
        else
          render json: {errors: project.errors}, status: :ok
        end
      end

      def add_user
        @role = Role.new(user_id: params[:user_id], project_id: params[:project_id], role: params[:role])
        @role.save
        render json: {role: 'Created'}, status: :created
      end

      def destroy
        if Project.find(params[:id]).destroy
        end
      end


      private

      def project_params
        params.permit(:name, :task_name, :description)
      end

    end
  end
end
