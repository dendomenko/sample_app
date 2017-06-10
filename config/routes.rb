Rails.application.routes.draw do

  namespace :api, defaults: {format: 'json'} do
    namespace :v1 do
      get 'isAuth', to: 'users#is_auth'
      post 'login', to: 'users#login'
      post 'postback', to: 'users#postback'
      get 'logout', to: 'users#logout'
      put 'update', to: 'users#update'
      patch 'update', to: 'users#update'

      get 'roles', to:'projects#roles'

      post 'status', to: 'help#create_status'
      post 'type', to: 'help#create_type'
      post 'priority', to: 'help#create_priority'

      get 'helper/task_meta', to: 'help#all_meta'


      resources :users, :teams, :except => [:new, :edit]

      resources :projects, :except => [:new, :edit] do
        get 'activity', to: 'projects#activity'
        post 'add-user', to:'projects#add_user'
        delete 'delete-user/:user_id', to: 'projects#delete_user'

        get 'tasks/user/:user_id', to: 'tasks#all_user_tasks'
        resources :tasks, :except => [:new, :edit] do
          post 'comment', to: 'tasks#add_comment'
          get 'comments', to: 'tasks#comments'
        end
      end

    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
