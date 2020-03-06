class MinesController < ApplicationController
  before_action :require_login
  before_action :correct_user, only: [:show, :update, :destroy]

  def index
    @mines = current_user.mines
  end

  def new
    @mine = current_user.mines.build
  end

  def show
    @pokemon_new = Pokemon.find(@mine.pokemon)
    @show_nature = Nature.find(@mine.nature)
    @show = 1
  end

  def create
    @mine = current_user.mines.build(mine_params)
    @mine_count = current_user.mines.count
    if @mine.save && @mine_count <= 100
      flash[:success] = "ポケモンを登録しました"
      redirect_to root_url
    else
      flash.now[:fale] = "ポケモンの登録に失敗しました"
      render :new
    end
  end

  def destroy
    @mine.destroy
    flash[:success] = "ポケモンを削除しました"
    redirect_to mines_url
  end

  def edit
  end

  def update
    if @mine.update(mine_params)
      flash[:success] = "ポケモンを編集しました"
      redirect_to mines_url
    else
      flash.now[:fale] = "ポケモンの編集に失敗しました"
      render :show
    end
  end

  def attack_new
    @mine = current_user.mines.build
    @pokemon_new = attack_pokemon
    render "mines/new"
  end

  def block_new
    @mine = current_user.mines.build
    @pokemon_new = block_pokemon
    render "mines/new"
  end

  def mine_params
    params.require(:mine).permit(:pokemon, :name, :hit_point, :attack, :block, :contact, :defense, :speed, :nature, :item, :characteristic)
  end

  def correct_user
    @mine = current_user.mines.find_by(id: params[:id])
    unless @mine
      redirect_to root_url
    end
  end
end
