 
import './App.css';
import Head from './Components/Head';
import Body from './Components/Body';
import { Provider } from 'react-redux';
import store from './utils/store';

function App() {
  return (
     <Provider store ={store}>

       
    <div>
       

      <Head/>
      <Body/>

      


      {/* 
      *
      * head 
      * body
      *  sidebar
      * MainContainer
      *  ButtonsList
      *  VideoContainer
      *  videoCard
      * 
      
      */}
      
    </div>

    </Provider>
  );
}

export default App;
