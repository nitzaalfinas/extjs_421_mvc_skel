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
                            id: 'wrapContent',
                            margin: '0 0 0 5',
                            autoScroll: true,
                            layout: {
                                type: 'fit'
                            },
                            items: [
                                {
                                    xtype: 'tabpanel',
                                    id: 'myTabPanel',
                                    items: [
                                        {
                                            title: 'Panel One'
                                        },
                                        {
                                            title: 'Panel Two'
                                        }
                                    ]
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
                                    title: 'Menu Button',
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
                                    title: 'Setup',
                                    items: [
                                        {
                                            xtype: 'button',
                                            id: 'menuUserData',
                                            margin: '0 0 5 0',
                                            text: 'User',
                                            textAlign: 'left'
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
                                    title: 'Master',
                                    items: [
                                        {
                                            xtype: 'button',
                                            id: 'menuProvinsi',
                                            margin: '0 0 5 0',
                                            text: 'Provinsi',
                                            textAlign: 'left'
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'menuKabKota',
                                            margin: '0 0 5 0',
                                            text: 'Kabupaten / Kota',
                                            textAlign: 'left'
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'menuKecamatan',
                                            margin: '0 0 5 0',
                                            text: 'Kecamatan',
                                            textAlign: 'left'
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'menuKelDesa',
                                            margin: '0 0 5 0',
                                            text: 'Kelurahan / Desa',
                                            textAlign: 'left'
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
                                    title: 'Pelayanan',
                                    items: [
                                        {
                                            xtype: 'button',
                                            id: 'menuPerizinan',
                                            margin: '0 0 5 0',
                                            text: 'Perizinan',
                                            textAlign: 'left'
                                        },
                                        {
                                            xtype: 'button',
                                            id: 'menuNonPerizinan',
                                            margin: '0 0 5 0',
                                            text: 'Non Perizinan',
                                            textAlign: 'left'
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