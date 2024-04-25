import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer/TodoApp';
import { useTodos } from '../../src/hooks/useTodos';

jest.mock('../../src/hooks/useTodos')

describe('Pruebas en <TodoApp />', () => {
  useTodos.mockReturnValue({
    todos: [
      { id: 1, description: 'Todo #1', donde: false },
      { id: 2, description: 'Todo #2', donde: true },
    ],

    todosCount: 2,
    pendingTodosCount: 1,
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
    hancdleNewTodo: jest.fn(),
  });

  test('should show the component correctly', () => {
    render(<TodoApp />);
    // screen.debug(); 

    expect (screen.getByText('Todo #1')).toBeTruthy();
    expect (screen.getByText('Todo #2')).toBeTruthy();
    expect (screen.getByRole('textbox')).toBeTruthy();
    
  });
});
