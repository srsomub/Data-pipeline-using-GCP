function transform(line) {
    var values = line.split(',');
    var obj = new Object();
    
    obj.dropoff_location_id = values[0];
    obj.dropoff_latitude = values[1];
    obj.dropoff_longitude = values[2];
 
    var jsonString = JSON.stringify(obj);
    return jsonString;
   } 