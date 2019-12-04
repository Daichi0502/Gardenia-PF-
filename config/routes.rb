Rails.application.routes.draw do
  devise_for :admins

  # ユーザ用ルーティング
  devise_for :users

  resources :users, only: [:show, :edit, :update]
  get 'users/:id/exit' => 'users#exit', as: 'exit'
  get 'users/:id/follower' => 'users#follower', as: 'follower'
  get 'users/:id/following' => 'users#following', as: 'following'

  resources :post_gardens, only: [:new, :create, :show :edit, :update, :destroy]
  root to: 'post_gardens#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
