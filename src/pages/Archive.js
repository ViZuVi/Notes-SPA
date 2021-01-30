import React, { useContext, useEffect } from 'react';
import ArchiveNotes from '../components/ArchiveNotes';
import Loader from '../components/Loader';
import { FirebaseContext } from '../context/firebase/firebaseContext';

const Archive = () => {
  const { loading, fetchArchive, archiveNotes, clearArchive } = useContext(FirebaseContext)
  

  useEffect(() => {
    fetchArchive()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {loading ? <Loader /> : <ArchiveNotes archiveNotes={archiveNotes} />}
      {archiveNotes.length ? 
        <button 
          style={{width: '100%'}} 
          type="button" 
          className="btn btn-outline-danger brt-sm mt-5" 
          onClick={() => clearArchive()}>Очистить архив</button>
          : <h1 className="text-secondary text-center">Архив пуст</h1>
      }
        
    </>  
  )
}

export default Archive
