Ext.define('MvcSkel.store.myGridStore', {
    extend: 'Ext.data.Store',
    model: 'MvcSkel.model.myGridStoreModel',
    autoLoad: true,
    pageSize: 5, 
    proxy: {
        type: 'ajax',
        api: {
            read: 'data/mygridstore/read.php',
            create: 'data/mygridstore/create.php',
            update: 'data/mygridstore/update.php',
            destroy: 'data/mygridstore/delete.php'
        },
        reader: {
            type: 'json',
            root: 'data'
        },
        writer: {
            type: 'json',
            encode: true,
            root: 'data'
        }
    }
});