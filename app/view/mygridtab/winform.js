Ext.define('MvcSkel.view.mygridtab.winform',{
    extend: 'Ext.window.Window',
    alias: 'widget.gridTabWinForm',
    title: 'Form Edit',
    width: 300,
    height: 200,
    bodyPadding: 20,
    items: [
        {
            xtype: 'form',
            url: 'data/mygridstore/save.php',
            border: false,
            defaultType: 'textfield',
            items: [
                {
                    fieldLabel: 'Province',
                    name: 'province'
                },
                {
                    fieldLabel: 'District',
                    name: 'district'
                }
            ],
            buttons: [
                {
                    text: 'Reset',
                    handler: function() {
                        this.up('form').getForm().reset();
                    }
                },
                {
                    text: 'Submit',
                    handler: function() {
                        var form = this.up('form').getForm();
                        if(form.isValid()) {
                            form.submit({
                                success: function(form, action) {
                                    Ext.Msg.alert('Success', action.result.msg);
                                    //this.up('window').close();
                                },
                                failure: function(form, action) {
                                    Ext.Msg.alert('Failed', action.result.msg);
                                }
                            });
                        }
                    }
                }
            ]
        }
    ]
});


