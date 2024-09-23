// api/events
const  Evento  = require('../models/Evento');
const response = require('express');

const getEventos  = async(req, res = response)=>{
    const eventos = await Evento.find()
        .populate('user', 'name');

    res.json({
        ok: true,
        message: 'Peticion obtener eventos',
        eventos,
    });

}

const crearEvento = async(req, res = response)=>{

    console.log(req.body);
    try {
        let evento = new Evento(req.body);
        evento.user = req.uid;
        evento = await evento.save();
        res.json({
            ok: true,
            message: 'Peticion crear evento',
            evento
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            message: 'Error en el servidor',
        })
        
    }

}

const actualizarEvento = async(req, res = response)=>{
    const  id  = req.params.id;
    console.log(id);
    try {
        const evento = await Evento.findById(id);
        if(! evento ){
            return res.status(404).json({
                ok: false,
                message: 'El evento no existe',
                id,
            });
        };

        if( evento.user.toString() !== req.uid ){
            return res.status(401).json({
                ok: false,
                message: 'No tiene privilegios para editar este evento',
            });
        }

        const nuevoEvento = {
            ...req.body,
            user: req.uid
        }

        const eventoActualizado = 
            await Evento.findByIdAndUpdate( id, nuevoEvento, { new: true } );

        res.json({
            ok: true,
            message: 'Peticion actualizar evento',
            evento: eventoActualizado
        }) ;       
    } catch (error) {
        
        res.status(500).json({
            ok: false,
            message: 'Error en el servidor',
        });
    }

}

const borrarEvento = async(req, res = response)=>{
    const id = req.params.id;
    try {
        const evento = await Evento.findById(id);
        if(! evento ){
            return res.status(404).json({
                ok: false,
                message: 'El evento no existe',
                id,
            });
        };
        
        if( evento.user.toString() !== req.uid ){
            return res.status(401).json({
                ok: false,
                message: 'No tiene privilegios para borrar este evento',
            });
        }

        await Evento.findByIdAndDelete(id);

        res.json({
            ok: true,
            message: 'evento borrado',
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            message: 'Error en el servidor',
        })
    }

}

module.exports = {
    getEventos,
    crearEvento,
    actualizarEvento,
    borrarEvento
}