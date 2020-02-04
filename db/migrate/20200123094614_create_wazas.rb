class CreateWazas < ActiveRecord::Migration[5.2]
  def change
    create_table :wazas do |t|
      t.references :pokemon, foreign_key: true
      t.references :skill, foreign_key: true

      t.timestamps
    end
  end
end
