var setData = {}   ////// MANDATORY OBJECT

function letterToColumn(letter){  ////// MANDATORY HELPER FUNCTION
  var column = 0, length = letter.length;
  for (var i = 0; i < length; i++)
  {
    column += (letter.charCodeAt(i) - 64) * Math.pow(26, length - i - 1);
  }
  return column;
}


///////////////////////////////////////////////////////////////////////////////////////
function whenDateNotEqualToAny(dateArr, rng, col, targetCol = 0){
  if(Object.prototype.toString.call(dateArr).substring(8,13)!="Array"){
    Logger.log("Object is not an array");
    return;
  }
  var trueType = true;
  dateArr.forEach(function(item){
    if (Object.prototype.toString.call(item).substring(8,12)!="Date"){
      trueType = false;
    }
  });
  if (typeof col == "number" && trueType == true){
    setData.col = col;
    setData.dateArr = dateArr;
  }
  else{
    return;
  }
  var output = rng.filter(wdneta);
  if(targetCol == 0){
    return output;
  }
  else if(typeof targetCol == "number"){
    var result = output.map(function (item) {
      return item[targetCol-1];
    });
    return result;
  }
  else if(typeof targetCol == "string"){
    var targetnum = letterToColumn(targetCol);
    var result = output.map(function (item) {
      return item[targetnum-1];
    });
    return result;
  }
  else{
    return;
  }
}

function wdneta(ar){
  var res = false;
  var dateArr = setData.dateArr;
  var col = setData.col - 1;
  if (Object.prototype.toString.call(ar[col]).substring(8,12)=="Date"){
    var date2Days = Math.floor(ar[col].getTime()/86400000);
  }
  else{
    return false;
  }
  dateArr.forEach(function(item){
    if(date2Days != Math.floor(item.getTime()/86400000) && Object.prototype.toString.call(item).substring(8,12)=="Date"){
      res = true;
    }});
  return res;
}

///////////////////////////////////////////////////////////////////////////////////////

function whenDateEqualToAny(dateArr, rng, col, targetCol = 0){
  if(Object.prototype.toString.call(dateArr).substring(8,13)!="Array"){
    Logger.log("Object is not an array");
    return;
  }
  var trueType = true;
  dateArr.forEach(function(item){
    if (Object.prototype.toString.call(item).substring(8,12)!="Date"){
      trueType = false;
    }
  });
  if (typeof col == "number" && trueType == true){
    setData.col = col;
    setData.dateArr = dateArr;
  }
  else{
    return;
  }
  var output = rng.filter(wdeta);
  if(targetCol == 0){
    return output;
  }
  else if(typeof targetCol == "number"){
    var result = output.map(function (item) {
      return item[targetCol-1];
    });
    return result;
  }
  else if(typeof targetCol == "string"){
    var targetnum = letterToColumn(targetCol);
    var result = output.map(function (item) {
      return item[targetnum-1];
    });
    return result;
  }
  else{
    return;
  }
}

function wdeta(ar){
  var res = false;
  var dateArr = setData.dateArr;
  var col = setData.col - 1;
  if (Object.prototype.toString.call(ar[col]).substring(8,12)=="Date"){
    var date2Days = Math.floor(ar[col].getTime()/86400000);
  }
  else{
    return false;
  }
  dateArr.forEach(function(item){
    if(date2Days == Math.floor(item.getTime()/86400000) && Object.prototype.toString.call(item).substring(8,12)=="Date"){
      res = true;
    }});
  return res;
}

///////////////////////////////////////////////////////////////////////////////////////

function whenDateNotEqualTo(date, rng, col, targetCol = 0){
  if (typeof col == "number" && Object.prototype.toString.call(date).substring(8,12)=="Date"){
    setData.col = col;
    setData.date = date;
  }
  else{
    return;
  }
  var output = rng.filter(wdnet);
  if(targetCol == 0){
    return output;
  }
  else if(typeof targetCol == "number"){
    var result = output.map(function (item) {
      return item[targetCol-1];
    });
    return result;
  }
  else if(typeof targetCol == "string"){
    var targetnum = letterToColumn(targetCol);
    var result = output.map(function (item) {
      return item[targetnum-1];
    });
    return result;
  }
  else{
    return;
  }
}

function wdnet(ar){
  var date = setData.date;
  var col = setData.col - 1;
  if (Object.prototype.toString.call(date).substring(8,12)=="Date"){
    var date1Days = Math.floor(date.getTime()/86400000);
  }
  else{
    return false;
  }
  if (Object.prototype.toString.call(ar[col]).substring(8,12)=="Date"){
    var date2Days = Math.floor(ar[col].getTime()/86400000);
  }
  else{
    return false;
  }

  return date1Days != date2Days;
}

///////////////////////////////////////////////////////////////////////////////////////

function whenDateEqualTo(date, rng, col, targetCol = 0){
  if (typeof col == "number" && Object.prototype.toString.call(date).substring(8,12)=="Date"){
    setData.col = col;
    setData.date = date;
  }
  else{
    return;
  }
  var output = rng.filter(wdet);
  if(targetCol == 0){
    return output;
  }
  else if(typeof targetCol == "number"){
    var result = output.map(function (item) {
      return item[targetCol-1];
    });
    return result;
  }
  else if(typeof targetCol == "string"){
    var targetnum = letterToColumn(targetCol);
    var result = output.map(function (item) {
      return item[targetnum-1];
    });
    return result;
  }
  else{
    return;
  }
}

