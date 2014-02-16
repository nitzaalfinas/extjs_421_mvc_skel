Ext.define('MvcSkel.view.mygridtab.mygridtab',{
    extend: 'Ext.panel.Panel',
    alias: 'widget.mygridtab',
    title: 'This is grid tab',
    itemId: 'mygridtab',
    closable: true,
    
    requires: [
        'MvcSkel.view.mygridtab.winform'
    ],
    
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
            listeners: {
                itemdblclick: function(tablepanel, record, item, index, e, options) {
                    console.log('Double clicked on ' + record.get('id'));
                    //var view = Ext.widget('kelDesaWinEdit');
                    //view.down('form').loadRecord(record);
                    
                    var view = Ext.widget('gridTabWinForm').show();
                    
                    view.down('form').loadRecord(record);
                    
                    
                }
            },
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