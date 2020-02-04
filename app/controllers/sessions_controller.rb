class SessionsController < ApplicationController
  def index
  end

  def attack_poke
    pokemon_name = session_params[:attack_name]
    left_pokemon = Pokemon.find_by(name: pokemon_name)
    if left_pokemon != nil
      session[:attack_poke_id] = left_pokemon.id
    end
    redirect_to root_url
  end

  def block_poke
    pokemon_name = session_params[:block_name]
    right_pokemon = Pokemon.find_by(name: pokemon_name)
    if right_pokemon != nil
      session[:block_poke_id] = right_pokemon.id
    end
    redirect_to root_url
  end

  def change_poke
    before_attack_id = session[:attack_poke_id]
    before_block_id = session[:block_poke_id]
    session[:attack_poke_id] = before_block_id
    session[:block_poke_id] = before_attack_id
    redirect_to root_url
  end

  def session_params
    params.require(:session).permit(:attack_name, :block_name)
  end
end
