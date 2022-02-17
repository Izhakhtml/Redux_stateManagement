import './App.css';
// import ApiRouter from './apiRouter/ApiRouter.component';
// import { Provider } from './context/Context-mode.component';
import { Provider } from 'react-redux';
import store from './redux/store';
import Todos from './components/todos/Todos.component';
function App() {
  return (
    <div className="App">
     <Provider store ={store}>
           <Todos/>
     </Provider>
    </div>
  );
}

export default App;
