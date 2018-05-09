class HealthController < ApplicationController
  def index
    render json: { app: {sucess: true} }
  end
end
