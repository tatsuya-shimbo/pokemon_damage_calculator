class CreateSkills < ActiveRecord::Migration[5.2]
  def change
    create_table :skills do |t|
      t.string :name
      t.integer :power
      t.integer :category
      t.integer :group

      t.timestamps
    end
  end
end
