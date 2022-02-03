function estimatePI(n = parseInt(prompt("Input Number of Tries: "))){
    let inside_circle = 0;
    let total = 0;
    let diff = 0;

    console.log("Estimating PI...");

    for(let i=0;i<n;i++){
        // console.log(i);
        total = total+1;
        let x = Math.random();
        let y = Math.random();
        // let x = 1;
        // let y = 1;

        if ((x**2 + y**2) <= 1){
            inside_circle = inside_circle+1;
        }
        // console.log(x);
        // console.log(y);
        // console.log(inside_circle);
    }

    console.log("Estimated PI is",(4*inside_circle/(total)));
    console.log("Difference with PI is", (4*inside_circle/(total))-Math.PI)
}