Ext.define('MvcSkel.view.myGridPanelA.myGridPanelA',{
    extend: 'Ext.tree.Panel',
    itemId: 'myGridPanelAItemId',
    title: 'Grid Panel A',
    closable: true,
    store: 'myGridStoreA',
    columns: [
        {
            xtype: 'treecolumn',
            text: 'ID',
            dataIndex: 'id'
        },
        {
            text: 'Name',
            dataIndex: 'name',
            flex: 1
        }
    ]
});