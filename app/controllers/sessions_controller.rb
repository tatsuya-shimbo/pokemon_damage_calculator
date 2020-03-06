class SessionsController < ApplicationController
  before_action :require_login, only: [:attack_mine, :block_mine]

  def index
  end

  def attack_poke
    pokemon_name = session_params[:attack_name]
    left_pokemon = Pokemon.find_by(name: pokemon_name)
    if left_pokemon != nil
      session[:attack_poke_id] = left_pokemon.id
      session[:attack_mine_id] = nil
    end
    redirect_to root_url
  end

  def block_poke
    pokemon_name = session_params[:block_name]
    right_pokemon = Pokemon.find_by(name: pokemon_name)
    if right_pokemon != nil
      session[:block_poke_id] = right_pokemon.id
      session[:block_mine_id] = nil
    end
    redirect_to root_url
  end

  def change_poke
    before_attack_id = session[:attack_poke_id]
    before_block_id = session[:block_poke_id]
    session[:attack_poke_id] = before_block_id
    session[:block_poke_id] = before_attack_id

    before_attack_mine = session[:attack_mine_id]
    before_block_mine = session[:block_mine_id]
    session[:attack_mine_id] = before_block_mine
    session[:block_mine_id] = before_attack_mine

    redirect_to root_url
  end

  def attack_mine
    id = session_params[:attack_mine_id]
    @mine_attack = Mine.find_by(id: id)
    session[:attack_poke_id] = @mine_attack.pokemon
    session[:attack_mine_id] = id
    redirect_to root_url
  end

  def block_mine
    id = session_params[:block_mine_id]
    @mine_block = Mine.find_by(id: id)
    session[:block_poke_id] = @mine_block.pokemon
    session[:block_mine_id] = id
    redirect_to root_url
  end

  def create
    name = session_params[:name]
    password = session_params[:password]
    if login(name, password)
      flash[:success] = "ログインに成功しました"
      redirect_to root_url
    else
      flash[:fale] = "ログインに失敗しました"
      redirect_to root_url
    end
  end

  def destroy
    session[:user_id] = nil
    session[:attack_mine_id] = nil
    session[:block_mine_id] = nil
    flash[:success] = "ログアウトしました"
    redirect_to root_url
  end

  def login(name, password)
    @user = User.find_by(name: name)
    if @user && @user.authenticate(password)
      session[:user_id] = @user.id
      return true
    else
      return false
    end
  end

  def session_params
    params.require(:session).permit(:attack_name, :block_name, :name, :password, :attack_mine_id, :block_mine_id)
  end
end
