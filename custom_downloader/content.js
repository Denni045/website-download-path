// // Listen for download events
// chrome.downloads.onDeterminingFilename.addListener(function(item, suggest) {
//   // Check if download is from the specific host page
//   if (item.url.startsWith("https://kibaco.tmu.ac.jp/*")) {
//     // Modify the download path as needed
//     var newPath = "/Users/manchinidenimu/Documents/university" + item.filename;
//     // Suggest the new path
//     suggest({filename: newPath});
//     console.log(item);
//   }
// });
