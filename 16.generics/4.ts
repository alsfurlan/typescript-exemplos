(function() {

    class Usuario {
        constructor(public login: string, public senha: string) {

        }
    }

    class Administrador extends Usuario {

    }

    class Aluno extends Usuario {

    }

    function echo(usuario) {
        return usuario;
    }

    let admin = new Administrador('admin', 'admin');
    let aluno = new Aluno('aluno10874', '10874a');

    let adm = echo(admin);
    let alu = echo(aluno);

    console.log(adm.login);
    console.log(alu.login);

})();