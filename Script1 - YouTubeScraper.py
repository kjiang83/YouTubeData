# should be run in Google Apps Script

function YouTubeScraper(){
  var spreadSheet = SpreadsheetApp.getActiveSpreadsheet()
  var activesheet = spreadSheet.getActiveSheet()

  var search = YouTube.Search.list('snippet, id', {q: 'minecraft', maxResults: 50})
  
  var results = search.items.map((item) => [item.id.videoId, item.snippet.title, item.snippet.publishedAt])

  var ids = results.map((id) => id[0]).join(',')

  var stats = YouTube.Videos.list('statistics', {id: ids})

  var videoStats = stats.items.map((item) => [item.statistics.viewCount, item.statistics.likeCount, item.statistics.commentCount])

  activesheet.getRange(2, 1, results.length, results[0].length).setValues(results)
  activesheet.getRange(2, 4, videoStats.length, results[0].length).setValues(videoStats)
}
