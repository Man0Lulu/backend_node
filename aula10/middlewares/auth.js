
function validarToken(req, res, next) {
        if(req.headers.token === '1234567') {
            next();
        }else{
            res.status(401).json({msg: 'acesso negado'})
        }
    }


module.exports = validarToken