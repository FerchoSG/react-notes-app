import React, { useState, useEffect } from 'react';
import { db } from '../../firebase';

const Form = ({addOrEditNote, currentId, setCurrentId}) => {
    const initialStateValues = {titulo: '', categoria: '', descripcion: ''}
    const [note, setNote] = useState(initialStateValues);

    function handleSubmit(e){
        e.preventDefault();
        addOrEditNote(note);
        setNote({...initialStateValues});
        e.target.reset();
    }

    function handleInputValue(e){
        const {name, value} = e.target;
        setNote({...note, [name]: value});
    }
    const getNoteById = async id => {
        const doc = await db.collection('notes').doc(id).get();
        setNote({...doc.data()})
    }
    useEffect(()=>{
        if(currentId === ''){
            setNote({...initialStateValues})
        }else{ 
           getNoteById(currentId)
        }
        // eslint-disable-next-line
    }, [currentId])

    return (
        <div className="container mt-2 mb-2">
            <form className=" card bg-light" onSubmit={handleSubmit} >
                <h4 className="card-header mb-2">Ingrese una nota</h4>
                <div className="p-2">
                    <div className="form-group">
                        <label htmlFor="titulo" className="float-left">Titulo: </label>
                        <input type="text" name="titulo" onChange={handleInputValue} 
                        className="form-control" placeholder="Ingrese un titulo" value={note.titulo} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="categoria"></label>
                        <select className="form-control" name="categoria" 
                        value={note.categoria} onChange={handleInputValue}>
                            <option>Elige una categoria</option>
                            <option value="hogar">Hogar</option>
                            <option value="trabajo">Trabajo</option>
                            <option value="Estudios">Estudios</option>
                            <option value="Ocio">Ocio</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="descripcion" className="float-left">Descripción: </label>
                        <textarea name="descripcion" placeholder="Describe tu nota" 
                        value={note.descripcion}
                        className="form-control" onChange={handleInputValue}></textarea>
                    </div>
                    <button className={`btn btn-block btn-${currentId === '' ? 'success' : 'warning'} 
                    p-2 d-flex align-items-center justify-content-center`}>
                    <span className="mr-3">
                        {currentId === '' ? 'Agregar' : 'Editar'}
                    </span>
                    <i className="material-icons">{currentId === '' ? 'add' : 'create'}</i>
                    </button>
                    { currentId !== '' ?
                        <button className={`btn btn-block btn-info 
                        p-2 d-flex align-items-center justify-content-center`}
                        onClick={()=> setCurrentId('')} >
                        <span className="mr-3">
                            Cancelar
                        </span>
                        <i className="material-icons">clear</i>
                        </button>
                        :''
                    }
                </div>
            </form>
        </div>
    );
}

export default Form;