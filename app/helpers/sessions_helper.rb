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

  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def login?
    !!current_user
  end
end
