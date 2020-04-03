define(['jquery', 'main', 'axios', 'crud', 'helper'], function($, main, axios, crud, helper) {

  const order = {}

  order.view = async function() {
    await helper.createLocalData('pengeluaran_barang', 'get-data');
    await helper.createLocalData('form_order', 'get-data');
    await helper.createLocalData('permintaan_sj', 'get-data');
    await helper.createLocalData('permintaan_sjp', 'get-data');
    await helper.template('html/order.html');

    crud.set("form_order",{
      key: "id",
      headname: ['No', 'No Form Order', 'Tanggal', 'Vendor', 'Supplier', 'Alamat'],
      table: ['id', 'no_form_order', 'tanggal', 'vendor_id', 'supplier_id', 'alamat'],
      form: ["no", "text", "tanggal", "select", "select", "text"],
      customeButtonDataView: true,
      customeButtonViewGo: "#/order-2",
      customeButtonViewData: "data-order",
      listData: [
        null,
        null,
        null,
        {
          id: 'id',
          nama: 'nama_vendor',
          table: 'data_vendor'
        },
        {
          id: 'id',
          nama: 'nama_supplier',
          table: 'supplier'
        },
        null
      ],
      width: ["50px", "120px", "", "", "", ""],
      domp: 'crud'
    })

    crud.set("permintaan_sj",{
      key: "id",
      headname: ['No', 'No Permintaan', 'Customer', 'Up', 'No Telp', 'Tanggal'],
      table: ['id', 'no_permintaan', 'customer_id', 'up', 'telp', 'date'],
      form: ["no", "text", "select", "text", "text", "text"],
      customeButtonDataView: true,
      customeButtonViewGo: "#/permintaan_sj",
      customeButtonViewData: "permintaan_sj",
      listData: [
        null,
        null,
        {
          id: 'id',
          nama: 'nama',
          table: 'customer'
        },
        null,
        null,
        null
        // {
        //   id: 'id',
        //   nama: 'nama',
        //   table: 'akun'
        // }
      ],
      width: ["50px", "120px", "", "", "", ""],
      domp: 'crud'
    })

    crud.set("permintaan_sjp",{
      key: "id",
      headname: ['No', 'No Permintaan', 'Customer', 'Up', 'No Telp', 'Tanggal'],
      table: ['id', 'no_permintaan', 'customer_id', 'up', 'telp', 'date'],
      form: ["no", "text", "select", "text", "text", "tanggal"],
      customeButtonDataView: true,
      customeButtonViewGo: "#/permintaan_sjp",
      customeButtonViewData: "permintaan_sjp",
      listData: [
        null,
        null,
        {
          id: 'id',
          nama: 'nama',
          table: 'customer'
        },
        null,
        null,
        null
        // {
        //   id: 'id',
        //   nama: 'nama',
        //   table: 'akun'
        // }
      ],
      width: ["50px", "120px", "", "", "", ""],
      domp: 'crud'
    })

    crud.set("permintaan_sj",{
      key: "id",
      headname: ['No', 'No Permintaan', 'Customer', 'Tanggal'],
      table: ['id', 'no_permintaan', 'customer_id', 'date'],
      form: ["no", "text", "text", "tanggal"],
      customeButtonDataView: true,
      customeButtonViewGo: "#/permintaan_po_fres",
      customeButtonViewData: "permintaan_po_fres",
      listData: [
        null,
        null,
        null,
        null
        // {
        //   id: 'id',
        //   nama: 'nama',
        //   table: 'akun'
        // }
      ],
      width: ["50px", "120px", "", ""],
      domp: 'crud'
    })

    crud.set("pengeluaran_barang",{
      key: "id",
      headname: ['No', 'No Permintaan', 'Customer', 'Up', 'No Telp', 'Tanggal'],
      table: ['id', 'no_permintaan', 'customer_id', 'up', 'telp', 'date'],
      form: ["no", "text", "select", "text", "text", "tanggal"],
      customeButtonDataView: true,
      customeButtonViewGo: "#/pengeluaran_barang",
      customeButtonViewData: "pengeluaran_barang",
      listData: [
        null,
        null,
        {
          id: 'id',
          nama: 'nama',
          table: 'customer'
        },
        null,
        null,
        null
        // {
        //   id: 'id',
        //   nama: 'nama',
        //   table: 'akun'
        // }
      ],
      width: ["50px", "120px", "", "", "", ""],
      domp: 'crud'
    })

    crud.view("form_order");

  }

  return order;
})
