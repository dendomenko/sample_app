#
# class UsersController < ApplicationController
#
#
#   def new
#     @user = User.new
#   end
#
#   def index
#     users = User.all
#     render json: users, :status => '200'
#   end
#
#   def show
#     user = User.find(params[:id])
#     render json: user, :status => '200'
#   end
#
#   def create
#     @user = User.new(user_params)
#     @user.save!
#     # if @user.save
#     #   sign_in @user
#     #   flash[:success] = "Thank You for join to AntHill Task Manager"
#     #   redirect_to @user
#     # else
#     #   render 'new'
#     # end
#   end
#
#    private
#
#     def user_params
#       params.require(:user).permit(:name, :email, :password,
#                                    :password_confirmation)
#     end
# end
