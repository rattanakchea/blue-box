var app = app || {};

app = {
    views: {},

    models: {},

    //load template via ajax called, then run the callback
    loadTemplates: function(views, callback) {

        var self = this;
        var deferreds = [];
        $.each(views, function(index, view) {
            if (self[view]) {
                deferreds.push($.get('tpl/' + view + '.html', function(data) {
                    self[view].prototype.template = _.template(data);
                }, 'html'));
            } else {
                alert(view + " not found");
            }
        });

        $.when.apply(null, deferreds).done(callback);
    }
}



// document ready - load all js
$(function () {

    //load the template
    app.loadTemplates(['ItemView'], run);


    function run(){
        var itemModel = new app.RentalItem({
            title: "Mocking Bird",
            description: "Jennifer and Mocking Bird"
        });

        var itemView = new app.ItemView({model: itemModel});
    }


});