
// this YouTUbe API Data Scraper searches for a keyword and returns 250 results
// remember to add YouTube Data API v3 to services

function YouTubeScraper(){
  var j = 2
  var sh1 = SpreadsheetApp.getActiveSpreadsheet()
  var activesheet = sh1.getActiveSheet()
  // q : searches the keyword
  var results = YouTube.Search.list('id, snippet', {q: 'minecraft', maxResults : 50})
  
  var items = results.items.map(function(e){
    return [e.id.videoId, e.snippet.publishedAt, e.snippet.title, e.snippet.description, e.snippet.thumbnails["default"].url, e.snippet.channelTitle]
  })

  activesheet.getRange(j, 1, items.length, items[0].length).setValues(items)

  // change loop for more or less results
  for (let i = 0; i < 5; i++)
  {
    var results = YouTube.Search.list('id, snippet', {q: 'minecraft', maxResults : 50, pageToken : results.nextPageToken})

    var items = results.items.map(function(e){
    return [e.id.videoId, e.snippet.publishedAt, e.snippet.title, e.snippet.description, e.snippet.thumbnails["default"].url, e.snippet.channelTitle]
  })
    j = j + 50
    activesheet.getRange(j, 1, items.length, items[0].length).setValues(items)
  }

}