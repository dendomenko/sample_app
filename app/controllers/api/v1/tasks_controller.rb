module Api
  module V1
    class TasksController < ApplicationController

      def index
        tasks = Task.all
        render json: tasks, status: :ok
      end

      def show
        @task = Task.find params[:id]
        @attaches = @task.attachments
      end

      def create
        # user = User.find(params[:user_id])
        task = Task.create(task_params)
        task.user = load_current_user!
        task.project = Project.find(params[:project_id])
        task.name= "#{task.project.task_name}-#{task_number+1}"
        if task.save!
          add_attachment(task.id, params[:file]) if params[:file]
          render json: {task: task}, status: :created
        else
          render json: {errors: task.errors}, status: :ok
        end
      end

      def update
        task = Task.find params[:id]
        task.update task_params
        add_attachment(task.id, params[:file]) if params[:file]
        render json: {task: task}, status: :created
      end

      def all_user_tasks
        tasks = Task.all.where(executor_id: params[:user_id])
        render json: tasks, status: :ok
      end

      private
      def task_number
        Task.where(:project_id => params[:project_id]).count
      end

      def task_params
        params.permit(:title, :description,
                      :executor_id, :time_do,
                      :time_done, :status_id,
                      :priority_id, :type_id, :file)
      end

      def add_attachment(task_id, file)
        Attachment.create(task_id: task_id, file: file)
      end

    end
  end
end