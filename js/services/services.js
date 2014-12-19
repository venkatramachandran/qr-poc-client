'use strict';

app.factory('Documents',function ($resource) { 
  return $resource('http://localhost:8124/api/documents/:documentId', 
    {documentId: "@documentId"},
    {
       "get": {method:"GET"},
       "create": {method: "POST"}
    });
});