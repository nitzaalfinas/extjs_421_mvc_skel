Ext.define('MvcSkel.store.myGridStoreA', {
    extend: 'Ext.data.TreeStore',
    model: 'MvcSkel.model.myGridStoreAModel',
    root: {
        name: 'People',
        expanded: true
    }
});