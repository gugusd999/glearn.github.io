define(['jquery', 'main', 'helper', 'frb', 'bootstrap'], function($, main, helper, frb, firebase,  popper, bootstrap) {

  window.Popper = popper;

  const dashboard = {
    view: async function() {
      await helper.template('html/guru/ruangkelas.html');
    }
  }

  return dashboard;
})
