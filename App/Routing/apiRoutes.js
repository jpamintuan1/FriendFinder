// Grab the URL of the website
	    	var currentURL = window.location.origin;

	    	// AJAX post the data to the friends API. 
	    	$.post(currentURL + "/api/friends", userData, function(data){

	    		// Grab the result from the AJAX post so that the best match's name and photo are displayed.
	    		$("#matchName").text(data.name);
	    		$('#matchImg').attr("src", data.photo);

		    	// Show the modal with the best match 
		    	$("#resultsModal").modal('toggle');

	    	});
		}
		else
		{
			alert("Please fill out all fields before submitting!");
		}
    	
    	return false;
    };
