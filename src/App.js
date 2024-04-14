import './App.css';
import Body from './components/body/Body';
import Footer from './components/footer/Footer';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './components/home/Home';
import Messages from './components/messages/Messages';
import Help from './components/help/Help';
import News from './components/news/News';
function App() {
  // creating routes
  const router = createBrowserRouter([
   {path: '/', element: <Body/>, children: [
    {path: '/', element: <Home/>},
    {path: 'messages', element: <Messages/>},
    {path: 'help', element: <Help/>},
    {path: 'news', element: <News/>}
   ]}
  ])
  return (
    <div className="app-wrapper-container">
      <div className='app-container'>
        <RouterProvider router={router}/>
      </div>
    </div>
  );
}

export default App;
