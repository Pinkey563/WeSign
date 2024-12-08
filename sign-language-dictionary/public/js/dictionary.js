document.getElementById('searchBox').addEventListener('input', async () => {
  const searchType = document.getElementById('typeFilter').value || 'all';
  const word = document.getElementById('searchBox').value;

  if (word.trim() === '') {
    document.getElementById('resultsBody').innerHTML = '';
    return;
  }

  try {
    const response = await fetch(`/api/search?word=${encodeURIComponent(word)}&searchType=${searchType}`);
    if (!response.ok) {
      throw new Error('Error fetching results');
    }

    const results = await response.json();
    populateResults(results);
  } catch (error) {
    console.error('Error fetching search results:', error);
    document.getElementById('resultsBody').innerHTML = '<tr><td colspan="6">Không có kết quả tìm kiếm.</td></tr>';
  }
});

function populateResults(results) {
  const resultsBody = document.getElementById('resultsBody');
  resultsBody.innerHTML = ''; // Clear previous results

  if (!results || results.length === 0) {
    resultsBody.innerHTML = '<tr><td colspan="6">Không có kết quả tìm kiếm.</td></tr>';
    return;
  }

  results.forEach(item => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><input type="checkbox"></td>
      <td>${item.word}</td>
      <td>${item.type}</td>
      <td>
        ${item.image ? `<img src="${item.image}" alt="${item.word} image" style="max-width: 100px;"/>` : 'Không có ảnh minh họa'}
      </td>
      <td>
        ${item.video_link ? `<button class="video-icon" data-video-url="${item.video_link}">👁️</button>` : 'Không có video minh họa'}
      </td>
      <td>
        <button class="edit">✏️</button>
        <button class="delete">🗑️</button>
      </td>
    `;
    resultsBody.appendChild(row);

    // Add event listener for video display
    if (item.video_link) {
      row.querySelector('.video-icon').addEventListener('click', function() {
        displayVideo(item.video_link);
      });
    }
  });
}

function displayVideo(videoUrl) {
  const videoModal = document.createElement('div');
  videoModal.innerHTML = `
    <div style="position:fixed; top:0; left:0; width:100%; height:100%; background:rgba(0,0,0,0.7); display:flex; justify-content:center; align-items:center;">
      <video controls autoplay style="max-width:90%; max-height:90%;">
        <source src="${videoUrl}" type="video/mp4">
        Your browser does not support the video tag.
      </video>
      <button style="position:absolute; top:20px; right:20px; background:red; color:white; border:none; padding:10px; cursor:pointer;" id="closeModal">X</button>
    </div>
  `;
  document.body.appendChild(videoModal);

  document.getElementById('closeModal').addEventListener('click', () => {
    videoModal.remove();
  });
}