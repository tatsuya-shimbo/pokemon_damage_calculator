class CreatePokemons < ActiveRecord::Migration[5.2]
  def change
    create_table :pokemons do |t|
      t.string :name
      t.integer :hit_point
      t.integer :attack
      t.integer :block
      t.integer :contact
      t.integer :defense
      t.integer :speed
      t.integer :category_1
      t.integer :category_2

      t.timestamps
    end
  end
end
