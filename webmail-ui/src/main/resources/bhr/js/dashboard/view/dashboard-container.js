define([
  'underscore'
  , 'backbone'
  , 'jquery'
  ,'handlebars'
  ,'dashboard/collection/dashboard-collection'
  ,'dashboard/view/dashboard-nav'
  ,'dashboard/view/dashboard-body'
  
], function (_, Backbone, $,handlebars,collection,DashboardNav,DashboardBody) {
     ContainerView = Backbone.View.extend({
         el:"#dashboard-body-container",
        initialize: function(){
            console.log("dashboard-container is loaded");
			//$('body').append('<h1>test1 View is loaded</h1>');
			var that = this;
			GLOBALVAR.holidays = collection.fetchData('getAllUsers');
			GLOBALVAR.holidays.done(function(data){
		GLOBALVAR.holidays = data;
		that.render();
		if(GLOBALVAR.holidays == null|| '')
		that.render();
		});
			
        },
		
		render: function(){
		console.log("dashboard-container :: rendering loading");
		DashboardBody.render();
		this.$el.find('.box-in').append('<div id="dashboard-nav-dashboard"></div>');
		DashboardNav.render();
		
		
		return this;
		}
    });
return new ContainerView();
});
