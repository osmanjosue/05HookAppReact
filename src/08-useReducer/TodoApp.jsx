import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { useTodos } from '../hooks';

export const TodoApp = () => {
  const {
    todos,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
    pendingTodosCount,
    todosCount,
  } = useTodos();

  return (
    <>
      <h1>
        TodoApp: {todosCount} <small>pendientes: {pendingTodosCount}</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          {/* TodoList */}
          <TodoList
            todosReceived={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
          {/* fin de TodoList */}
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          {/* TodoAdd onNewTodo (todo)*/}
          <TodoAdd onNewTodo={handleNewTodo} />
          {/* TodoAdd onNewTodo (todo)*/}
        </div>
      </div>
    </>
  );
};
