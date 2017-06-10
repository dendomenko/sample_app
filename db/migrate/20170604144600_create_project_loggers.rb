class CreateProjectLoggers < ActiveRecord::Migration[5.1]
  def change
    create_table :project_loggers do |t|
      t.belongs_to :project
      t.text :description
      t.timestamps
    end
  end
end
