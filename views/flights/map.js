function(doc) {
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
			doc.airport,
			doc.status,
			new Date(parseInt(doc.schedule_time))
		]);
}

