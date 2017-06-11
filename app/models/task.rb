class Task < ApplicationRecord

  belongs_to :user
  belongs_to :executor, class_name: 'User'
  belongs_to :project
  belongs_to :status
  belongs_to :type
  belongs_to :priority

  has_many :attachments
  has_many :comments


end
