import { AppContainer } from './App.style';
import Calculator from './components/calculator/calculator';

function App() {
  return (
    <AppContainer className="App">
      <h2 style={{color: 'white', textAlign: 'center'}}>Basic React-Redux-Saga Calculator</h2>
      <Calculator/>
    </AppContainer>
  );
}

export default App;