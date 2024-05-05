function saveOptions(e) {
  e.preventDefault();
  chrome.storage.local.set({
    'entryName': document.querySelector("#entryName").value,
  }, function () {
    window.close()
  });

}

document.querySelector("form").addEventListener("submit", saveOptions);
