class RemoveZukanIdFromPokemons < ActiveRecord::Migration[5.2]
  def change
    remove_column :pokemons, :zukan_id, :integer
  end
end
