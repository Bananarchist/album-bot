function fetchFromWikipedia() {
  return fetch(
    new Request(
      "https://en.wikipedia.org/w/api.php", 
      { method: "POST", 
        body: new URLSearchParams(
          { action: "query", 
            list: "search", 
            srsearch: "Arcade Fire Funeral", 
            format: "json" 
          })
      })
  )
    .then((x) => x.json())
    .then((x) => x.query.search);
}

