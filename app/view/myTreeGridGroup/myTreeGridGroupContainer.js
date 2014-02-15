Ext.define('MvcSkel.view.myTreeGridGroup.myTreeGridGroupContainer',{
    extend: 'Ext.grid.Panel',
    alias: 'widget.ziziUU',
    store: Ext.create('MvcSkel.store.myTreeGridGroupStore'),
    features: [
        Ext.create('Ext.grid.feature.Grouping',{
            groupHeaderTpl: 'Cuisine: {name} ({rows.length} Item{[values.rows.length > 1 ? "s" : ""]})'
        })
    ],
    columns: [{
        text: 'Name',
        flex: 1,
        dataIndex: 'name'
    },{
        text: 'Cuisine',
        flex: 1,
        dataIndex: 'cuisine'
    }] 
});


