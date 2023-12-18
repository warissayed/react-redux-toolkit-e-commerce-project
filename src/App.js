import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from 'react-router-dom'
import Dashbord from './Components/Dashbord';
import Cart from './Components/Cart';
import RootLayout from './Components/RootLayout';

function App() {
  const router = createBrowserRouter(createRoutesFromElements(

    <Route path="/" element={<RootLayout/>} >
      <Route index element={<Dashbord/>}></Route>
      <Route path="/Cart" element ={<Cart/>}></Route>
    </Route>
  ))
  return (
    <div className="App">
      <RouterProvider router={router}/>
     
    </div>
  );
}

export default App;
