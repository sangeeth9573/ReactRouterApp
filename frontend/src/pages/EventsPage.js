
//  import { useEffect, useState } from 'react';

import { Suspense } from 'react';
import EventsList from '../components/EventsList';
import { defer, json, useLoaderData, Await } from 'react-router-dom';

function EventsPage() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [fetchedEvents, setFetchedEvents] = useState();
  // const [error, setError] = useState();

  // useEffect(() => {
  //   async function fetchEvents() {
  //     setIsLoading(true);
  //     const response = await fetch('http://localhost:8080/events');

  //     if (!response.ok) {
  //       setError('Fetching events failed.');
  //     } else {
  //       const resData = await response.json();
  //       setFetchedEvents(resData.events);
  //     }
  //     setIsLoading(false);
  //   }

  //   fetchEvents();
  // }, []);
  const {events} = useLoaderData();
  return (
    
      // {/* <div style={{ textAlign: 'center' }}>
      //   {isLoading && <p>Loading...</p>}
      //   {error && <p>{error}</p>}
      // </div>
      // {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />} */}
      // {/* <div style={{ textAlign: 'center' }}>
      //   <EventsList events={events} />
      // </div> */}
      <Suspense fallback={<p style={{textAlign:'center'}} >Loading...</p>}>
    <Await resolve={events}>
        {(loadevents)=><EventsList events={loadevents}/>}
    </Await>
    </Suspense>

    
  );
}

export default EventsPage;
async function  loadevent() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: 'Could not fetch events..' }),
    //   {
    //     status: 500,
    //   })
    throw json({ message: 'Could not fetch events..' },{
      status : 500
    })
  } else {
    const resData = await response.json();
    return resData.events;
  }
}
export async function loader() {
 return defer({
    events : loadevent()
  })  

}
