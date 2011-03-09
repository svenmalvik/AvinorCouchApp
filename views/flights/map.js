function(doc) {
	var date = new Date(parseInt(doc.schedule_time));	
	var time = date.getHours() + ":" + date.getMinutes();

	if (doc.belt == null) {
		doc.belt = "";
	}
	if (doc.status == null) {
		doc.status = "";
	}
	if (doc.delayed == null) {
		doc.delayed = "";
	}

	emit(	[doc.schedule_time, doc.airport], 
		[	doc.flight_id, 
			doc.airline, 
			doc.belt,
			time,
			doc.airport,
			doc.status
		]
	);	
}

