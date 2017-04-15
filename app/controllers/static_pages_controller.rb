class StaticPagesController < ApplicationController
  def home
     @hello_world_props = { name: "Stranger" }
     
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
