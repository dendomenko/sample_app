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
        count = Task.where(:project_id => params[:project_id]).count
        task.name= "#{task.project.task_name}-#{count+1}"
        if task.save!
          render json: {id: task}, status: :created
        else
          render json: {error: task.errors}, status: :ok
        end
      end

      private

      def task_params
        params.permit(:name, :description, :time, :project_id, :status,:creator_id,:executor_id, :time_do,:time_done);
      end

    end
  end
end