function wdet(ar){
  var date = setData.date;
  var col = setData.col - 1;
  if (Object.prototype.toString.call(date).substring(8,12)=="Date"){
    var date1Days = Math.floor(date.getTime()/86400000);
  }
  else{
    return false;
  }
  if (Object.prototype.toString.call(ar[col]).substring(8,12)=="Date"){
    var date2Days = Math.floor(ar[col].getTime()/86400000);
  }
  else{
    return false;
  }

  return date1Days === date2Days;
}

///////////////////////////////////////////////////////////////////////////////////////

function whenDateBefore(date, rng, col, targetCol = 0){
  if (typeof col == "number" && Object.prototype.toString.call(date).substring(8,12)=="Date"){
    setData.col = col;
    setData.date = date;
  }
  else{
    return;
  }
  var output = rng.filter(wdb);
  if(targetCol == 0){
    return output;
  }
  else if(typeof targetCol == "number"){
    var result = output.map(function (item) {
      return item[targetCol-1];
    });
    return result;
  }
  else if(typeof targetCol == "string"){
    var targetnum = letterToColumn(targetCol);
    var result = output.map(function (item) {
      return item[targetnum-1];
    });
    return result;
  }
  else{
    return;
  }
}

function wdb(ar){    ////////////////// https://bobbyhadz.com/blog/javascript-compare-dates-without-time
  var date = setData.date;
  var col = setData.col - 1;
  if (Object.prototype.toString.call(date).substring(8,12)=="Date"){
    var date1Days = new Date(date.getTime());
    date1Days.setUTCHours(0, 0, 0, 0);
  }
  else{
    return false;
  }
  if (Object.prototype.toString.call(ar[col]).substring(8,12)=="Date"){
    var date2Days = new Date(ar[col].getTime());
    date2Days.setUTCHours(0, 0, 0, 0);
  }
  else{
    return false;
  }

  return date1Days > date2Days;
}

///////////////////////////////////////////////////////////////////////////////////////

function whenDateAfter(date, rng, col, targetCol = 0){
  if (typeof col == "number" && Object.prototype.toString.call(date).substring(8,12)=="Date"){
    setData.col = col;
    setData.date = date;
  }
  else{
    return;
  }
  var output = rng.filter(wda);
  if(targetCol == 0){
    return output;
  }
  else if(typeof targetCol == "number"){
    var result = output.map(function (item) {
      return item[targetCol-1];
    });
    return result;
  }
  else if(typeof targetCol == "string"){
    var targetnum = letterToColumn(targetCol);
    var result = output.map(function (item) {
      return item[targetnum-1];
    });
    return result;
  }
  else{
    return;
  }
}

function wda(ar){
  var date = setData.date;
  var col = setData.col - 1;
  if (Object.prototype.toString.call(date).substring(8,12)=="Date"){
    var date1Days = new Date(date.getTime());
    date1Days.setUTCHours(0, 0, 0, 0);
  }
  else{
    return false;
  }
  if (Object.prototype.toString.call(ar[col]).substring(8,12)=="Date"){
    var date2Days = new Date(ar[col].getTime());
    date2Days.setUTCHours(0, 0, 0, 0);
  }
  else{
    return false;
  }

  return date1Days < date2Days;
}

///////////////////////////////////////////////////////////////////////////////////////

function whenNumberNotBetween(start, end, rng, col, targetCol = 0){
  if (typeof col == "number" && typeof start == "number" && typeof end == "number"){
    setData.col = col;
    setData.num = start;
    setData.num_end = end;
  }
  else{
    return;
  }
  var output = rng.filter(wnnb);
  if(targetCol == 0){
    return output;
  }
  else if(typeof targetCol == "number"){
    var result = output.map(function (item) {
      return item[targetCol-1];
    });
    return result;
  }
  else if(typeof targetCol == "string"){
    var targetnum = letterToColumn(targetCol);
    var result = output.map(function (item) {
      return item[targetnum-1];
    });
    return result;
  }
  else{
    return;
  }
}

function wnnb(ar){
  var start = setData.num;
  var end = setData.num_end;
  var col = setData.col - 1;
  var between_condition = ar[col] > end || ar[col] < start;
  return between_condition && typeof ar[col]=="number";
}

///////////////////////////////////////////////////////////////////////////////////////

function whenNumberBetween(start, end, rng, col, targetCol = 0){
  if (typeof col == "number" && typeof start == "number" && typeof end == "number"){
    setData.col = col;
    setData.num = start;
    setData.num_end = end;
  }
  else{
    return;
  }
  var output = rng.filter(wnb);
  if(targetCol == 0){
    return output;
  }
  else if(typeof targetCol == "number"){
    var result = output.map(function (item) {
      return item[targetCol-1];
    });
    return result;
  }
  else if(typeof targetCol == "string"){
    var targetnum = letterToColumn(targetCol);
    var result = output.map(function (item) {
      return item[targetnum-1];
    });
    return result;
  }
  else{
    return;
  }
}

function wnb(ar){
  var start = setData.num;
  var end = setData.num_end;
  var col = setData.col - 1;
  var between_condition = ar[col] <= end && ar[col] >= start;
  return between_condition && typeof ar[col]=="number";
}

///////////////////////////////////////////////////////////////////////////////////////

