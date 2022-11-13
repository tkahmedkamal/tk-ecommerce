import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import AdminLoginPage from './pages/admin/AdminLoginPage';
import theme from './themes';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Routes>
          <Route>
            <Route path='admin-login' element={<AdminLoginPage />} />
          </Route>
        </Routes>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
