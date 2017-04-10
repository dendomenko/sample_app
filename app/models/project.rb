class Project < ApplicationRecord
  has_many :roles, dependent: :destroy
  has_many :users, through: :roles

  has_many :tasks
end
