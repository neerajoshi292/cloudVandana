const sortArray=(a)=>{
    // a.sort((x,y)=> y.localeCompare(x));
    a.sort((x,y)=>y-x);
}
// const a = ["Kinley", "Bisleri", "Cyan", "Magenta"];
const a = [5,3,1,2,4];
sortArray(a);
console.log(a);