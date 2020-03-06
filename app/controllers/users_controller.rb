class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      flash[:success] = "アカウントを作成しました"
      redirect_to root_url
    else
      flash.now[:fale] = "アカウントの作成に失敗しました"
      render :new
    end
  end

  def user_params
    params.require(:user).permit(:name, :password)
  end
end
