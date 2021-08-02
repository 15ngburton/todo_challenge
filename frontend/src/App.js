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
    function _change_filter(f){
      this.setState({filter: f.target.value})
    }

    function _TodoList() {
      const { isLoading, error, data } = useQuery("repoData", () =>
        fetch("http://127.0.0.1:3000/todo_items").then((res) => res.json())
      );
    
      if (isLoading) return "Loading...";
    
      if (error) return "An error has occurred: " + error.message;
    
      return (
        <div>
          {data.map((todo_item) => (
              ((todo_item.complete === false && this.state.filter === "pending") ||
              (todo_item.complete === true && this.state.filter === "completed") ||
              (this.state.filter === "all")) &&
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
    

    const change_filter = _change_filter.bind(this);
    const TodoList = _TodoList.bind(this);

    return (
      <div>
        <h1>Todo List</h1>
        <form>
          <label for="filter">Filter results:</label>
          <select name="filter" id="filter" onChange={change_filter}>
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
export default App;