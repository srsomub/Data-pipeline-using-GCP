function transform(line) {
    var values = line.split(',');
    var obj = new Object();
    obj.trip_distance_id = values[0];
    obj.trip_distance = values[1]; 

    var jsonString = JSON.stringify(obj);
    return jsonString;
   } 