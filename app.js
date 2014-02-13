Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    models: [
        
    ],
    stores: [
        
    ],
    views: [
        'mainView'
    ],
    autoCreateViewport: true,
    name: 'MvcSkel',
    controllers: [
        'mainController'
    ]
});