class Api::MessagesController < ApplicationController
  def index
    @message = Message.where()
  end
end
