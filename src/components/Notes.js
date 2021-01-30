import React, { useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import moment from "moment";

const Notes = ({ notes, onRemove, onMoveToArchive }) => {
  const alert = useContext(AlertContext)


  return (
    <TransitionGroup component="ul" className="list-group">
      {notes.map((note) => (
        <CSSTransition 
          key={note.id}
          classNames={'note'}
          timeout={500}
        >
          <li className="list-group-item note">
            <div>
              <strong>{note.title}</strong>
              <small>{moment(note.date).format(`DD.MM.YYYY   HH:mm`)}</small>
            </div>

            <button 
              type="button" 
              className="btn btn-outline-success brt-sm"
              onClick={() => {
                onMoveToArchive(note)
                alert.show('Заметка перенесена в архив', 'success')
              }}
            >
              &#10004;
            </button>
            <button 
              type="button" 
              className="btn btn-outline-danger brt-sm"
              onClick={() => onRemove(note.id)}
            >
              &#10008;
            </button>
          </li> 
        </CSSTransition>
      ))}
    </TransitionGroup>
  )
}

export default Notes
