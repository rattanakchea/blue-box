var app = app || {};

app.RentalItem = Backbone.Model.extend({

    defaults: {
        image: 'img/placeholder.png',
        title: 'Some Title',
        description: 'Some Description',
        price: 1.5,
        type: 'Dvd'  //Game?

    }
})