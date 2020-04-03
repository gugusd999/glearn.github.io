define(['jquery', 'main', 'axios', 'crud', 'helper'], function($, main, axios, crud, helper) {
  let obj2 = {
    view: async function() {
      let data = await axios.get('html/laporan.html');
      main.html(data.data);
    }
  }

  return obj2;
})
