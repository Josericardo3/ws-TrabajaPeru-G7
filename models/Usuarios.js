
class Usuario {

    constructor(user) {
            this.us_id = user.us_id;
            this.us_celular = user.us_celular;
            this.us_correo = user.us_correo;
            this.us_departamento = user.us_departamento;
            this.us_provincia = user.us_provincia;
            this.us_distrito = user.us_distrito;
            this.us_contrasena = user.us_contrasena;
            this.us_calificacion = user.us_calificacion;
    }
}
module.exports = Usuario