let n= parseInt(prompt('enter the number:'));
let cube;
function cubeOFnumber(n){
    for(let i=1;i<=n;i++){
        cube=(i*i*i);
        console.log(cube);
    }
    
}
cubeOFnumber(n)