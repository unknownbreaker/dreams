class DreamsController < ApplicationController

  def index
    if current_user
      user = current_user
      @dreams = user.dreams
    end
    render 'index'
  end

  def create
    @user = User.find_by(user_id: session[:user_id])
    video_properties = params
    @dream = @user.dreams.new(video_properties: video_properties)
    @dream.keygen
    @dream.save

    p @dream
    respond_to do |format|
      format.json { render json: @dream }
    end
  end

# If discard was clicked at the end of the dream, it will destroy that dream sequence
  def destroy
    user = User.find_by(user_id: session[:user_id])
    user.dreams.last.destroy
  end

# Fix this method to be able to find the dream by the dream_id provided/clicked by user
  def show
    dream = Dream.find_by(key: params[:id])

    dream = dream.video_properties["dream"]
    @vidArray = []

    dream.each do |key, value|
      @vidArray << value
    end

    render 'index'
  end

  def client
    client_id = ENV['CLIENT_ID']
    respond_to do |format|
      format.json {render json: client_id}
    end
  end

  def api
    api = ENV['API_KEY']
    respond_to do |format|
      format.json {render json: api}
    end
  end

end