function whenTrimmedCellEmpty(rng, col, targetCol = 0){
  if (typeof col == "number"){
    setData.col = col;
  }
  else{
    return;
  }
  var output = rng.filter(wtce);
  if(targetCol == 0){
    return output;
  }
  else if(typeof targetCol == "number"){
    var result = output.map(function (item) {
      return item[targetCol-1];
    });
    return result;
  }
  else if(typeof targetCol == "string"){
    var targetnum = letterToColumn(targetCol);
    var result = output.map(function (item) {
      return item[targetnum-1];
    });
    return result;
  }
  else{
    return;
  }
}

function wtce(ar){
  var col = setData.col - 1;
  return ar[col].toString().trim() == "";
}

///////////////////////////////////////////////////////////////////////////////////////

function whenCellNotEmpty(rng, col, targetCol = 0){
  if (typeof col == "number"){
    setData.col = col;
  }
  else{
    return;
  }
  var output = rng.filter(wcne);
  if(targetCol == 0){
    return output;
  }
  else if(typeof targetCol == "number"){
    var result = output.map(function (item) {
      return item[targetCol-1];
    });
    return result;
  }
  else if(typeof targetCol == "string"){
    var targetnum = letterToColumn(targetCol);
    var result = output.map(function (item) {
      return item[targetnum-1];
    });
    return result;
  }
  else{
    return;
  }
}

function wcne(ar){
  var col = setData.col - 1;
  return ar[col] != "";
}

///////////////////////////////////////////////////////////////////////////////////////

function whenCellEmpty(rng, col, targetCol = 0){
  if (typeof col == "number"){
    setData.col = col;
  }
  else{
    return;
  }
  var output = rng.filter(wce);
  if(targetCol == 0){
    return output;
  }
  else if(typeof targetCol == "number"){
    var result = output.map(function (item) {
      return item[targetCol-1];
    });
    return result;
  }
  else if(typeof targetCol == "string"){
    var targetnum = letterToColumn(targetCol);
    var result = output.map(function (item) {
      return item[targetnum-1];
    });
    return result;
  }
  else{
    return;
  }
}

function wce(ar){
  var col = setData.col - 1;
  return ar[col] == "";
}

///////////////////////////////////////////////////////////////////////////////////////---------------------------------

function whenTrimmedTextEndsWith(txt, rng, col, targetCol = 0){
  if (typeof col == "number" && typeof txt == "string"){
    setData.col = col;
    setData.txt = txt;
  }
  else{
    return;
  }
  var output = rng.filter(wtew);
  if(targetCol == 0){
    return output;
  }
  else if(typeof targetCol == "number"){
    var result = output.map(function (item) {
      return item[targetCol-1];
    });
    return result;
  }
  else if(typeof targetCol == "string"){
    var targetnum = letterToColumn(targetCol);
    var result = output.map(function (item) {
      return item[targetnum-1];
    });
    return result;
  }
  else{
    return;
  }
}

function wttew(ar){
  var txt = setData.txt;
  var col = setData.col - 1;
  var str =  ar[col].toString().trim();
  return str.endsWith(txt);
}

///////////////////////////////////////////////////////////////////////////////////////

function whenTextEndsWith(txt, rng, col, targetCol = 0){
  if (typeof col == "number" && typeof txt == "string"){
    setData.col = col;
    setData.txt = txt;
  }
  else{
    return;
  }
  var output = rng.filter(wtew);
  if(targetCol == 0){
    return output;
  }
  else if(typeof targetCol == "number"){
    var result = output.map(function (item) {
      return item[targetCol-1];
    });
    return result;
  }
  else if(typeof targetCol == "string"){
    var targetnum = letterToColumn(targetCol);
    var result = output.map(function (item) {
      return item[targetnum-1];
    });
    return result;
  }
  else{
    return;
  }
}

function wtew(ar){
  var txt = setData.txt;
  var col = setData.col - 1;
  var str =  ar[col].toString();
  return str.endsWith(txt);
}

///////////////////////////////////////////////////////////////////////////////////////

function whenTextStartsWith(txt, rng, col, targetCol = 0){
  if (typeof col == "number" && typeof txt == "string"){
    setData.col = col;
    setData.txt = txt;
  }
  else{
    return;
  }
  var output = rng.filter(wtsw);
  if(targetCol == 0){
    return output;
  }
  else if(typeof targetCol == "number"){
    var result = output.map(function (item) {
      return item[targetCol-1];
    });
    return result;
  }
  else if(typeof targetCol == "string"){
    var targetnum = letterToColumn(targetCol);
    var result = output.map(function (item) {
      return item[targetnum-1];
    });
    return result;
  }
  else{
    return;
  }
}

function wtsw(ar){
  var txt = setData.txt;
  var col = setData.col - 1;
  var str =  ar[col].toString();
  return str.startsWith(txt);
}

///////////////////////////////////////////////////////////////////////////////////////

function whenTextDoesNotContain(txt, rng, col, targetCol = 0){
  if (typeof col == "number" && typeof txt == "string"){
    setData.col = col;
    setData.txt = txt;
  }
  else{
    return;
  }
  var output = rng.filter(wtdnc);
  if(targetCol == 0){
    return output;
  }
  else if(typeof targetCol == "number"){
    var result = output.map(function (item) {
      return item[targetCol-1];
    });
    return result;
  }
  else if(typeof targetCol == "string"){
    var targetnum = letterToColumn(targetCol);
    var result = output.map(function (item) {
      return item[targetnum-1];
    });
    return result;
  }
  else{
    return;
  }
}

