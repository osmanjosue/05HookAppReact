export const TodoItem = ({ todoReceived = [], onDeleteTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="align-self-center">{todoReceived.description}</span>
      <button className="btn btn-danger" onClick={() => onDeleteTodo(todoReceived.id)}>
        Borrar
      </button>
    </li>
  );
};
