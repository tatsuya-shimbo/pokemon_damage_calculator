class AddzukanIdToPokemons < ActiveRecord::Migration[5.2]
  def change
    add_column :pokemons, :zukan_id, :integer
  end
end
