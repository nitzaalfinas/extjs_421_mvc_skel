Ext.define('MvcSkel.view.mytreemenu.mytreemenu',{
    extend: 'Ext.tree.Panel',
    alias: 'widget.mytreemenu',
    store: 'myTreeStore',
    border: false,
    listeners: {
        itemclick: function(s,r) {
            alert(r.data.text);
        }
    }
    
});