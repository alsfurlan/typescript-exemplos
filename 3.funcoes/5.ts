(function() {

    function sub(a:number, b:number = 0, c:number = 0):number {
        return a - b - c;
    }

    console.log(sub(1));
    console.log(sub(1,2));
    console.log(sub(1,2,3));
})();