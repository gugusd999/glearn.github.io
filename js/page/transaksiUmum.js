define(['jquery', 'main', 'helper'], function($, main, helper) {
  const transaksiUmum = {}


  transaksiUmum.dateTransaksi = function(){

    let date = new Date();

    helper.sesiNew('tahun', date.getFullYear());

  }

  transaksiUmum.view = async function() {
    await this.dateTransaksi()
    await helper.createLocalData('debit_kredit', 'get-data');
    await helper.template('html/transaksi.html');
  }

  return transaksiUmum;
})
