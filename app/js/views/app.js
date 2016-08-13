'use strict';

var app = app || {};

app.AppView = Backbone.View.extend({

    el: '#todoapp',

    // Our template for the line of statistics at the bottom of the app.
    template: _.template($('#stats-template').html()),

    // New
    // Delegated events for creating new items, and clearing completed ones.
    events: {
        'keypress #new-todo': 'createOnEnter',
        'click #clear-completed': 'clearCompleted',
        'click #toggle-all': 'toggleAllComplete'
    },

    // New
    // If you hit return in the main input field, create new Todo model,
    // persisting it to localStorage.
    createOnEnter: function(event) {
    	console.log(this);
        if (event.which !== ENTER_KEY ) {
            return;
        }

        app.Todos.create(this.newAttributes());
        this.$input.val('');
    }


});

var ENTER_KEY = 13;
//init the view
var view = new app.AppView();
