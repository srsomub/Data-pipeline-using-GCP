function transform(line) {
    var values = line.split(',');
    var obj = new Object();
    obj.passenger_count_id = values[0];
    obj.passenger_count = values[1]; 
    var jsonString = JSON.stringify(obj);
    return jsonString;
   } 