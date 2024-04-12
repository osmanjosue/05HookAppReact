import { TodoItem } from "./TodoItem";

export const TodoList = ({ todosReceived = [], onDeleteTodo }) => {
  return (
    <>
      <ul className="list-group">
        {todosReceived.map((todo) => (
          //TodoItem...
          <TodoItem
            key={todo.id}
            todoReceived={todo}
            onDeleteTodo={onDeleteTodo}
          />
        ))}
      </ul>
    </>
  );
};
