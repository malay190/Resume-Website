db.transaction(function(views) {
    return (views || 0) + 1;
  });
  db.on('value', function(snapshot) {
    document.getElementById('viewCount').innerText = snapshot.val();
  });