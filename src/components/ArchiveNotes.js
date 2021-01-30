import React from 'react';
import moment from 'moment';

const ArchiveNotes = ({ archiveNotes }) => {
  return (
    <ul className="list-group">
          {archiveNotes.map((note) => (
            <li key={note.id} className="list-group-item note text-secondary">
              <div>
                  <strong>{note.title}</strong>
                  <small>{moment(note.date).format(`DD.MM.YYYY   HH:mm`)}</small>
                </div>
            </li>
          ))}
        </ul>
  )
}

export default ArchiveNotes;
