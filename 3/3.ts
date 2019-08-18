(function() {

    function sub(a: number, b?:number, c?:number):number {
        return a - b - c;
    }

    console.log(sub(1));
    console.log(sub(1,2));
    console.log(sub(1,2,3));

})();