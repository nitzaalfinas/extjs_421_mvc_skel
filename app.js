Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    models: [
        'myGridStoreModel'
    ],
    stores: [
        'myTreeStore',
        'myGridStore',
        'myGridStoreA'
    ],
    views: [
        'mainView',
        'mytreemenu.mytreemenu',
        'mytreewin.mytreewin'
    ],
    autoCreateViewport: true,
    name: 'MvcSkel',
    controllers: [
        'mainController'
    ]
});