Rails.application.routes.draw do

  get 'hello_world', to: 'hello_world#index'
  resources :users do
    resources :projects do
        get 'add_user'
        post 'add_user_create'
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


get "react-router(/*all)", to: "static_pages#home"
mount ActionCable.server => "/cable"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
