class TodoItemsController < ApplicationController
    before_action :set_todoitem

    # GET /todo_items
    def index
        @todoitems = TodoItem.all
        json_response(@todoitems)
    end
    
    # POST /todo_items
    def create
        @todoitem = TodoItems.create(todo_params)
        json_response(@todo, :created)
    end

    # GET /todo_items/:id
    def show
        json_response(@todoitem)
    end

    # PUT /todo_items/:id
    def update
        @todoitem.update(todo_params)
        head :no_content
    end

    private

    def todo_params
        #Whitelist params
        params.permit(:id, :description, :completed)
    end

    def set_todoitem
        @todoitem = TodoItem.find(params[:id])
    end
end
