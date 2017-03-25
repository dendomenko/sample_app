class ProjectsController < ApplicationController
  def new
    user = User.find(params[:user_id])
    @project = user.projects.build
    @project.name = 'test'
  end

  def index
    user = User.find(params[:user_id])
    @projects = user.projects
  end

  def create
    user = User.find(params[:user_id])
    @project = user.projects.create(project_params)

    if @project.save
      redirect_to user_projects_path(user)
    else
      render 'new'
    end
  end

  def show
    user = User.find(params[:user_id])
    @project = user.projects.find(params[:id])
  end

  private

  def project_params
    params.require(:project).permit(:name, :task_name)
  end
end