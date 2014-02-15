Ext.define('MvcSkel.model.myGridStoreAModel', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id', type: 'int'
        },
        {
            name: 'name', type: 'string'
        }
    ],
    proxy: {
        type: 'ajax',
        api: {
            read: 'data/mygridstorea/read.php'
        }
    }
});

