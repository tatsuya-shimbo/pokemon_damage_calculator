json.array! @pokes do |poke|
  json.name poke.name
end

json.array! @compatibilities1 do |compatibility1|
  json.value compatibility1.value
end

json.array! @compatibilities2 do |compatibility2|
  json.value compatibility2.value
end

json.array! @pokemon do |pokemon|
  json.id pokemon.id
  json.hit_point pokemon.hit_point
  json.attack pokemon.attack
  json.block pokemon.block
  json.contact pokemon.contact
  json.defense pokemon.defense
  json.speed pokemon.speed
end

json.array! @nature do |nature|
  json.id nature.id
  json.value nature.value
end

json.array! @mine_output do |mine|
  json.id mine.id
  json.name mine.name
end