function wtdnc(ar){
  var txt = setData.txt;
  var col = setData.col - 1;
  var str =  ar[col].toString();
  return !str.includes(txt);
}

///////////////////////////////////////////////////////////////////////////////////////

function whenTextContains(txt, rng, col, targetCol = 0){
  if (typeof col == "number" && typeof txt == "string"){
    setData.col = col;
    setData.txt = txt;
  }
  else{
    return;
  }
  var output = rng.filter(wtc);
  if(targetCol == 0){
    return output;
  }
  else if(typeof targetCol == "number"){
    var result = output.map(function (item) {
      return item[targetCol-1];
    });
    return result;
  }
  else if(typeof targetCol == "string"){
    var targetnum = letterToColumn(targetCol);
    var result = output.map(function (item) {
      return item[targetnum-1];
    });
    return result;
  }
  else{
    return;
  }
}

function wtc(ar){
  var txt = setData.txt;
  var col = setData.col - 1;
  var str =  ar[col].toString();
  return str.includes(txt);
}

///////////////////////////////////////////////////////////////////////////////////////

function whenTextNotEqualTo(txt, rng, col, targetCol = 0){
  if (typeof col == "number" && typeof txt == "string"){
    setData.col = col;
    setData.txt = txt;
  }
  else{
    return;
  }
  var output = rng.filter(wtnet);
  if(targetCol == 0){
    return output;
  }
  else if(typeof targetCol == "number"){
    var result = output.map(function (item) {
      return item[targetCol-1];
    });
    return result;
  }
  else if(typeof targetCol == "string"){
    var targetnum = letterToColumn(targetCol);
    var result = output.map(function (item) {
      return item[targetnum-1];
    });
    return result;
  }
  else{
    return;
  }
}

function wtnet(ar){
  var txt = setData.txt;
  var col = setData.col - 1;
  return ar[col] != txt;
}

///////////////////////////////////////////////////////////////////////////////////////

function whenTextEqualTo(txt, rng, col, targetCol = 0){
  if (typeof col == "number" && typeof txt == "string"){
    setData.col = col;
    setData.txt = txt;
  }
  else{
    return;
  }
  var output = rng.filter(wtet);
  if(targetCol == 0){
    return output;
  }
  else if(typeof targetCol == "number"){
    var result = output.map(function (item) {
      return item[targetCol-1];
    });
    return result;
  }
  else if(typeof targetCol == "string"){
    var targetnum = letterToColumn(targetCol);
    var result = output.map(function (item) {
      return item[targetnum-1];
    });
    return result;
  }
  else{
    return;
  }
}

function wtet(ar){
  var txt = setData.txt;
  var col = setData.col - 1;
  return ar[col] == txt;
}

///////////////////////////////////////////////////////////////////////////////////////

function whenTextEqualToAny(textArr, rng, col, targetCol = 0){
  if(Object.prototype.toString.call(textArr).substring(8,13)!="Array"){
    Logger.log("Object is not an array");
    return;
  }
  var trueType = true;
  textArr.forEach(function(item){
    if (typeof item != "string"){
      trueType = false;
    }
  });
  if (typeof col == "number" && trueType == true){
    setData.col = col;
    setData.txtArr = textArr;
  }
  else{
    return;
  }
  var output = rng.filter(wteta);
  if(targetCol == 0){
    return output;
  }
  else if(typeof targetCol == "number"){
    var result = output.map(function (item) {
      return item[targetCol-1];
    });
    return result;
  }
  else if(typeof targetCol == "string"){
    var targetnum = letterToColumn(targetCol);
    var result = output.map(function (item) {
      return item[targetnum-1];
    });
    return result;
  }
  else{
    return;
  }
}

function wteta(ar){
  var res = false;
  var txtArr = setData.txtArr;
  var col = setData.col - 1;
  txtArr.forEach(function(item){
    if(ar[col] == item && typeof ar[col] == "string"){
      res = true;
    }});
  return res;
}

///////////////////////////////////////////////////////////////////////////////////////

function whenTextNotEqualToAny(textArr, rng, col, targetCol = 0){
  if(Object.prototype.toString.call(textArr).substring(8,13)!="Array"){
    Logger.log("Object is not an array");
    return;
  }
  var trueType = true;
  textArr.forEach(function(item){
    if (typeof item != "string"){
      trueType = false;
    }
  });

  if (typeof col == "number" && trueType == true){
    setData.col = col;
    setData.txtArr = textArr;
  }
  else{
    return;
  }
  var output = rng.filter(wtneta);
  if(targetCol == 0){
    return output;
  }
  else if(typeof targetCol == "number"){
    var result = output.map(function (item) {
      return item[targetCol-1];
    });
    return result;
  }
  else if(typeof targetCol == "string"){
    var targetnum = letterToColumn(targetCol);
    var result = output.map(function (item) {
      return item[targetnum-1];
    });
    return result;
  }
  else{
    return;
  }
}

function wtneta(ar){
  var res = true;
  var txtArr = setData.txtArr;
  var col = setData.col - 1;
  txtArr.forEach(function(item){
    if(ar[col] == item || typeof ar[col] != "string"){
      res = false;
    }});
  return res;
}

///////////////////////////////////////////////////////////////////////////////////////

