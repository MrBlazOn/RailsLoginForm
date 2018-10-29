// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

//= require jquery3
//= require popper
//= require bootstrap
//= require_tree .

//= require dataTables/jquery.dataTables

//= require local-time

function checkAll(check_all) {
	var inputs = check_all.form.getElementsByTagName("input");

	for (var i = 0; i < inputs.length; i++) {
		if (inputs[i].type == "checkbox" && inputs[i].name != check_all.name) {
			if(check_all.checked == true) {
				inputs[i].checked = true ;
			} else {
				inputs[i].checked = false ;
			}
		}
	}
}