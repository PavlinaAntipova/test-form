import theme from "helper/theme";
import { NavLink, Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Container, Navigation, Title } from "./App.styled";


const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <Container>
        <header>
            <Title>Dima's Tasks</Title>
            <nav>
                <Navigation>
                    <li><NavLink to='/date-form' style={({ isActive }) =>
              isActive ? theme.activeLink : undefined
            }>Date Form Task</NavLink></li>
                     <li><NavLink to='/multiselect' style={({ isActive }) =>
              isActive ? theme.activeLink : undefined
            }>Multiselector Task</NavLink></li>
                </Navigation>
            </nav>
      </header>
        
        <div>
            <Outlet />
        </div>
      </Container>
      </ThemeProvider>
  );
}

export default App;

