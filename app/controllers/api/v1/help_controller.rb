module Api
  module V1
    class HelpController < ApplicationController
      def create_status
        status = Status.new(name: params[:name])
        status.save
        render json: {message: status}, status: :ok

      end

      def create_priority
        priority = Priority.new(name: params[:name])
        priority.save
        render json: {name: priority}, status: :ok

      end

      def create_type
        type = Type.new(name: params[:name])
        type.save
        render json: {name: type}, status: :ok
      end

      def all_meta
        @status = Status.all
        @priority = Priority.all
        @type = Type.all

      end

    end
  end
end
