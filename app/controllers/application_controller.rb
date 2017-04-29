include ActionController::HttpAuthentication::Token::ControllerMethods
include ActionController::MimeResponds
include ActionController::Cookies

class ApplicationController < ActionController::Base
  require 'json_web_token'
  # protect_from_forgery with: :null
  include SessionsHelper

  #
  # private
  #
  # def restrict_access
  #   unless restrict_access_by_params || restrict_access_by_header
  #     render json: {message: 'Invalid API Token'}, status: 401
  #     return
  #   end
  #
  #   @current_user = @api_key.user if @api_key
  # end
  #
  # def restrict_access_by_header
  #   return true if @api_key
  #
  #   authenticate_with_http_token do |token|
  #     @api_key = ApiKey.find_by_token(token)
  #   end
  # end
  #
  # def restrict_access_by_params
  #   return true if @api_key
  #
  #   @api_key = ApiKey.find_by_token(params[:token])
  # end
  protected
  # Validates the token and user and sets the @current_user scope
  def authenticate_request!
    if !payload || !JsonWebToken.valid_payload(payload.first)
      return invalid_authentication
    end

    load_current_user!
    invalid_authentication unless @current_user
  end

  # Returns 401 response. To handle malformed / invalid requests.
  def invalid_authentication
    render json: {error: 'Invalid Request'}, status: :unauthorized
  end

  private
  # Deconstructs the Authorization header and decodes the JWT token.
  def payload
    auth_header = request.headers['Authorization']
    token = auth_header.split(' ').last
    JsonWebToken.decode(token)
  rescue
    nil
  end

  # Sets the @current_user with the user_id from payload
  def load_current_user!
    @current_user = User.find_by(id: payload[0]['user_id'])
  end

end
