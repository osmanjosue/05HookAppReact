import { TodoItem } from "./TodoItem";

export const TodoList = ({ todosReceived = [] }) => {
  return (
    <>
      <ul className="list-group">
        {todosReceived.map((todo) => (
          //TodoItem...
          <TodoItem key={todo.id} todoReceived={todo} />
        ))}
      </ul>
    </>
  );
};
