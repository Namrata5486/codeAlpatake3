document.getElementById('login-form').addEventListener('submit', function(e) {
 e.preventDefault();
 const username = document.getElementById('username').value;
                                                                                                                                                                                                                                                                                                        
 // Simulate user login
  if (username) {
  document.getElementById('login-area').style.display = 'none';
  document.getElementById('feed-area').style.display = 'block';
  document.getElementById('feeds').innerHTML = `<p>Welcome, ${username}!</p>`;
 }
 });
                                                                                                                                                                                                                                                                                                        
 // Simulated fetch function for social media feeds
 document.getElementById('fetch-feeds').addEventListener('click', function() {
 const feedsContainer = document.getElementById('feeds');
                                                                                                                                                                                                                                                                                                            
 // Simulating fetching feeds from multiple platforms
 const feeds = [
     { platform: 'Twitter', content: 'Tweet 1 from Twitter!' },
     { platform: 'Facebook', content: 'Post 1 from Facebook!' },
      { platform: 'Instagram', content: 'Photo from Instagram!' }
 ];
                                                                                                                                                                                                                                                                                                        
 feedsContainer.innerHTML = ''; // Clear previous feeds
                                                                                                                                                                                                                                                                                                        
 feeds.forEach(feed => {
 const feedDiv = document.createElement('div');
   feedDiv.classList.add('feed');
   feedDiv.innerHTML = `<strong>${feed.platform}</strong>: ${feed.content}`;
   feedsContainer.appendChild(feedDiv);
  });
  });
                                                                                                                                                                                                                                                                                                        