class CreateCompatibilities < ActiveRecord::Migration[5.2]
  def change
    create_table :compatibilities do |t|
      t.integer :value

      t.timestamps
    end
  end
end
