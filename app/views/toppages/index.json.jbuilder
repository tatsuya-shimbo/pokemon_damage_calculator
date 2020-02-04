json.array! @pokes do |poke|
  json.name poke.name
end

json.array! @compatibilities1 do |compatibility1|
  json.value compatibility1.value
end

json.array! @compatibilities2 do |compatibility2|
  json.value compatibility2.value
end
