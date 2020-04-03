define(['jquery', 'main', 'helper', 'frb', 'bootstrap'], function($, main, helper, frb, firebase, bootstrap) {

  const dashboard = {
    view: async function() {
      await helper.template('html/guru/ruangkelas.html');
    }
  }

  return dashboard;
})