function whenNumberLessThan(number, rng, col, targetCol = 0){
  if (typeof col == "number" && typeof number == "number"){
    setData.col = col;
    setData.num = number;
  }
  else{
    return;
  }
  var output = rng.filter(wnlt);
  if(targetCol == 0){
    return output;
  }
  else if(typeof targetCol == "number"){
    var result = output.map(function (item) {
      return item[targetCol-1];
    });
    return result;
  }
  else if(typeof targetCol == "string"){
    var targetnum = letterToColumn(targetCol);
    var result = output.map(function (item) {
      return item[targetnum-1];
    });
    return result;
  }
  else{
    return;
  }
}

function wnlt(ar){
  var num = setData.num;
  var col = setData.col - 1;
  return ar[col] < num && typeof ar[col]=="number";
}

///////////////////////////////////////////////////////////////////////////////////////

function whenNumberGreaterThan(number, rng, col, targetCol = 0){
  if (typeof col == "number" && typeof number == "number"){
    setData.col = col;
    setData.num = number;
  }
  else{
    return;
  }
  var output = rng.filter(wngt);
  if(targetCol == 0){
    return output;
  }
  else if(typeof targetCol == "number"){
    var result = output.map(function (item) {
      return item[targetCol-1];
    });
    return result;
  }
  else if(typeof targetCol == "string"){
    var targetnum = letterToColumn(targetCol);
    var result = output.map(function (item) {
      return item[targetnum-1];
    });
    return result;
  }
  else{
    return;
  }
}

function wngt(ar){
  var num = setData.num;
  var col = setData.col - 1;
  return ar[col] > num && typeof ar[col]=="number";
}

///////////////////////////////////////////////////////////////////////////////////////

function whenNumberGreaterThanOrEqualTo(number, rng, col, targetCol = 0){
  if (typeof col == "number" && typeof number == "number"){
    setData.col = col;
    setData.num = number;
  }
  else{
    return;
  }
  var output = rng.filter(wngtoet);
  if(targetCol == 0){
    return output;
  }
  else if(typeof targetCol == "number"){
    var result = output.map(function (item) {
      return item[targetCol-1];
    });
    return result;
  }
  else if(typeof targetCol == "string"){
    var targetnum = letterToColumn(targetCol);
    var result = output.map(function (item) {
      return item[targetnum-1];
    });
    return result;
  }
  else{
    return;
  }
}

function wngtoet(ar){
  var num = setData.num;
  var col = setData.col - 1;
  return ar[col] >= num && typeof ar[col]=="number";
}

///////////////////////////////////////////////////////////////////////////////////////

function whenNumberNotEqualToAny(numberArr, rng, col, targetCol = 0){
  if(Object.prototype.toString.call(numberArr).substring(8,13)!="Array"){
    Logger.log("Object is not an array");
    return;
  }
  var trueType = true;
  numberArr.forEach(function(item){
    if (typeof item != "number"){
      trueType = false;
    }
  });
  if (typeof col == "number" && trueType == true){
    setData.col = col;
    setData.numArr = numberArr;
  }
  else{
    return;
  }
  var output = rng.filter(wnneta);
  if(targetCol == 0){
    return output;
  }
  else if(typeof targetCol == "number"){
    var result = output.map(function (item) {
      return item[targetCol-1];
    });
    return result;
  }
  else if(typeof targetCol == "string"){
    var targetnum = letterToColumn(targetCol);
    var result = output.map(function (item) {
      return item[targetnum-1];
    });
    return result;
  }
  else{
    return;
  }
}

function wnneta(ar){
  var res = true;
  var numArr = setData.numArr;
  var col = setData.col - 1;
  numArr.forEach(function(item){
    if(ar[col] == item || typeof ar[col] != "number"){
      res = false;
    }});
  return res;
}

///////////////////////////////////////////////////////////////////////////////////////

function whenNumberEqualToAny(numberArr, rng, col, targetCol = 0){
  if(Object.prototype.toString.call(numberArr).substring(8,13)!="Array"){
    Logger.log("Object is not an array");
    return;
  }
  var trueType = true;
  numberArr.forEach(function(item){
    if (typeof item != "number"){
      trueType = false;
    }
  });
  if (typeof col == "number" && trueType == true){
    setData.col = col;
    setData.numArr = numberArr;
  }
  else{
    return;
  }
  var output = rng.filter(wneta);
  if(targetCol == 0){
    return output;
  }
  else if(typeof targetCol == "number"){
    var result = output.map(function (item) {
      return item[targetCol-1];
    });
    return result;
  }
  else if(typeof targetCol == "string"){
    var targetnum = letterToColumn(targetCol);
    var result = output.map(function (item) {
      return item[targetnum-1];
    });
    return result;
  }
  else{
    return;
  }
}

function wneta(ar){
  var res = false;
  var numArr = setData.numArr;
  var col = setData.col - 1;
  numArr.forEach(function(item){
    if(ar[col] == item){
      res = true;
    }});
  return res;
}

///////////////////////////////////////////////////////////////////////////////////////

function whenNumberLessThanOrEqualTo(number, rng, col, targetCol = 0){
  if (typeof col == "number" && typeof number == "number"){
    setData.col = col;
    setData.num = number;
  }
  else{
    return;
  }
  var output = rng.filter(wnltoet);
  if(targetCol == 0){
    return output;
  }
  else if(typeof targetCol == "number"){
    var result = output.map(function (item) {
      return item[targetCol-1];
    });
    return result;
  }
  else if(typeof targetCol == "string"){
    var targetnum = letterToColumn(targetCol);
    var result = output.map(function (item) {
      return item[targetnum-1];
    });
    return result;
  }
  else{
    return;
  }
}

