import React, { useEffect, useState } from 'react';
import { momentLocalizer, Calendar } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { getTrainings } from '../../api';

const localizer = momentLocalizer(moment);

function CalendarPage() {
  const [events, setEvents] = useState([]);
  let eventList = [];
  let startDate, endDate;

  const handleTrainings = async () => {
    try {
      const { data } = await getTrainings();
      console.log(data);
      // eslint-disable-next-line array-callback-return
      data.map((dataInd) => {
        try {
          startDate = new Date(dataInd.date);
          endDate = new Date(dataInd.date);
          endDate.setUTCMinutes(startDate.getUTCMinutes() + dataInd.duration);
          eventList.push({
            title: dataInd.activity + '/ ' + dataInd.customer.firstname,
            start: startDate,
            end: endDate,
          });
        } catch (err) {
          console.error(err);
        }
      });
      setEvents(eventList);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleTrainings();
  }, []);

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '80vh', width: '80vw', margin: '100px auto' }}
      />
    </div>
  );
}

export default CalendarPage;
