import React, { useEffect, useState } from 'react';
import Note from '../Note';
import Form from '../Form';
import {db} from '../../firebase'
import { toast } from 'react-toastify'; 
import './Notelist.css';

const NotesList = () => {
    const [notes, setNotes] = useState([]);
    const [currentId, setCurrentId] = useState('');

    const addOrEditNote = async (noteObject)=>{
        if(currentId === ''){
            await db.collection('notes').doc().set(noteObject);
            toast('Nueva nota agregada', {
                type: 'success', autoClose: 2000
            })
        }else{
            await db.collection('notes').doc(currentId).update(noteObject);
            toast('Nota actualizada exitosamente', {
                type: 'info', autoClose: 2000
            })
            setCurrentId('')
        }
    }
    const onDeleteNote = async (id) =>{
        const res = window.confirm('¿Estas seguro que deseas eliminar esta nota?');

        if(res){
            await db.collection('notes').doc(id).delete();
            toast('Nota Eliminada', {
                type: 'error', autoClose: 2000
            })
            setCurrentId('')
        }
    }
    const getNotes = ()=>{
        db.collection('notes').onSnapshot((querySnapshot)=>{
            const docs = [];
            querySnapshot.forEach(doc =>{
                docs.push({...doc.data(), id: doc.id});
            })
            setNotes(docs);
        });
    }
    useEffect(()=>{
        getNotes();
    }, [])

    return (
        <div className="mt-2 home__content ">
            <div className="container notes-list__content">
                { 
                    notes.map((note) =>
                        <Note
                            note={note} setCurrentId={setCurrentId}
                            key={note.id} onDeleteNote={onDeleteNote}/>
                    )
                }
            
            </div>

            <Form addOrEditNote={addOrEditNote} setCurrentId={setCurrentId}
            currentId={currentId} notes={notes} />
        </div>

    );
}

export default NotesList;