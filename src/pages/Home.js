import React, { useContext, useEffect } from 'react';
import Form from '../components/Form';
import Loader from '../components/Loader';
import Notes from '../components/Notes';
import Alert from '../components/Alert';
import { FirebaseContext } from '../context/firebase/firebaseContext';

const Home = () => {
  const {loading, notes, fetchNotes, removeNote, completeNote} = useContext(FirebaseContext)

  useEffect(() => {
    fetchNotes()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Alert />
      <Form />

      <hr/>

      {loading
        ? <Loader />
        : <Notes notes={notes} onRemove={removeNote} onMoveToArchive={completeNote} />
      }
    </>
  )
}

export default Home
