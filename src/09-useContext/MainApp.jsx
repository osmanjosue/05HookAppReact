import { Navbar } from './Navbar';
import { HomePage, AboutPage, LoginPage } from './index';
import { Navigate, Route, Routes } from 'react-router-dom';
/* 
import { AboutPage } from './AboutPage';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage'; */

export const MainApp = () => {
  return (
    <>
      <Navbar/>
      <hr />

      <Routes>
        <Route
          path="/"
          element={<HomePage />}
        />
        <Route
          path="about"
          element={<AboutPage />}
        />
        <Route
          path="login"
          element={<LoginPage />}
        />
        {/* <Route
          path="/*"
          element={<LoginPage />}
        /> */}
        <Route
          path="/*"
          element={<Navigate to="/login" />}
        />
      </Routes>
    </>
  );
};
