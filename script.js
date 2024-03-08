let a=['olma','burger','lavash','pizza']


let d= confirm(a);



if(d==true) {
   a.pop('pizza')
   console.log(a);
   alert(a)
}
else if(d==false) {
   console.log(a);
   alert(a)
}