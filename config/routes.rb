Rails.application.routes.draw do
  resources :posts
  root to: 'pages#home'
  devise_for :users

  match '/users' => 'users#index', via: :get
  match 'users/:id' => 'users#show', via: :get

  match 'users/:id' => 'users#edit_multiple', :via => :post, :as => :admin_edit_user
  resources :users do
    collection do
      post :edit_multiple
    end
  end
end