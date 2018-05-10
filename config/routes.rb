# frozen_string_literal: true

Rails.application.routes.draw do
  root to: 'home#index'
  get 'timer', to: 'timer#index'
  get 'timer/*path', to: 'timer#index'

  get 'health', to: 'health#index'

end
