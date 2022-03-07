var moment=require('moment');
var d = 09 ;
var m = 03;
var a = moment(); 
var b= a.format("YYYY");
var c = moment([b,m-1,d]);
if(c.diff(a,'days')<0){
    c.add(1,'year');
    console.log(c.diff(a,'days'))
}
else{
    console.log(c.diff(a,'days'))
}
// console.log(c.year())
// if(a.diff(b,'days'))
// console.log(a.format("YY DD MM"))
// console.log(a.diff(b,'days'))
// console.log(moment([2022,06,22]).fromNow())
