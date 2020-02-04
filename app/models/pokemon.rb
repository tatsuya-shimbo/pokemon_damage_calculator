class Pokemon < ApplicationRecord
  has_many :wazas
  has_many :able, through: :wazas, source: :skill

  has_many :tokuseis
  has_many :have, through: :tokuseis, source: :characteristic
end
