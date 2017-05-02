Rails.application.routes.draw do


  resources :users do
    resources :projects do
        get 'add_user'
        post 'add_user_create'
    end
  end

  namespace :api, defaults: {format: 'json'} do
    namespace :v1 do
      get 'isAuth' => 'users#is_auth'
      post '/login' => 'users#login'
      post '/postback' => 'users#postback'
      get '/logout' => 'users#logout'
      resources :users do
      end
    end
  end

  resources :sessions, only: [:new, :create, :destroy]
  root 'static_pages#home'
  match '/signup', to: 'users#new',            via: 'get'
  match '/signin',   to: 'sessions#new',         via: 'get'
  match '/signout',  to: 'sessions#destroy',     via: 'delete'
  match '/help',     to: 'static_pages#help',    via: 'get'
  match '/about',    to: 'static_pages#about',   via: 'get'
  match '/contact',  to: 'static_pages#contact', via: 'get'
  #
  # scope '/api' do
  #   scope '/v1' do
  #     scope '/users' do
  #       post '/' => 'users#create'
  #       get  '/' => 'users#index'
  #       get '/:id' => 'users#show'
  #     end
  #   end
  # end

  # namespace :api do
  #   namespace :v1 do
  #     resources :users, only: [:index, :create, :show, :update, :destroy]
  #     # resources :microposts, only: [:index, :create, :show, :update, :destroy]
  #   end
  # end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
