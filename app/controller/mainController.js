Ext.define('MvcSkel.controller.mainController', {
    extend: 'Ext.app.Controller',
    
    
    addDashboard: function() {
        //this is show you how to add a child tab to the tab panel and active it if it is exist
        
        
        // define/create the dashboard panel 'on the fly'
        var dashboardPanel = Ext.create('Ext.panel.Panel',{
            title: 'Dashboard',
            itemId: 'dashboardPanel',
            closable: true
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
    
    
    
    addMyGrid: function(button,e,options) {
        
        //if you have created a panel, no need to add requires in viewport. Just Ext.create to call it. 
        //by doing this, your application will load faster
        var wowow = Ext.create('MvcSkel.view.mygridtab.mygridtab');
        
        var tabiang = Ext.getCmp('myTabPanel').child('#mygridtab');
        
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
                click: this.addMyGrid
            }
            
        });
    }

});

