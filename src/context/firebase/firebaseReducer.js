
import {ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER, FETCH_ARCHIVE, COMPLETE_NOTE, CLEAR_ARCHIVE} from '../types'

const handlers = {
  [SHOW_LOADER]: state => ({...state, loading: true}),
  [ADD_NOTE]: (state, {payload}) => ({
    ...state,
    notes: [...state.notes, payload]
  }),
  [FETCH_NOTES]: (state, {payload}) => ({...state, notes: payload, loading: false}),
  [FETCH_ARCHIVE]: (state, {payload}) => ({...state, archiveNotes: payload, loading: false}),
  [REMOVE_NOTE]: (state, {payload}) => ({
    ...state,
    notes: state.notes.filter(note => note.id !== payload)
  }),
  [COMPLETE_NOTE]: (state, {payload}) => ({
    ...state,
    archiveNotes: [...state.archiveNotes, payload],
  }),
  [CLEAR_ARCHIVE]: (state, {payload}) => ({...state, archiveNotes: payload}),
  DEFAULT: state => state
}

export const firebaseReducer = (state, action) => {
  const handle = handlers[action.type] || handlers.DEFAULT
  return handle(state, action)
}