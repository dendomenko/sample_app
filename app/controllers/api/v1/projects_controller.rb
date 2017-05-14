module Api
  module V1
    class ProjectsController < ApplicationController
      before_action :authenticate_request!

      def index
        @projects = load_current_user!.projects
        return render(json: {message: "You haven't projects"}, status: :no_content) unless @projects.any?
        render status: :ok
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
        @project ||= user.projects.find params[:id] #.find_by slug: params[:id]
        @role = @project.roles.find_by_user_id(load_current_user!.id).role
        @tasks = Task.all.where(:project_id=>@project.id)
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
