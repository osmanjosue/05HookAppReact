export const TodoItem = ({ todoReceived = [] }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span className="align-self-center">{todoReceived.description}</span>
      <button className="btn btn-danger">Borrar</button>
    </li>
  );
};
