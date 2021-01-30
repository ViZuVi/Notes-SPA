import React, {useReducer} from 'react';
import axios from 'axios';
import {FirebaseContext} from './firebaseContext';
import {firebaseReducer} from './firebaseReducer';
import {ADD_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER, FETCH_ARCHIVE, COMPLETE_NOTE, CLEAR_ARCHIVE} from '../types';

const url = process.env.REACT_APP_DB_URL

export const FirebaseState = ({children}) => {
  const initialState = {
    notes: [],
    archiveNotes: [],
    loading: false
  }
  const [state, dispatch] = useReducer(firebaseReducer, initialState)

  const showLoader = () => dispatch({type: SHOW_LOADER})

  const fetchNotes = async () => {
    showLoader();
    const res = await axios.get(`${url}/notes.json`)

    const payload = Object.keys(res.data || {}).map(key => {
      return {
        ...res.data[key],
        id: key
      }
    })

    dispatch({type: FETCH_NOTES, payload})
  }

  const fetchArchive = async () => {
    showLoader();
    const res = await axios.get(`${url}/archive.json`)
    
    const payload = Object.keys(res.data || {}).map(key => {
      return {
        ...res.data[key],
        id: key
      }
    })

    dispatch({type: FETCH_ARCHIVE, payload})
  }

  const addNote = async title => {
    const note = {
      title, date: new Date().toJSON()
    }

    try {
      const res = await axios.post(`${url}/notes.json`, note)
      const payload = {
        ...note,
        id: res.data.name
      }

      dispatch({type: ADD_NOTE, payload})

    } catch (e) {
      throw new Error(e.message)
    }
  }

  const removeNote = async id => {
    await axios.delete(`${url}/notes/${id}.json`)

    dispatch({
      type: REMOVE_NOTE,
      payload: id
    })
  }

  const completeNote = async note => {
    const res = await axios.post(`${url}/archive.json`, note)

    const payload = {
      ...note,
      id: res.data.name
    }

    await axios.delete(`${url}/notes/${note.id}.json`)

    dispatch({type: COMPLETE_NOTE, payload})
    dispatch({
      type: REMOVE_NOTE,
      payload: note.id
    })
  }

  const clearArchive = async () => {
    await axios.delete(`${url}/archive.json`)

    dispatch({
      type: CLEAR_ARCHIVE,
      payload: []
    })
  }

  return (
    <FirebaseContext.Provider value={{
      showLoader, addNote, removeNote, fetchArchive, fetchNotes, completeNote, clearArchive,
      loading: state.loading,
      notes: state.notes,
      archiveNotes: state.archiveNotes,
    }}>
      {children}
    </FirebaseContext.Provider>
  )
}