define(['jquery', 'main', 'helper', 'frb', '@firebase/app', '@firebase/database'], function($, main, helper, frb, firebase) {

  const dashboard = {
    view: async function() {
      if (helper.sesiGet('glearn-guru') === null) {
        location.href="#/guru/login";
      }else{
        await helper.template('html/guru/ruangkelas.html');

        // dapatkan data guru
        let dataLogin = helper.decryptG(helper.sesiGet('glearn-guru'));

        // dapatkan data ruang kelas
        firebase.database().ref('guru/kelas/'+dataLogin.username).once('value').then((value) => {
          console.log(value.val());
        })


      }
    }
  }

  return dashboard;
})
