define(['jquery', 'main', 'helper', 'frb'], function($, main, helper, frb, firebase) {

  const dashboard = {
    view: async function() {
      await helper.template('html/guru/ruangkelas.html');
    }
  }

  return dashboard;
})
