function(doc) {
	emit([doc.schedule_time, doc.airport], [doc.flight_id, doc.airport,new Date(parseInt(doc.schedule_time))]);
}


//	emit([doc.schedule_time, doc.airport], [doc.flight_id, doc.airport]);
