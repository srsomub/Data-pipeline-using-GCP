function transform(line) {
    var values = line.split(',');
    var obj = new Object();
    obj.trip_id = values[0];
    obj.VendorID = values[1];
    obj.datetime_id = values[2];
    obj.passenger_count_id = values[3];
    obj.trip_distance_id = values[4];

    obj.rate_code_id = values[5];
    obj.store_and_fwd_flag = values[6];
    obj.pickup_location_id = values[7];
    obj.dropoff_location_id = values[8];
    obj.payment_type_id = values[9];

    obj.fare_amount = values[10];
    obj.extra = values[11];
    obj.mta_tax = values[12];
    obj.tip_amount = values[13];

    obj.tolls_amount = values[14];
    obj.improvement_surcharge = values[15];
    obj.total_amount = values[16];    
    var jsonString = JSON.stringify(obj);
    return jsonString;
   }
 