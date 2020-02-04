class AddZukanIdToPokemons < ActiveRecord::Migration[5.2]
  def change
    add_column :pokemons, :zukan_id, :integer, after: :id
  end
end
