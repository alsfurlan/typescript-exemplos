(function() {

    enum DiasSemana {
        SEG,
        TER,
        QUA,
        QUI,
        SEX,
        SAB,
        DOM
    }

    let dia: DiasSemana;
    console.log(dia);
    console.log(DiasSemana);    

    dia = DiasSemana.SEG;
    console.log(dia);
    console.log(dia === DiasSemana.SEG);
})();