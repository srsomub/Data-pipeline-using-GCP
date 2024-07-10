function transform(line) {
    var values = line.split(',');
    var obj = new Object();
    obj.pickup_location_id = values[0];
    obj.pickup_latitude = values[1];
    obj.pickup_longitude = values[2]; 

    var jsonString = JSON.stringify(obj);
    return jsonString;
   } 