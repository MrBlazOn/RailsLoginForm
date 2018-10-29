class UsersController < ApplicationController
  def show
    @user = User.find(params[:id])
  end

  def index
  end

  def edit_multiple
    if params[:commit] == "Delete"
      User.where(id: params[:user_ids]).destroy_all
    elsif params[:commit] == "Lock"
      User.where(id: params[:user_ids]).each do |user_to_lock|
        user_to_lock.lock_access!
      end
    elsif params[:commit] == "Unlock"
      User.where(id: params[:user_ids]).each do |user_to_unlock|
        user_to_unlock.unlock_access!
      end
    end
    redirect_to root_url
  end
end