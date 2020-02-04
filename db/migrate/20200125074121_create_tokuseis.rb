class CreateTokuseis < ActiveRecord::Migration[5.2]
  def change
    create_table :tokuseis do |t|
      t.references :pokemon, foreign_key: true
      t.references :characteristic, foreign_key: true

      t.timestamps
    end
  end
end
