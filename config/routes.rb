Rails.application.routes.draw do

  namespace :api, defaults: {format: 'json'} do
    namespace :v1 do
      get '/isAuth' => 'users#is_auth'
      post '/login' => 'users#login'
      post '/postback' => 'users#postback'
      get '/logout' => 'users#logout'
      put '/update' => 'users#update'
      patch '/update' => 'users#update'


      resources :users, :teams, :except => [:new, :edit]
      resources :projects, :except => [:new, :edit] do
        resources :tasks, :except => [:new, :edit]
      end


    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
