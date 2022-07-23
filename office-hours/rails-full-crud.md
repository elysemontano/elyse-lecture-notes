app/controllers/herb_controller.rb

```ruby
class PostController < ApplicationController
  def index
    @posts = Post.all
  end

  def show
    @post = Post.find(params[:id])
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.create(post_params)
    if @post.valid?
      redirect_to posts_path
    else
      redirect_to new_path
    end
  end

  def destroy
    @post = Post.find(params[:id])
    # @post.destroy ? redirect_to posts_path : redirect_to post_path(@post)
    redirect_to @post.destroy ? posts_path : post_path(@post)
      # if @post.destroy
      #   redirect_to posts_path
      # else
      #   redirect_to post_path(@post)
      # end
  end

  def edit
    @post = Post.find(params[:id])
  end

  def update
    @post = Post.find(params[:id])
    @post.update(post_params)
    if @post.valid?
      redirect_to post_path(@post)
    else
      redirect_to edit_post_path(@post)
    end
  end

  private
  def post_params
    params.require(:post).permit(:title, :content)
  end
end
```

/config/routes.rb

```ruby
Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get 'posts' => 'post#index', as: 'posts'
  get 'posts/new' => 'post#new', as: 'new_post'
  post 'posts' => 'post#create'
  get 'posts/:id' => 'post#show', as: 'post'
  delete 'posts/:id' => 'post#destroy', as: 'delete_post'
  get 'posts/:id/edit' => 'post#edit', as: 'edit_post'
  patch 'posts/:id' => 'post#update'
end
```

# Views 
Index:

```html
<div class='title'>
  <h1>Blog Posts</h1>
</div>
<div class='list'>
  <ul>
    <% @posts.each do |post|%>
      <li><%= link_to post.title, post_path(post) %></li>
      <% end %>
    </ul>
<br />
  <div class="post">
        <%= link_to 'Post a new blog', new_post_path %>
  </div>
</div>
```

Show:
```html
<h1><%= @post.title %></h1>

<br />
<p><%= @post.content %></p>

<br />

<%= link_to 'Edit Blog', edit_post_path %>

<br />
<%= link_to 'Delete Post', delete_post_path(@post), method: :delete, data: {confirm: 'Are really sure you want to delete this awesome post???'}%>

<br />
<%= link_to 'Back To Home', posts_path %>
```
New:
```html
<h3>Post a blog here:</h3>

<%= form_with model: @post, local: true do |form| %>
  <%= form.label :title %>
  <%= form.text_field :title %>
  <br />
  <%= form.label :content %>
  <%= form.text_area :content, size: '60x10' %>
  <br />
  <%= form.submit 'Post this blog' %>
  <%= form.submit 'Clear', :type => 'reset' %>
  <%=  %>

<% end %>

<br />
<p>Back to <%= link_to 'blogs', posts_path %></p>
```
Edit:
```html
<h3>Edit Your Blog Here</h3>

<%= form_with model: @post, method: :patch, local: true do |form| %>
  <%= form.label :title %>
  <%= form.text_field :title %>
  <br />
  <%= form.label :content %>
  <%= form.text_area :content, size: '60x10' %>
  <br />
  <%= form.submit 'Submit Change!' %>
  <%= form.submit 'Clear', :type => 'reset' %>
  <%=  %>

<% end %>

<br />
<p>Back to <%= link_to 'blogs', posts_path %></p>
```