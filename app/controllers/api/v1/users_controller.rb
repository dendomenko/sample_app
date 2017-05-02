module Api
  module V1
    class UsersController < ApplicationController
      # before_action :restrict_access
      before_action :inspect_params, :authenticate_request!
      skip_before_action :authenticate_request!, only: [:login, :create]

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

      def is_auth
        render json: {message: "Logged in"}, status: :ok
      end

      def login
        @user = User.find_by(email: params[:email].downcase)

        if @user && @user.authenticate(params[:password])
          @auth_token = JsonWebToken.encode({user_id: @user.id})
          render status: :ok
        else
          render json: {error: 'Invalid username / password'}, status: :unauthorized
        end

        # if @user && @user.authenticate(params[:password])
        #   sign_in @user
        #   render status: :ok
        # else
        #   render json: {message: "Something goes wrong"}, status: :bad_request
        # end
      end

      def logout
        sign_out
        render json: {message: "Logout"}, status: :ok
      end

      def postback
      end

      private
      def user_params
        params.require(:user).permit(:name, :email, :password,
                                     :password_confirmation)
      end

      def inspect_params
        puts params.inspect
      end


      # def sign_in(user)
      #   remember_token = User.new_remember_token
      #   cookies.permanent[:remember_token] = remember_token
      #   user.update_attribute(:remember_token, User.encrypt(remember_token))
      #   self.current_user = user
      # end
    end

  end
end