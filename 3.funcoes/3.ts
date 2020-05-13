(function() {

    function sub(a: number, b?:number, c?:number):number {
        return a - b - c;
    }

    console.log(sub(1)); // 1 - undefined - undefined
    console.log(sub(1,2)); // 1 - 2 - undefined
    console.log(sub(1,2,3)); // 1 - 2 - 3 

})();