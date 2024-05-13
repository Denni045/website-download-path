const targetHostPage = "https://kibaco.tmu.ac.jp/*"; // Replace with the target host page URL

chrome.downloads.onDeterminingFilename.addListener((downloadItem, suggest) => {
  if (downloadItem.url.startsWith(targetHostPage)) {
    const newPath = "/Users/manchinidenimu/Documents/university"; // Replace with the desired download path
    suggest({ filename: downloadItem.filename, conflict_action: "overwrite", path: newPath });
  } else {
    suggest({}); // Use the default download path for other websites
  }
});