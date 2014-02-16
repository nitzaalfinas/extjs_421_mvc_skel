Ext.define('MvcSkel.view.mainView', {
    extend: 'Ext.container.Viewport',
    alias: 'widget.mainView',

    
    layout: {
        type: 'fit'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    layout: {
                        type: 'border'
                    },
                    defaults: {
                        split: true
                    },
                    items: [
                        {
                            xtype: 'panel',
                            region: 'north',
                            title: 'Your application title',
                            id: 'Header'
                        },
                        {
                            xtype: 'panel',
                            region: 'center',
                            title: 'Center Region',
                            id: 'wrapContent',
                            autoScroll: true,
                            layout: {
                                type: 'fit'
                            },
                            items: [
                                {
                                    xtype: 'tabpanel',
                                    id: 'myTabPanel',
                                    border: true
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            region: 'west',
                            frame: true,
                            margin: '0 5 0 0',
                            width: 200,
                            layout: {
                                type: 'accordion'
                            },
                            collapsible: true,
                            title: 'Menu',
                            items: [
                                {
                                    xtype: 'panel',
                                    layout: {
                                        align: 'stretch',
                                        type: 'vbox'
                                    },
                                    bodyPadding: 5,
                                    title: 'Menu with button',
                                    items: [
                                        {
                                            //if you want to know how it works, just take a look at mainController
                                            xtype: 'button',
                                            id: 'menuDashboard', 
                                            margin: '0 0 5 0',
                                            text: 'Dashboard',
                                            textAlign: 'left'
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'menuGrid',
                                            margin: '0 0 5 0',
                                            text: 'Grid',
                                            textAlign: 'left'
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'menuTreeGrid',
                                            margin: '0 0 5 0',
                                            text: 'Tree Grid',
                                            textAlign: 'left'
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'menuTreeGridAa',
                                            margin: '0 0 5 0',
                                            text: 'Tree Grid A',
                                            textAlign: 'left'
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'menuTreeGridGroup',
                                            margin: '0 0 5 0',
                                            text: 'Tree Grid Grouping',
                                            textAlign: 'left',
                                            handler: function() {
                                                var thePanel = Ext.create('MvcSkel.view.myTreeGridGroup.myTreeGridGroup');
                                                
                                                var theChildTab = Ext.getCmp('myTabPanel').child('#childGridPanelx');
                                                
                                                if(theChildTab) {
                                                    Ext.getCmp('myTabPanel').setActiveTab(thePanel);
                                                }
                                                else {
                                                    Ext.getCmp('myTabPanel').add(thePanel);
                                                    Ext.getCmp('myTabPanel').setActiveTab(thePanel);
                                                }
                                            }
                                        }
                                        
                                    ]
                                },
                                {
                                    xtype: 'panel',
                                    layout: {
                                        align: 'stretch',
                                        type: 'vbox'
                                    },
                                    bodyPadding: 5,
                                    title: 'Tree menu',
                                    items: [
                                        {
                                            xtype: 'mytreemenu'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});