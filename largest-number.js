var i= [12,21,3,4,50,6];
var increment = 1;
console.log(p);
for(var n=1; n<i.length; n++){
    if(i[0]<i[n]){
        i[0]=i[n];
    }
}
console.log(i[0]);
// var i= [12,21,3,4,50,6];
// var m = 0;
// var p = [0, 0];
// for (var n=1; n<=i.length; n++){
//     if(i[n]>i[m]){
//         p[0]=i[n];
//     }
//     else{
//         p[0]=i[m];
//     }
//     console.log(p[0]);
//     m++;
// }
// // console.log(p[0]);