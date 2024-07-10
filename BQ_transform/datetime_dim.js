function transform(line) {
    var values = line.split(',');
    var obj = new Object();
    obj.datetime_id = values[0];
    obj.tpep_pickup_datetime = values[1];
    obj.pick_hour = values[2];
    obj.pick_day = values[3];
    obj.pick_month = values[4];

    obj.pick_year = values[5];
    obj.pick_weekday = values[6];
    obj.tpep_dropoff_datetime = values[7];
    obj.drop_hour = values[8];
    obj.drop_day = values[9];

    obj.drop_month = values[10];
    obj.drop_year = values[11];
    obj.drop_weekday = values[12]; 

    var jsonString = JSON.stringify(obj);
    return jsonString;
   } 