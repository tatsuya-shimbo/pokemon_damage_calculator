class Mine < ApplicationRecord
  belongs_to :user

  validates :pokemon, presence: true, inclusion: { in: (1..421) }
  validates :hit_point, inclusion: { in: (0..252) }, allow_nil: true
  validates :attack, inclusion: { in: (0..252) }, allow_nil: true
  validates :block, inclusion: { in: (0..252) }, allow_nil: true
  validates :contact, inclusion: { in: (0..252) }, allow_nil: true
  validates :defense, inclusion: { in: (0..252) }, allow_nil: true
  validates :speed, inclusion: { in: (0..252) }, allow_nil: true
  validates :name, presence: true, length: { maximum: 20 }
end
