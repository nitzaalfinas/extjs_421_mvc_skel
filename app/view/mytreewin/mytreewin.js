Ext.define('MvcSkel.view.mytreewin.mytreewin',{
    extend: 'Ext.window.Window',
    title: 'Testing Window',
    items: [
        {
            xtype: 'form',
            url: 'save.php',
            // The fields
            defaultType: 'textfield',
            items: [
                {
                    fieldLabel: 'First Name',
                    name: 'first',
                    allowBlank: false
                },
                {
                    fieldLabel: 'Last Name',
                    name: 'last',
                    allowBlank: false
                }
            ]
        }
    ]
        
    
});


