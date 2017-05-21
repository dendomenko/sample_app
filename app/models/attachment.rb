class Attachment < ApplicationRecord
  belongs_to :task
  has_attached_file :file

  # TODO add validation for attachment by type and filesize
  do_not_validate_attachment_file_type :file
end