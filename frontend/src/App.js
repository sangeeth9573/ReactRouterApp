// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
// 3. Add a root layout that adds the <MainNavigation> component above all page components
// 4. Add properly working links to the MainNavigation
// 5. Ensure that the links in MainNavigation receive an "active" class when active
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
// 7. Output the ID of the selected event on the EventDetailPage
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import {createBrowserRouter , RouterProvider} from 'react-router-dom';
import HomePage from './pages/HomePage';
import RootLayout from './pages/RootLayout';
import EventsPage from './pages/EventsPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import EventDetailPage,{loader as EventDatilsLoader, action as EventDatilAction} from './pages/EventDatilPage';
import EventLayout from './pages/EventLayout';
import { loader as EventLoader } from './pages/EventsPage';
import ErrorPage from './pages/ErrorPage';
import { action as ManipulateFormAction } from './components/EventForm';
const router = createBrowserRouter([
  {
    path :'/',
    element :<RootLayout/>,
    errorElement:<ErrorPage/>,
    children :[
      {path :'', element:<HomePage/>},
      { path:'events', 
        element:<EventLayout/>,
        children: [
          {index: true, element:<EventsPage/>,
            loader :EventLoader
          },
          {path : 'new', element:<NewEventPage/>, action:ManipulateFormAction},
          {path : ':eventId',
            id:'event-details',
            loader:EventDatilsLoader,
            children:[
              {index:true,
                element:<EventDetailPage/>,
                action:EventDatilAction
              },
              {path :'edit', element:<EditEventPage/>,action:ManipulateFormAction
              }
              
            ]
          }
          
        ]
      }
    
    ]
  }
])
function App() {
  return <RouterProvider router={router}/>;
}

export default App;
