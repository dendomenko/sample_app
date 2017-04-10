class ProjectsController < ApplicationController
  def new
    user = User.find(params[:user_id])
    @project = user.projects.build
  end

  def index
    @user = User.find(params[:user_id])
    @projects = @user.projects
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
    @role = @project.roles.first.role
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
    params.require(:project).permit(:name, :task_name)
  end

end