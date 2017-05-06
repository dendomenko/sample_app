class ApiKey < ActiveRecord::Base
  # attr_accessible :users, :token

  # belongs_to :users
  #
  # before_create :generate_token
  #
  # private
  #
  # def generate_token
  #   begin
  #     self.token = SecureRandom.hex.to_s
  #   end while self.class.exists?(token: token)
  # end
end