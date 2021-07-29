# Defines the CreateTodoItems migration
# frozen_string_literal: true

class CreateTodoItems < ActiveRecord::Migration[6.1]
  def change
    create_table :todo_items do |t|
      t.string :description
      t.boolean :complete
      t.boolean :active

      t.timestamps
    end
  end
end
