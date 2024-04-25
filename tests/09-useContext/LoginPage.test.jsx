import { fireEvent, render, screen } from '@testing-library/react';
import { Usercontext } from '../../src/09-useContext/context/UserContext';
import { LoginPage } from '../../src/09-useContext/LoginPage';

describe('Pruebas en <LoginPag />', () => {
  test('should show the component without the user', () => {
    render(
      <Usercontext.Provider value={{ user: null }}>
        <LoginPage />
      </Usercontext.Provider>
    );

    const preTag = screen.getByLabelText('pre');
    expect(preTag.innerHTML).toBe('null');
  });

  test('Should call the setUser when the button is clicked', () => {
    const setUserMock = jest.fn();

    render(
      <Usercontext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage />
      </Usercontext.Provider>
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    
    expect(setUserMock).toHaveBeenCalledWith({"email": "juan@google.com", "id": 123, "name": "Juan"});
  });
});
