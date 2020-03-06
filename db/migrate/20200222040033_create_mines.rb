class CreateMines < ActiveRecord::Migration[5.2]
  def change
    create_table :mines do |t|
      t.references :user, foreign_key: true
      t.integer :pokemon
      t.integer :hit_point
      t.integer :attack
      t.integer :block
      t.integer :contact
      t.integer :defense
      t.integer :speed
      t.string :name
      t.integer :nature
      t.integer :item
      t.integer :characteristic

      t.timestamps
    end
  end
end
