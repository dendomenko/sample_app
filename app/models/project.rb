class Project < ApplicationRecord
  has_many :roles, dependent: :destroy
  has_many :users, through: :roles

  has_many :tasks
  # has_many :project_loggers

  belongs_to :team, optional: true


  validates :name, length: {minimum: 3}
  validates :task_name, length: {minimum: 2, maximum: 6}

end
