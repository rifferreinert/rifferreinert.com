# frozen_string_literal: true

Rails.application.routes.draw do
  get 'timer', to: 'timer#index'
  get 'timer/*path', to: 'timer#index'

  get 'health', to: 'health#index'
end
