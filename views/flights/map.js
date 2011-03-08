function(doc) {
	var date = new Date(parseInt(doc.schedule_time) + 4*3600000);	
	var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getDate();
	var date2 = new Date();		
	var time2 = date2.getHours() + ":" + date2.getMinutes() + ":" + date2.getDate();
	
	if ((date.getHours()-date2.getHours()) < 1) {	
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
				//doc.airline, 
				//doc.belt,
				time,
				time2,
				//new Date(),
				doc.airport,
				doc.status
			]
		);
	}	
}

