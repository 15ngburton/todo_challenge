import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import TodoItem from "./TodoItem";


const queryClient = new QueryClient();

class App extends React.Component{
  constructor() {
    super();
    this.state = {filter: "all"};
  }
  
  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <form>
          <label for="filter">Filter results:</label>
          <select name="filter" id="filter">
            <option value="all">All</option>
            <option value="pending">Pending Only</option>
            <option value="completed">Completed Only</option>
          </select>
      </form>
      <br />
      <hr/>
        <QueryClientProvider client={queryClient}>
          <TodoList />
        </QueryClientProvider>
      </div>
    );
  }
}

function TodoList() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("http://127.0.0.1:3000/todo_items").then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      {data.map((todo_item) => (
        <TodoItem 
          description={todo_item.description} 
          complete={todo_item.complete}
          id={todo_item.id}
          active={todo_item.active}  
        />
      ))}
    </div>
  );
}

export default App;