import React from 'react';
import Ticket from './Ticket';

const masterTicketList = [
  {
    names: 'Chris and Philip',
    location: '3A',
    issue: 'Computer is on fire!'
  },
  {
    names: 'Sleater and Kinney',
    location: '4B',
    issue: 'Fox image not displaying on page, can only see duck?'
  },
  {
    names: 'Imani & Jacob',
    location: '9F',
    issue: 'Donkey picture not displaying on hover in Zoology app. :('
  }
];

function TicketList() {
  return(
    <div>
      <hr/>
      {masterTicketList.map((ticket, index) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index} />
      )}
    </div>
  );
}

export default TicketList;
