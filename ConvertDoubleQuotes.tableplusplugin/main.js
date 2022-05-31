'use strict';

var onRun = function(context) {
    // Get table in opening tab
    var queryEditor = context.currentQueryEditor();
    if (queryEditor == null) {
        context.alert('Error', 'No SQL Editor');
        return;
    }
    var range = queryEditor.currentSelectedRange();
    var statement = queryEditor.currentSelectedString();
    var formattedStatement = statement.replace(/"/g, "'");
    queryEditor.replaceStringInRange(formattedStatement, range);
};

global.onRun = onRun;