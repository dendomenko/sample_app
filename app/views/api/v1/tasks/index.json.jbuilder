tasks ||= @tasks

tasks.each do |task|
  case task.status_id
    when 1
      json.to_do do
          json.child! {
            json.partial! 'info', task: task
          }
      end
    when 2
      json.on_hold do
        json.child! {
          json.partial! 'info', task: task
        }
      end
    when 3
      json.in_progress do
        json.child! {
          json.partial! 'info', task: task
        }
      end
    when 4
      json.in_review do
        json.child! {
          json.partial! 'info', task: task
        }
      end
    when 5
      json.done do
        json.child! {
          json.partial! 'info', task: task
        }
      end
  end
end
