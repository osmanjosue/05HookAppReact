export const TodoItem = ({ todoReceived = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span
        className={`align-self-center ${
          (todoReceived.done)?'text-decoration-line-through':''
        }`}
        onClick={() => onToggleTodo(todoReceived.id)}>
        {todoReceived.description}
      </span>
      <button
        className="btn btn-danger"
        onClick={() => onDeleteTodo(todoReceived.id)}>
        Borrar
      </button>
    </li>
  );
};