function wnltoet(ar){
  var num = setData.num;
  var col = setData.col - 1;
  return ar[col] <= num && typeof ar[col]=="number";
}

///////////////////////////////////////////////////////////////////////////////////////

function whenNumberNotEqualTo(number, rng, col, targetCol = 0){
  if (typeof col == "number" && typeof number == "number"){
    setData.col = col;
    setData.num = number;
  }
  else{
    return;
  }
  var output = rng.filter(wnnet);
  if(targetCol == 0){
    return output;
  }
  else if(typeof targetCol == "number"){
    var result = output.map(function (item) {
      return item[targetCol-1];
    });
    return result;
  }
  else if(typeof targetCol == "string"){
    var targetnum = letterToColumn(targetCol);
    var result = output.map(function (item) {
      return item[targetnum-1];
    });
    return result;
  }
  else{
    return;
  }
}

function wnnet(ar){
  var num = setData.num;
  var col = setData.col - 1;
  return ar[col] != num;
}

///////////////////////////////////////////////////////////////////////////////////////

function whenNumberEqualTo(number, rng, col, targetCol = 0){
  if (typeof col == "number" && typeof number == "number"){
    setData.col = col;
    setData.num = number;
  }
  else{
    return;
  }
  var output = rng.filter(wnet);
  if(targetCol == 0){
    return output;
  }
  else if(typeof targetCol == "number"){
    var result = output.map(function (item) {
      return item[targetCol-1];
    });
    return result;
  }
  else if(typeof targetCol == "string"){
    var targetnum = letterToColumn(targetCol);
    var result = output.map(function (item) {
      return item[targetnum-1];
    });
    return result;
  }
  else{
    return;
  }
}

function wnet(ar){
  var num = setData.num;
  var col = setData.col - 1;
  return ar[col] == num;
}

///////////////////////////////////////////////////////////////////////////////////////

function rowsWhereNumberEqualToAny(numberArr, rng, col){
  var output = [];
  if(Object.prototype.toString.call(numberArr).substring(8,13)!="Array"){
    Logger.log("Object is not an array");
    return;
  }
  var trueType = true;
  numberArr.forEach(function(item){
    if (typeof item != "number"){
      trueType = false;
    }
  });
  if (typeof col == "number" && trueType == true){
    for (var i = 0; i < rng.length; i++ ){
      numberArr.forEach(function(item){
      if(rng[i][col-1] == item && typeof rng[i][col-1] == "number"){
        output.push(i+1);
      }});
    }
  }
  else{
    return;
  }
  var output2 = output.filter((item, index) => output.indexOf(item) === index);
  return output2;
} 

function rowsWhereNumberNotEqualToAny(numberArr, rng, col){
  var output = Array.from(Array(rng.length+1).keys()).slice(1);
  var output2 = [];
  var output3 = [];
  if(Object.prototype.toString.call(numberArr).substring(8,13)!="Array"){
    Logger.log("Object is not an array");
    return;
  }
  var trueType = true;
  numberArr.forEach(function(item){
    if (typeof item != "number"){
      trueType = false;
    }
  });
  if (typeof col == "number" && trueType == true){
    for (var i = 0; i < rng.length; i++ ){
      numberArr.forEach(function(item){
      if(rng[i][col-1] == item || typeof rng[i][col-1] != "number"){
        output2.push(i+1);
      }});
    }
  }
  else{
    return;
  }
  output.forEach(function(item){
    if (!output2.includes(item)){
      output3.push(item);
    }
  });
  return output3;
}

function rowsWhereTextEqualToAny(textArr, rng, col){
  var output = [];
  if(Object.prototype.toString.call(textArr).substring(8,13)!="Array"){
    Logger.log("Object is not an array");
    return;
  }
  var trueType = true;
  textArr.forEach(function(item){
    if (typeof item != "string"){
      trueType = false;
    }
  });
  if (typeof col == "number" && trueType == true){
    for (var i = 0; i < rng.length; i++ ){
      textArr.forEach(function(item){
      if(rng[i][col-1] == item && typeof rng[i][col-1] == "string"){
        output.push(i+1);
      }});
    }
  }
  else{
    return;
  }
  var output2 = output.filter((item, index) => output.indexOf(item) === index);
  return output2;
}

function rowsWhereTextNotEqualToAny(textArr, rng, col){
  var output = Array.from(Array(rng.length+1).keys()).slice(1);
  var output2 = [];
  var output3 = [];
  if(Object.prototype.toString.call(textArr).substring(8,13)!="Array"){
    Logger.log("Object is not an array");
    return;
  }
  var trueType = true;
  textArr.forEach(function(item){
    if (typeof item != "string"){
      trueType = false;
    }
  });
  if (typeof col == "number" && trueType == true){
    for (var i = 0; i < rng.length; i++ ){
      textArr.forEach(function(item){
      if(rng[i][col-1] == item || typeof rng[i][col-1] != "string"){
        output2.push(i+1);
      }});
    }
  }
  else{
    return;
  }
  output.forEach(function(item){
    if (!output2.includes(item)){
      output3.push(item);
    }
  });
  return output3;
}

