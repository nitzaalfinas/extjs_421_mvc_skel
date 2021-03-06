Ext.define('MvcSkel.view.myTreeGridPanel.myTreeGridPanel',{
    extend: 'Ext.tree.Panel',
    itemId: 'myTreeGridPanelItemId',
    title: 'Tree Grid Panel',
    layout: {
        type: 'fit'
    },
    fields: ['name', 'description'],
    columns: [
        {
            xtype: 'treecolumn',
            text: 'Name',
            dataIndex: 'name',
            width: 150,
            sortable: true
        }, 
        {
            text: 'Description',
            dataIndex: 'description',
            flex: 1,
            sortable: true
        }
    ],
    root: {
        name: 'Root',
        description: 'Root description',
        expanded: true,
        children: [
            {
                name: 'Child 1',
                description: 'Description 1',
                leaf: true
            }, 
            {
                name: 'Child 2',
                description: 'Description 2',
                //leaf: true,
                //expanded: true,
                children: [
                    {
                        name: 'Child 2.1',
                        description: 'Testing',
                        leaf: true
                    }
                ]
            }
        ]
    }
});


