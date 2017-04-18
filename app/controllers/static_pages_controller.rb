class StaticPagesController < ApplicationController
  include ReactOnRails::Controller
  def home
    @props = {status: 'unknown'}
         redux_store("configureStore", props:  @props )
          render_html
  end

  def help
  end

  def about
  end

  def contact
  end

  def render_html
    respond_to do |format|
      format.html
    end
  end

end
