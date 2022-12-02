# GoogleAppsScriptFilters
Google Apps Script functions that return array of filtered rows in a spreadsheet. Inspired by https://developers.google.com/apps-script/reference/spreadsheet/filter-criteria-builder

These functions do not affect activation of a filter in the sheet.

 FilterCriteriaBuilder Class function --->  GoogleAppsScriptFilters function   
 whenDateNotEqualTo(date) --->  whenDateNotEqualTo(date, rng, col)   
 whenDateNotEqualToAny(dates) --->  whenDateNotEqualToAny(dateArr, rng, col)   
 whenNumberBetween(start,end) --->  whenNumberBetween(start, end, rng, col)   
 whenNumberEqualTo(number) --->  whenNumberEqualTo(number, rng, col)   
 whenNumberEqualToAny(numbers) --->  whenNumberEqualToAny(numberArr, rng, col)   
 whenNumberGreaterThan(number) --->  whenNumberGreaterThan(number, rng, col)   
 whenNumberGreaterThanOrEqualTo(number) --->  whenNumberGreaterThanOrEqualTo(number, rng, col)   
 whenNumberLessThan(number) --->  whenNumberLessThan(number, rng, col)   
 whenNumberLessThanOrEqualTo(number) --->  whenNumberLessThanOrEqualTo(number, rng, col)   
 whenNumberNotBetween(start,end) --->  whenNumberNotBetween(start, end, rng, col)   
 whenNumberNotEqualTo(number) --->  whenNumberNotEqualTo(number, rng, col)   
 whenNumberNotEqualToAny(numbers) --->  whenNumberNotEqualToAny(numberArr, rng, col)   
 whenTextContains(text) --->  whenTextContains(txt, rng, col)   
 whenTextDoesNotContain(text) --->  whenTextDoesNotContain(txt, rng, col)   
 whenTextEndsWith(text) --->  whenTextEndsWith(txt, rng, col)   
 whenTextEqualTo(text) --->  whenTextEqualTo(txt, rng, col)   
 whenTextEqualToAny(texts) --->  whenTextEqualToAny(textArr, rng, col)   
 whenTextNotEqualTo(text) --->  whenTextNotEqualTo(txt, rng, col)   
 whenTextNotEqualToAny(texts) --->  whenTextNotEqualToAny(textArr, rng, col)   
 whenTextStartsWith(text) --->  whenTextStartsWith(txt, rng, col)  
 
 Every GoogleAppsScriptFilters function has additional parameters: rng, col and targetCol  
 rng parameter represents the range which function takes,   
 col parameter represents the column in which filtering criteria will be applied,
 targetCol parameter is optional and represents single column from which data is pulled (instead of entire row that satisfies the filter criteria). It can be a letter (like 'A', 'B', 'C' ...) or number (like 1, 2, 3 ...) Default value is zero and in that case entire row data is returned.

