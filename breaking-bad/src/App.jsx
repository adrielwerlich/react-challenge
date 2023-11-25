// import './App.css'
import Breakify from './views/Breakify'
import { Provider } from 'react-redux'
import store from './store/store'
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

function App() {

  return(
    <AppContainer id="app-container">
      <Provider store={store}>
        <Breakify />
      </Provider>
    </AppContainer>
  ) 
  
}

export default App
