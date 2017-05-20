module Api
  module V1
    class TasksController < ApplicationController

      def index
        tasks = Task.all
        render json: tasks, status: :created
      end

      def create
        # user = User.find(params[:user_id])
        task = Task.create(task_params)
        task.user = load_current_user!
        task.project = Project.find(params[:project_id])
        task.name= "#{task.project.task_name}-#{task_number+1}"
        if task.save!
          render json: {task: task}, status: :created
        else
          render json: {errors: task.errors}, status: :ok
        end
      end

      private
      def task_number
        Task.where(:project_id => params[:project_id]).count
      end
      
      def task_params
        params.permit( :title, :description, :time,:executor_id, :time_do,:time_done, :status_id, :priority_id, :type_id);
      end

    end
  end
end