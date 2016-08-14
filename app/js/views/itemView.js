var app = app || {};

app.ItemView = Backbone.View.extend({

    //className: 'item',
    //id: 'item-view',
    el: $('#item-view'),

    template: _.template('<div><%= title %> - <%= description %></div>'),

    initialize: function(){
        this.render();
    },

    render: function(){
        console.log('render() in itemView ');
        //console.log(_);

        var attr = this.model.toJSON();
        console.log(this.$el);


        this.$el.html(this.template(attr));
    }

});