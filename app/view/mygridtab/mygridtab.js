Ext.define('MvcSkel.view.mygridtab.mygridtab',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.mygridtab',
    title: 'This is grid tab',
    itemId: 'mygridtab',
    closable: true,
    
    dockedItems: [
        {
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            displayInfo: true,
            store: 'myGridStore'
        }
    ],
    items: [
        {
            xtype: 'gridpanel',
            store: 'myGridStore',
            columns: [
                {
                    xtype: 'gridcolumn',
                    width: 40,
                    dataIndex: 'id',
                    text: 'Id'
                },
                {
                    xtype: 'gridcolumn',
                    width: 136,
                    dataIndex: 'province',
                    text: 'Province'
                },
                {
                    xtype: 'gridcolumn',
                    width: 238,
                    dataIndex: 'district',
                    text: 'District'
                }
            ]
        }
    ]    
});