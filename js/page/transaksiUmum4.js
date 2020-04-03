define(['jquery', 'main', 'axios', 'crud', 'helper'], function($, main, axios, crud, helper) {

  const transaksiUmum3 = {}

  transaksiUmum3.view = async function() {
    await helper.createLocalData('data_pembelian_barang', 'get-data');

    await helper.template('html/transaksi4.html');

    let dataTypeTransaksi = helper.decryptG(helper.sesiGet('data-type-transaksi-umum'));

    console.log(dataTypeTransaksi);

    crud.set("data_pembelian_barang",{
      key: "id",
      headname: ['No', 'Barang', 'Pajak PPN Masukan', 'Jumlah', 'Harga Satuan', 'Harga Total'],
      table: ['id', 'barang_id', 'pajak_ppn_masukan', 'jml', 'harga_satuan', 'harga_total'],
      form: ["no", 'select', 'text', 'text', 'text', 'text'],
      filter: {
        key: "transaksi_pembelian_barang_id",
        value: dataTypeTransaksi.id
      },
      dataSend: {
        transaksi_pembelian_barang_id: dataTypeTransaksi.id
      },
      listData: [
        null,
        {
          id: 'id',
          nama: 'nama_barang',
          table: 'data_barang'
        },
        null,
        null,
        null,
        null
      ],
      width: ["50px", "", "", "", "", ""],
      domp: 'crud'
    })

    crud.view("data_pembelian_barang");

  }

  return transaksiUmum3;

})
