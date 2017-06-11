class LoggerService
  def log_create(object)
    object.class.name
    case object.class.name
      when 'Project'


    end
    # text = "Project #{project.name} was created"
    # ProjectLogger.create(project_id: project.id, description: text)
    #
    # text = "Task: #{task.name} was created and assigned to #{User.find(task.executor_id).name}"
    # ProjectLogger.create(project_id: task.project_id, description: text)
  end

  def log_update(object)

    # text = "User #{role.user.name} was added to project with role #{role.role}"
    # ProjectLogger.create(project_id: role.project_id, description: text)
  end

  def log_delete(object)

    # text = "Task: #{task.name} was updated"
    # ProjectLogger.create(project_id: task.project_id, description: text)
  end
end