const Router = require('express');
const { validarJWT } = require('../middlewares/validar-jwt');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { getEventos, crearEvento, actualizarEvento, borrarEvento } = require('../controller/eventos');
const { isDate } = require('../helpers/isDate');

const router = Router();

router.use( validarJWT );

//obtener eventos
router.get('/', getEventos)

//crear evento
router.post('/',[
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatorio').custom( isDate ),
    check('end', 'Fecha de finalizacion es obligatorio').custom( isDate ),
    validarCampos
], crearEvento)

//actualizar evento
router.put('/:id',[
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('start', 'Fecha de inicio es obligatorio').custom( isDate ),
    check('end', 'Fecha de finalizacion es obligatorio').custom( isDate ),
    validarCampos
],  actualizarEvento)

//borrar evento
router.delete('/:id',  borrarEvento)

module.exports = router;