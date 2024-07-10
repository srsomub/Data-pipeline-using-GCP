function transform(line) {
    var values = line.split(',');
    var obj = new Object();
    obj.rate_code_id = values[0];
    obj.RatecodeID = values[1];
    obj.rate_code_name = values[2]; 

    var jsonString = JSON.stringify(obj);
    return jsonString;
   } 