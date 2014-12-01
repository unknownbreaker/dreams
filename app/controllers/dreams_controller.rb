class DreamsController < ApplicationController
  def index
    # This is not required as it is assumed to be the case implicitly.  This
    # method can be a no-liner, which is better even than a one-liner
    render 'index'
  end
end
