define(['jquery', 'main', 'helper', 'frb'], function($, main, helper, frb, firebase) {

  const dashboard = {
    view: async function() {
      if (helper.sesiGet('glearn-guru') === null) {
        location.href="#/guru/login";
      }else{
        await helper.template('html/guru/ruangkelas.html');
      }
    }
  }

  return dashboard;
})