function rowsWhereDateNotEqualToAny(dateArr, rng, col){
  var output = [];
  if(Object.prototype.toString.call(dateArr).substring(8,13)!="Array"){
    Logger.log("Object is not an array");
    return;
  }
  var trueType = true;
  dateArr.forEach(function(item){
    if (Object.prototype.toString.call(item).substring(8,12)!="Date"){
      trueType = false;
    }
  });
  if (typeof col == "number" && trueType == true){
    for (var i = 0; i < rng.length; i++ ){
      if (Object.prototype.toString.call(rng[i][col-1]).substring(8,12)=="Date"){
        var date2Days = Math.floor(rng[i][col-1].getTime()/86400000);
        dateArr.forEach(function(item){
          if(date2Days != Math.floor(item.getTime()/86400000) && Object.prototype.toString.call(item).substring(8,12)=="Date"){
            output.push(i+1);
          }});
      }
      else{
        continue;
      }
    }
  }
  else{
    return;
  }
  var output2 = output.filter((item, index) => output.indexOf(item) === index);
  return output2;
}

function rowsWhereDateEqualToAny(dateArr, rng, col){
  var output = [];
  if(Object.prototype.toString.call(dateArr).substring(8,13)!="Array"){
    Logger.log("Object is not an array");
    return;
  }
  var trueType = true;
  dateArr.forEach(function(item){
    if (Object.prototype.toString.call(item).substring(8,12)!="Date"){
      trueType = false;
    }
  });
  if (typeof col == "number" && trueType == true){
    for (var i = 0; i < rng.length; i++ ){
      if (Object.prototype.toString.call(rng[i][col-1]).substring(8,12)=="Date"){
        var date2Days = Math.floor(rng[i][col-1].getTime()/86400000);
        dateArr.forEach(function(item){
          if(date2Days == Math.floor(item.getTime()/86400000) && Object.prototype.toString.call(item).substring(8,12)=="Date"){
            output.push(i+1);
          }});
      }
      else{
        continue;
      }
    }
  }
  else{
    return;
  }
  var output2 = output.filter((item, index) => output.indexOf(item) === index);
  return output2;
}

function rowsWhereDateAfter(date, rng, col){
  var output = [];
  if (typeof col == "number" && Object.prototype.toString.call(date).substring(8,12)=="Date"){
    var date1Days = Math.floor(date.getTime()/86400000);
    for (var i = 0; i < rng.length; i++ ){
      if (Object.prototype.toString.call(rng[i][col-1]).substring(8,12)=="Date"){
        var date2Days = Math.floor(rng[i][col-1].getTime()/86400000);
        if (date1Days < date2Days){
          output.push(i+1);
        }
      }
      else{
        continue;
      }
    }
  }
  else{
    return;
  }
  return output;
}

function rowsWhereDateBefore(date, rng, col){
  var output = [];
  if (typeof col == "number" && Object.prototype.toString.call(date).substring(8,12)=="Date"){
    var date1Days = Math.floor(date.getTime()/86400000);
    for (var i = 0; i < rng.length; i++ ){
      if (Object.prototype.toString.call(rng[i][col-1]).substring(8,12)=="Date"){
        var date2Days = Math.floor(rng[i][col-1].getTime()/86400000);
        if (date1Days > date2Days){
          output.push(i+1);
        }
      }
      else{
        continue;
      }
    }
  }
  else{
    return;
  }
  return output;
}

function rowsWhereDateEqualTo(date, rng, col){
  var output = [];
  if (typeof col == "number" && Object.prototype.toString.call(date).substring(8,12)=="Date"){
    var date1Days = Math.floor(date.getTime()/86400000);
    for (var i = 0; i < rng.length; i++ ){
      if (Object.prototype.toString.call(rng[i][col-1]).substring(8,12)=="Date"){
        var date2Days = Math.floor(rng[i][col-1].getTime()/86400000);
        if (date1Days == date2Days){
          output.push(i+1);
        }
      }
      else{
        continue;
      }
    }
  }
  else{
    return;
  }
  return output;
}

function rowsWhereDateNotEqualTo(date, rng, col){
  var output = [];
  if (typeof col == "number" && Object.prototype.toString.call(date).substring(8,12)=="Date"){
    var date1Days = Math.floor(date.getTime()/86400000);
    for (var i = 0; i < rng.length; i++ ){
      if (Object.prototype.toString.call(rng[i][col-1]).substring(8,12)=="Date"){
        var date2Days = Math.floor(rng[i][col-1].getTime()/86400000);
        if (date1Days != date2Days){
          output.push(i+1);
        }
      }
      else{
        continue;
      }
    }
  }
  else{
    return;
  }
  return output;
}

function rowsWhereTrimmedCellEmpty(rng, col){
  var output = [];
  var str;
  if (typeof col == "number"){
    for (var i = 0; i < rng.length; i++ ){
      str =  rng[i][col-1].toString().trim();
      if (str == ""){
        output.push(i+1);
      }
    }
  }
  else{
    return;
  }
  return output;
}

function rowsWhereCellNotEmpty(rng, col){
  var output = [];
  if (typeof col == "number"){
    for (var i = 0; i < rng.length; i++ ){
      if (rng[i][col-1] != ""){
        output.push(i+1);
      }
    }
  }
  else{
    return;
  }
  return output;
}

function rowsWhereCellEmpty(rng, col){
  var output = [];
  if (typeof col == "number"){
    for (var i = 0; i < rng.length; i++ ){
      if (rng[i][col-1] == ""){
        output.push(i+1);
      }
    }
  }
  else{
    return;
  }
  return output;
}

