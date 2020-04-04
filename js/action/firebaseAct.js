define(['jquery', 'helper', 'select2', '@firebase/app', '@firebase/auth', '@firebase/database'], function($, helper, select2, firebase){


let formdata = [];

function formIsi(a, b){
  let getData = formdata.filter((item) => {
    if (item.nama === a) {
      return item;
    }
  })[0];

  if (getData === undefined) {
    formdata.push({
      nama: a,
      data: {
        nama: "gugus"
      }
    })
  }else{
  }

}

formIsi('formA')
formIsi('formB')

console.log(formdata);





});
