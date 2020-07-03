import React from 'react';
import './Note.css'

const index = ({note, onDeleteNote, setCurrentId}) => {
    return (
        <div>
            <div className="card mb-2">
                <h5 className="card-header"> {note.titulo} </h5>
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted "> {note.categoria} </h6>
                    <p className="card-text"> {note.descripcion} </p>
                    <div className="d-flex justify-content-around">
                    <button className="btn btn-danger mr-1 d-flex align-items-center justify-content-center"
                    onClick={()=> onDeleteNote(note.id)}>
                        <i className="material-icons">delete_outline</i>
                        <span className="ml-2">Eliminar</span>
                    </button>
                    <button className="btn btn-warning d-flex align-items-center justify-content-center"
                    onClick={()=> setCurrentId(note.id)}>
                        <i className="material-icons">create</i>
                        <span className="ml-2">Editar</span>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default index;