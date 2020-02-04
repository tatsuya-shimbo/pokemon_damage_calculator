module SessionsHelper
  def attack_pokemon
    @attack_pokemon ||= Pokemon.find_by(id: session[:attack_poke_id])
  end

  def attack_pokemon?
    !!attack_pokemon
  end

  def block_pokemon
    @block_pokemon ||= Pokemon.find_by(id: session[:block_poke_id])
  end

  def block_pokemon?
    !!block_pokemon
  end
end
