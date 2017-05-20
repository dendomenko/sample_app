class RecreateSupportTablesForTask < ActiveRecord::Migration[5.1]
  def change
    drop_table :priorities
    drop_table :statuses
    drop_table :types


    create_table :priorities do |t|
      t.string :name
    end

    create_table :statuses do |t|
      t.string :name
    end

    create_table :types do |t|
      t.string :name
    end
  end
end
