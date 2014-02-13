Ext.define('MvcSkel.controller.mainController', {
    extend: 'Ext.app.Controller',
    
    
    addDashboard: function() {
        // define/create the dashboard panel
        var dashboardPanel = Ext.create('Ext.panel.Panel',{
            title: 'Dashboard',
            itemId: 'dashboardPanel'
        });
        
        // define main tab
        var mainTab = Ext.getCmp('myTabPanel');
        
        // define the child tab
        var dashboardChildTab = mainTab.child('#dashboardPanel');
        
        // if dashboard already in mainTab, just set it active
        if(dashboardChildTab) {
            mainTab.setActiveTab(dashboardPanel);
        }
        // else... means if the dashboardChildTab is not there, add it to mainTab and set it to active
        else {
            mainTab.add(dashboardPanel);
            mainTab.setActiveTab(dashboardPanel);
        }
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
