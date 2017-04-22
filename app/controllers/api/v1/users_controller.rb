module Api
  module V1
    class UsersController < ApplicationController
      # before_action :restrict_access

      def index
        users = User.all
        render json: users
      end

      def show
        @user = User.find_by_id(params[:id])
        if @user
          render  status: 200
        else
          render json: {message: 'Resource not found'}, status: :not_found
        end
      end

      def create
        user = User.new(user_params)
        user.save!
        if user.save
          render json: {message: 'User created'}, status: :ok
        else
          render json: {message: 'Wrong query'}, status: :bad_request
        end

      end

      def postback
        puts request.body.read
        render json: {message: request.body.read}, status: :bad_request

      end

      def user_params
        params.require(:user).permit(:name, :email, :password,
                                     :password_confirmation)
      end
    end

  end
end