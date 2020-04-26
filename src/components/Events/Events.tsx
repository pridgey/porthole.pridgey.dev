import React, { useEffect, useState } from "react";
import {
  EventItem,
  EventsHeader,
  EventsWrapper,
  EventIcon,
  EventText,
  EventName,
  EventTime,
  EventSection,
} from "./Events.styles";
import {
  getHumanReadableDate,
  getIcon,
  doesEventOccurToday,
  doesEventOccurMoreThanOneYear,
} from "./Events.functions";
import { GoogleEvent } from "./Events.types";

export const Events = () => {
  const [data, setData] = useState<GoogleEvent[]>([]);

  useEffect(() => {
    const apiKey = process.env.react_app_events_key;
    const clientID = process.env.react_app_events_client;
    const calendarID = "family10238568662206066609@group.calendar.google.com"; //your calendar Id
    const maxEvents = 15; //events to shown

    const scopes = "https://www.googleapis.com/auth/calendar.readonly";

    window.addEventListener("load", () => {
      const getEvents = () => {
        gapi.load("client:auth2", () => {
          gapi.client
            .init({
              apiKey: apiKey,
              clientId: clientID,
              discoveryDocs: [
                "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
              ],
              scope: scopes,
            })
            .then(() => {
              // Auth!
              if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
                const gapiClient: any = gapi.client;
                gapiClient["calendar"].events
                  .list({
                    calendarId: calendarID,
                    timeMin: new Date().toISOString(),
                    showDeleted: false,
                    singleEvents: true,
                    maxResults: maxEvents,
                    orderBy: "startTime",
                  })
                  .then((response: any) => {
                    setData(response?.result?.items);
                  });
              } else {
                gapi.auth2
                  .getAuthInstance()
                  .signIn()
                  .then(() => window.location.reload());
              }
            })
            .catch(() => console.error("Error grabbing Google Events"));
        });
      };

      setInterval(getEvents, 3600000);

      getEvents();
    });
  }, []);

  return (
    <EventsWrapper>
      <EventSection>
        {data.filter((x: GoogleEvent) =>
          doesEventOccurToday(x.start.dateTime || x.start.date)
        ).length > 0 && (
          <>
            <EventsHeader>On Deck</EventsHeader>
            {data
              .filter((x: GoogleEvent) =>
                doesEventOccurToday(x.start.dateTime || x.start.date)
              )
              .map((event, index) => {
                return (
                  <EventItem key={index}>
                    <EventIcon>{getIcon(event.summary)}</EventIcon>
                    <EventText>
                      <EventName>{event.summary}</EventName>
                      <EventTime>
                        {getHumanReadableDate(
                          event.start.dateTime || event.start.date
                        )}
                      </EventTime>
                    </EventText>
                  </EventItem>
                );
              })}
          </>
        )}
      </EventSection>
      <EventSection>
        <EventsHeader>Upcoming Events</EventsHeader>
        {data
          .filter(
            (x: GoogleEvent) =>
              !doesEventOccurToday(x.start.dateTime || x.start.date) &&
              !doesEventOccurMoreThanOneYear(x.start.dateTime || x.start.date)
          )
          .map((event, index) => {
            return (
              <EventItem key={index}>
                <EventIcon>{getIcon(event.summary)}</EventIcon>
                <EventText>
                  <EventName>{event.summary}</EventName>
                  <EventTime>
                    {getHumanReadableDate(
                      event.start.dateTime || event.start.date
                    )}
                  </EventTime>
                </EventText>
              </EventItem>
            );
          })}
      </EventSection>
    </EventsWrapper>
  );
};
