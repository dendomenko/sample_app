module Api
  module V1
    class TasksController < ApplicationController

      def index
        project = find_project
        if project
          @tasks = Task.all.where project_id: project.id
          @statuses = Status.all
        else
          render json: {error: 'Project doesn\'t exist'}
        end

      end

      def show
        @task = Task.find params[:id]
        @attaches = @task.attachments
      end

      def create
        task = Task.new(task_params)
        task.user = load_current_user!
        task.project = Project.find(params[:project_id])
        task.name= "#{task.project.task_name}-#{task_number+1}"
        if task.save!
          add_attachment(task.id, params[:file]) if params[:file]
          log_create task
          render json: {task: task}, status: :created
        else
          render json: {errors: task.errors}, status: :ok
        end
      end

      def update
        task = Task.find params[:id]
        task.update task_params
        add_attachment(task.id, params[:file]) if params[:file]
        log_update task
        render json: {task: task}, status: :created
      end

      def all_user_tasks
        tasks = Task.all.where(executor_id: params[:user_id])
        render json: tasks, status: :ok
      end

      def add_comment
        comm = Comment.new(comment: params[:comment])
        comm.task_id = params[:task_id]
        comm.user_id = load_current_user!.id
        if comm.save!
          render json: {message: 'Comment created'}, status: :created
        else
          render json: {message: comm.errors}
        end

      end

      def comments
        @comments = Comment.all.where(task_id: params[:task_id])
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

      def log_create(task)
        text = "Task: #{task.name} was created and assigned to #{User.find(task.executor_id).name}"
        ProjectLogger.create(project_id: task.project_id, description: text)
      end

      def log_update(task)
        text "Task: #{task.name} was updated"
        ProjectLogger.create(project_id: task.project_id, description: text)
      end

    end
  end
end