function rowsWhereTrimmedTextEndsWith(txt, rng, col){
  var output = [];
  var str;
  if (typeof col == "number" && typeof txt == "string"){
    for (var i = 0; i < rng.length; i++ ){
      str =  rng[i][col-1].toString().trim();
      if (str.endsWith(txt)){
        output.push(i+1);
      }
    }
  }
  else{
    return;
  }
  return output;
}

function rowsWhereTextEndsWith(txt, rng, col){
  var output = [];
  var str;
  if (typeof col == "number" && typeof txt == "string"){
    for (var i = 0; i < rng.length; i++ ){
      str =  rng[i][col-1].toString();
      if (str.endsWith(txt)){
        output.push(i+1);
      }
    }
  }
  else{
    return;
  }
  return output;
}

function rowsWhereTextStartsWith(txt, rng, col){
  var output = [];
  var str;
  if (typeof col == "number" && typeof txt == "string"){
    for (var i = 0; i < rng.length; i++ ){
      str =  rng[i][col-1].toString();
      if (str.startsWith(txt)){
        output.push(i+1);
      }
    }
  }
  else{
    return;
  }
  return output;
}

function rowsWhereTextDoesNotContain(txt, rng, col){
  var output = [];
  var str;
  if (typeof col == "number" && typeof txt == "string"){
    for (var i = 0; i < rng.length; i++ ){
      str =  rng[i][col-1].toString();
      if (!str.includes(txt)){
        output.push(i+1);
      }
    }
  }
  else{
    return;
  }
  return output;
}

function rowsWhereTextContains(txt, rng, col){
  var output = [];
  var str;
  if (typeof col == "number" && typeof txt == "string"){
    for (var i = 0; i < rng.length; i++ ){
      str =  rng[i][col-1].toString();
      if (str.includes(txt)){
        output.push(i+1);
      }
    }
  }
  else{
    return;
  }
  return output;
}

function rowsWhereTextNotEqualTo(txt, rng, col){
  var output = [];
  if (typeof col == "number" && typeof txt == "string"){
    for (var i = 0; i < rng.length; i++ ){
      if (rng[i][col-1]!=txt){
        output.push(i+1);
      }
    }
  }
  else{
    return;
  }
  return output;
}

function rowsWhereTextEqualTo(txt, rng, col){
  var output = [];
  if (typeof col == "number" && typeof txt == "string"){
    for (var i = 0; i < rng.length; i++ ){
      if (rng[i][col-1]==txt){
        output.push(i+1);
      }
    }
  }
  else{
    return;
  }
  return output;
}

function rowsWhereNumberBetween(start, end, rng, col){
  var output = [];
  if (typeof col == "number" && typeof start == "number" && typeof end == "number"){
    for (var i = 0; i < rng.length; i++ ){
      var between_condition = rng[i][col-1] <= end && rng[i][col-1] >= start;
      if (between_condition && typeof rng[i][col-1]=="number"){
        output.push(i+1);
      }
    }
  }
  else{
    return;
  }
  return output;
}

function rowsWhereNumberNotBetween(start, end, rng, col){
  var output = [];
  if (typeof col == "number" && typeof start == "number" && typeof end == "number"){
    for (var i = 0; i < rng.length; i++ ){
      var between_condition = rng[i][col-1] > end || rng[i][col-1] < start;
      if (between_condition && typeof rng[i][col-1]=="number"){
        output.push(i+1);
      }
    }
  }
  else{
    return;
  }
  return output;
}

function rowsWhereNumberGreaterThanOrEqualTo(number, rng, col){
  var output = [];
  if (typeof col == "number" && typeof number == "number"){
    for (var i = 0; i < rng.length; i++ ){
      if (rng[i][col-1]>=number && typeof rng[i][col-1]=="number"){
        output.push(i+1);
      }
    }
  }
  else{
    return;
  }
  return output;
}

function rowsWhereNumberGreaterThan(number, rng, col){
  var output = [];
  if (typeof col == "number" && typeof number == "number"){
    for (var i = 0; i < rng.length; i++ ){
      if (rng[i][col-1]>number && typeof rng[i][col-1]=="number"){
        output.push(i+1);
      }
    }
  }
  else{
    return;
  }
  return output;
}

function rowsWhereNumberLessThan(number, rng, col){
  var output = [];
  if (typeof col == "number" && typeof number == "number"){
    for (var i = 0; i < rng.length; i++ ){
      if (rng[i][col-1]<number && typeof rng[i][col-1]=="number"){
        output.push(i+1);
      }
    }
  }
  else{
    return;
  }
  return output;
}

function rowsWhereNumberLessThanOrEqualTo(number, rng, col){
  var output = [];
  if (typeof col == "number" && typeof number == "number"){
    for (var i = 0; i < rng.length; i++ ){
      if (rng[i][col-1]<=number && typeof rng[i][col-1]=="number"){
        output.push(i+1);
      }
    }
  }
  else{
    return;
  }
  return output;
}

function rowsWhereNumberNotEqualTo(number, rng, col){
  var output = [];
  if (typeof col == "number" && typeof number == "number"){
    for (var i = 0; i < rng.length; i++ ){
      if (rng[i][col-1]!=number){
        output.push(i+1);
      }
    }
  }
  else{
    return;
  }
  return output;
}

function rowsWhereNumberEqualTo(number, rng, col){
  var output = [];
  if (typeof col == "number" && typeof number == "number"){
    for (var i = 0; i < rng.length; i++ ){
      if (rng[i][col-1]==number){
        output.push(i+1);
      }
    }
  }
  else{
    return;
  }
  return output;
}
