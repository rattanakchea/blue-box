var app = app || {};

$(function () {


    var itemModel = new app.RentalItem({
        title: "Mocking Bird",
        description: "Jennifer and Mocking Bird"
    });

    var itemView = new app.ItemView({model: itemModel});

});