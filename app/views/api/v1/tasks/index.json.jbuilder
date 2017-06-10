tasks ||= @tasks
statuses ||= @statuses

statuses.each do |s|
  json.set! s.name, []
  tasks.each do |t|
    json.set! s.name do
      if s.id == t.status_id
        json.child! {
          json.partial! 'info', task: t
        }
      end
    end
  end
end
