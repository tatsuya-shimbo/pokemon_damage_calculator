Rails.application.routes.draw do
  root to: "toppages#index"

  resources :toppages, only: [:index] do
    collection do
      get :how
    end
  end


  resources :users, only: [:new, :create]

  resources :mines do
    collection do
      get :attack_new
      get :block_new
    end
  end

  post "login", to: "sessions#create"
  delete "logout", to: "sessions#destroy"

  resources :sessions, only: [:index] do
    collection do
      post :attack_poke
      post :block_poke
      post :change_poke
      post :attack_mine
      post :block_mine
    end
  end

  get "sessions/attack_mine", to: "toppages#index"
  get "sessions/block_mine", to: "toppages#index"
end
