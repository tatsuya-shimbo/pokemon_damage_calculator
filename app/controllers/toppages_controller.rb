class ToppagesController < ApplicationController
  def index
    @pokes = Pokemon.where("name LIKE(?)", "#{params[:keyword]}%")
    @compatibilities1 = Compatibility.where(id: params[:id1])
    @compatibilities2 = Compatibility.where(id: params[:id2])
  end
end
