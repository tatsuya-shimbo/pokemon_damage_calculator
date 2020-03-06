class ToppagesController < ApplicationController
  def index
    if session[:attack_mine_id] != nil
      @mine_attack = Mine.find_by(id: session[:attack_mine_id])
      @nature_attack = Nature.find_by(id: @mine_attack.nature)
    end

    if session[:block_mine_id] != nil
      @mine_block = Mine.find_by(id: session[:block_mine_id])
      @nature_block = Nature.find_by(id: @mine_block.nature)
    end



    @pokes = Pokemon.where("name LIKE(?)", "#{params[:keyword]}%")
    @pokemon = Pokemon.where(name: params[:pokemon])
    @nature = Nature.where(name: params[:nature])
    if login?
      @mine_output = current_user.mines.where("name LIKE(?)", "#{params[:mine]}%")
    end
  end

  def how

  end
end
