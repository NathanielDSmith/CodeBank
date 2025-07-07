import { Section, PageContent } from '../types/index';

export const railsSections: Section[] = [
  { id: 'basics', title: 'Basics', icon: '📚' },
  { id: 'mvc', title: 'MVC Structure', icon: '🏛️' },
  { id: 'routing', title: 'Routing', icon: '🛣️' },
  { id: 'activerecord', title: 'ActiveRecord', icon: '🗄️' },
  { id: 'migrations', title: 'Migrations', icon: '📝' },
  { id: 'controllers', title: 'Controllers & Views', icon: '🖥️' },
  { id: 'rest', title: 'RESTful APIs', icon: '🔗' }
];

export const railsContent: PageContent = {
  basics: [
    {
      title: 'Getting Started',
      examples: [
        { title: 'Create new app', code: 'rails new myapp\ncd myapp\nrails server' },
        { title: 'Generate resource', code: 'rails generate scaffold Post title:string content:text' }
      ]
    }
  ],
  mvc: [
    {
      title: 'What is MVC?',
      examples: [
        { title: 'MVC Overview', code: 'Model - Handles data and business logic\nView - Displays data\nController - Handles input and updates model/view' }
      ]
    }
  ],
  routing: [
    {
      title: 'How to define routes',
      examples: [
        { title: 'Basic route', code: 'get "/welcome", to: "welcome#index"' },
        { title: 'Resource route', code: 'resources :posts' },
        { title: 'Nested routes', code: 'resources :posts do\n  resources :comments\nend' }
      ]
    }
  ],
  activerecord: [
    {
      title: 'ActiveRecord basics',
      examples: [
        { title: 'Find records', code: 'Post.find(1)\nPost.where(title: "Hello")\nPost.all' },
        { title: 'Create records', code: 'Post.create(title: "New Post")\npost = Post.new\npost.save' }
      ]
    }
  ],
  migrations: [
    {
      title: 'Database migrations',
      examples: [
        { title: 'Create migration', code: 'rails generate migration CreatePosts title:string content:text' },
        { title: 'Run migration', code: 'rails db:migrate\nrails db:rollback' }
      ]
    }
  ],
  controllers: [
    {
      title: 'Controllers and views',
      examples: [
        { title: 'Basic controller', code: 'class PostsController < ApplicationController\n  def index\n    @posts = Post.all\n  end\nend' },
        { title: 'View template', code: '<h1>Posts</h1>\n<% @posts.each do |post| %>\n  <h2><%= post.title %></h2>\n<% end %>' }
      ]
    }
  ],
  rest: [
    {
      title: 'RESTful conventions',
      examples: [
        { title: 'REST actions', code: 'GET /posts (index)\nPOST /posts (create)\nGET /posts/:id (show)\nPUT /posts/:id (update)\nDELETE /posts/:id (destroy)' },
        { title: 'API response', code: 'render json: @posts\nrender json: { status: "success", data: @post }' }
      ]
    }
  ]
}; 