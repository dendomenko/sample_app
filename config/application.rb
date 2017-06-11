require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module SimpleApp
  class Application < Rails::Application
    # config.api_only = true
    config.autoload_paths += %W(#{config.root}/app)
  end
end
