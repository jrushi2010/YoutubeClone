import './App.css';
import Head from './components/Head/Head';
import Body from './components/Body/Body';
import { Provider } from 'react-redux';
import store from './components/utils/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainer from './components/Body/MainContainer';
import WatchPage from './components/Body/WatchPage';



const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body/>,
    children: [
      {
        path: "/",
        element: <MainContainer/>
      },
      {
        path: "watch",
        element: <WatchPage/>
      }
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter}/>
      </div>
    </Provider>

  );
}

export default App;



/*

Head
Body
Sidebar
  MenuItems
  MainContainer
  ButtonList
  VideoContainer
    VideoCard

*/