class HealthController < ApplicationController
  def index
    render json: { app: {sucess: true} }
  end

  def ssl_configured?
    false
  end
end
