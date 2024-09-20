import { addHours } from "date-fns";
import { act, useEffect, useMemo, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import Modal from "react-modal";

import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";

import Swal from "sweetalert2";
import  'sweetalert2/dist/sweetalert2.all.min.js'
import { swal } from "sweetalert2/dist/sweetalert2.all.min.js";
import { useCalendarStore, useUiStore } from "../../hooks";

registerLocale("es", es);

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

export const CalendarModal = () => {
    const  { activeEvent, startSavingEvent } = useCalendarStore()

    //   const [isOpen, setIsOpen] = useState(true);
      const [formSubmitted, setFormSubmitted] = useState(false);

        const[formValues, setFormValues] =   useState({
            title: '',
            notes: '',
            start: new Date(),
            end: addHours( new Date(),2),
        });

        const titleClass = useMemo(() => {
            if(!formSubmitted) return '';

            return (formValues.title.length > 0) ? 'is-valid' : 'is-invalid';

        }, [formValues.title, formSubmitted]);

        useEffect(() => {
            if(activeEvent !== null) {
                setFormValues({...activeEvent})
            }
        }, [activeEvent]);
        const onInputChange = (e) => {
            setFormValues({
                ...formValues,
                [e.target.name]: e.target.value
            })
        }

        const onDateChange = (e, changing) => {
            setFormValues({
                ...formValues,
                [changing]: e
            })
        }
                

      Modal.setAppElement('#root');

      const { isDateModalOpen, closeDateModal } = useUiStore();
      const onCloseModal = () => {
        //   setIsOpen(false);
        closeDateModal();
        console.log('closed');
      }

      onsubmit = async(e) => {

          setFormSubmitted(true);
          e.preventDefault();
          console.log(formValues);
          const difference = formValues.end - formValues.start;

          if(NaN === (difference) || difference <= 0) {
            Swal.fire('Error', 'la fecha fin debe ser mayor a la fecha de inicio', 'error');
              console.log('la fecha fin debe ser mayor a la fecha de inicio');
              return;
          }

          if(formValues.title.length <= 0) {
            Swal.fire('Error', 'el evento debe tener un titulo', 'error');
              console.log('el evento debe tener un titulo');
              return;
          }

          await startSavingEvent( formValues );
        //   setIsOpen(false);
          console.log('saved');
          closeDateModal();

      }

    return (
        <Modal
        isOpen={ isDateModalOpen }
        onRequestClose={onCloseModal}
        style={customStyles}
        className="modal"
        overlayClassName="modal-fondo"
        closeTimeoutMS={200}
        
        >
            <h1> Nuevo evento </h1>
            <hr />
            <form className="container" onSubmit={onsubmit}>

                <div className="form-group mb-2">
                    <label>Fecha y hora inicio</label>
                    <DatePicker 
                    selected={formValues.start} 
                    onChange={ (e) => onDateChange(e, 'start') } 
                    name="start" 
                    className="form-control"
                    dateFormat="Pp"
                    showTimeSelect  
                    locale={'es'}
                    />
                </div>

                <div className="form-group mb-2">
                    <label>Fecha y hora fin</label>
                    <DatePicker 
                    minDate={formValues.start}
                    selected={formValues.end} 
                    onChange={ (e) => onDateChange(e, 'end') } 
                    name="end" 
                    className="form-control"
                    dateFormat="Pp"
                    showTimeSelect
                    locale={'es'} 
                    />
                </div>

                <hr />
                <div className="form-group mb-2">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className={`form-control ${titleClass}`}
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={formValues.title}
                        onChange={ onInputChange }
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group mb-2">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        autoComplete="off"
                        value={formValues.notes}
                        onChange={ onInputChange }
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}