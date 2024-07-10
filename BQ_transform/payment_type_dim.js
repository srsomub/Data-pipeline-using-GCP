function transform(line) {
    var values = line.split(',');
    var obj = new Object();
    obj.payment_type_id = values[0];
    obj.payment_type = values[1];
    obj.payment_type_name = values[2]; 

    var jsonString = JSON.stringify(obj);
    return jsonString;
   } 