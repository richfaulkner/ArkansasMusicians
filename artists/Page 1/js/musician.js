fetch(‘https://theaudiobd.com/api/v1/json/523532/search.php?s=coldplay’)
   .then(response => response.json())
   .then(artists => showArtist(artists.results));
    
    
