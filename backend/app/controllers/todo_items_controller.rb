# Controller for TodoItems Objects
# frozen_string_literal: true

class TodoItemsController < ApplicationController

  # GET /todo_items
  def index
    @todoitems = TodoItem.where("active=true")
    json_response(@todoitems)
  end

  # POST /todo_items
  def create
    @todoitem = TodoItems.create(todo_params)
    json_response(@todo, :created)
  end

  # GET /todo_items/:id
  def show
    @todoitem = TodoItem.find(params[:id])
    json_response(@todoitem)
  end

  # PUT /todo_items/:id
  def update
    @todoitem = TodoItem.find(params[:id])
    @todoitem.update(todo_params)
    head :no_content
  end

  private

  def todo_params
    # Whitelist params
    params.permit(:id, :description, :complete, :active)
  end
end
