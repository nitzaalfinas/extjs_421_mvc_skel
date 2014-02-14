Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    models: [
        
    ],
    stores: [
        'myTreeStore'
    ],
    views: [
        'mainView',
        //'mytreemenu.mytreemenu'
    ],
    autoCreateViewport: true,
    name: 'MvcSkel',
    controllers: [
        'mainController'
    ]
});