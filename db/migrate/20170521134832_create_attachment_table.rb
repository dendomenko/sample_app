class CreateAttachmentTable < ActiveRecord::Migration[5.1]
  def change
    create_table :attachments do |t|
      t.belongs_to :task

      t.timestamps
    end

    add_attachment :attachments, :file

  end
end
