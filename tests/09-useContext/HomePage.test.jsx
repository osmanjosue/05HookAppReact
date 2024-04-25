import { render, screen } from '@testing-library/react';
import { HomePage } from '../../src/09-useContext/HomePage';
import { Usercontext } from '../../src/09-useContext/context/UserContext';

describe('Pruebas en <HomePage />', () => {
  const user = {
    id: 1,
    name: 'Fernando',
  };

  test('should show the component without the user', () => {
    render(
      <Usercontext.Provider value={{ user: null }}>
        <HomePage />
      </Usercontext.Provider>
    );
    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
  });
  test('should show the component with the user', () => {
    render(
      <Usercontext.Provider value={{ user }}>
        <HomePage />
      </Usercontext.Provider>
    );
    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toContain(user.name);
    // expect(preTag.innerHTML).toContain(user.id.toString()); el de abajo tambien es lo mismo
    expect(preTag.innerHTML).toContain(`${user.id}`);
  });
});
