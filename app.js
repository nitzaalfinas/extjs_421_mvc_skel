Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    models: [
        'myGridStoreModel',
        'myTreeGridGroupModel'
    ],
    stores: [
        'myTreeStore',
        'myGridStore',
        'myGridStoreA',
        'myTreeGridGroupStore'
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