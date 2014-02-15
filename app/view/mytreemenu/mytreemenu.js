Ext.define('MvcSkel.view.mytreemenu.mytreemenu',{
    extend: 'Ext.tree.Panel',
    alias: 'widget.mytreemenu',
    store: 'myTreeStore',
    border: false,
    listeners: {
        itemclick: function(s,r) {
            //alert(r.data.text);
            var mywintree = Ext.create('MvcSkel.view.mytreewin.mytreewin',{
                extend: 'MvcSkel.view.mytreewin.mytreewin',
                title: r.data.text,
                width: 200,
                height: 100
            });
            mywintree.show();
        }
    }
    
});