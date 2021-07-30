import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import TodoItem from "./TodoItem";


const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TodoList />
    </QueryClientProvider>
  );
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
        <TodoItem description={todo_item.description} complete={todo_item.complete}/>
      ))}
    </div>
  );
}