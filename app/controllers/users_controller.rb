class UsersController < ApplicationController

  def index
    users = User.all
    render json: users
  end

  def create
  end

  private

  def user_params
    params.require(:user).permit(:firstname, :lastname, :username)
  end


end
