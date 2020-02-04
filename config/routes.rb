Rails.application.routes.draw do
  root to: "toppages#index"

  resources :sessions, only: [:index] do
    collection do
      post :attack_poke
      post :block_poke
      post :change_poke
    end
  end
end
