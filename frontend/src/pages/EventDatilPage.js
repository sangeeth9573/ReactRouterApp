import { json, redirect, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetailPage(){
    const event =useRouteLoaderData('event-details');
    return (
        <EventItem event={event} />
    )
} 

export async function loader({request,params}){
    const eventId = params.eventId;
    const response = await fetch('http://localhost:8080/events/'+eventId);

    if (!response.ok) {
   
      throw json({ message: 'Could not fetch event Details..' },{
        status : 500
      })
    } else {
      const resData = await response.json();
      return resData.event;
    }
}
export async function action({request,params}){
  const eventId = params.eventId;
  const response = await fetch('http://localhost:8080/events/'+eventId,
    {method : request.method}
  );

  if (!response.ok) {
 
    throw json({ message: 'Could not delete event.' },{
      status : 500
    })
  } 
  return redirect('/events');
}