Ext.define('MvcSkel.controller.mainController', {
    extend: 'Ext.app.Controller',
    
    
    addDashboard: function() {
        //
        
    },
    
    
    
    myAddTab: function(button,e,options) {
        
        var wowow = Ext.create('Ext.panel.Panel',{
                        title: 'Nu Tab',
                        itemId: 'nutab'
                    });
        
        var tabiang = Ext.getCmp('myTabPanel').child('#nutab');
        
        if(tabiang) {
            Ext.getCmp('myTabPanel').setActiveTab(wowow);
        }
        else {
            Ext.getCmp('myTabPanel').add(wowow);
            Ext.getCmp('myTabPanel').setActiveTab(wowow);
        }
    },
    

    init: function(application) {
        this.control({
            "#menuDashboard": {
                click: this.addDashboard
            },
            "#menuGrid": {
                click: this.myAddTab
            }
        });
    }

});
