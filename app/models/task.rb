class Task < ApplicationRecord

  belongs_to :user
  belongs_to :project
  belongs_to :status
  belongs_to :type
  belongs_to :priority

  has_many :attachments

end
