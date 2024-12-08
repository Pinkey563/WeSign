document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const classCode = urlParams.get('classCode');

  fetch(`/api/topics?classCode=${classCode}`)
    .then(response => response.json())
    .then(topics => {
      const topicList = document.getElementById('topicList');
      topicList.innerHTML = ''; // Clear existing content
      topics.forEach((topic, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${index + 1}</td>
          <td>${topic.name}</td>
          <td>${topic.description}</td>
          <td><button onclick="viewMaterials('${topic.id}')">Xem học liệu</button></td>
        `;
        topicList.appendChild(row);
      });
    })
    .catch(error => console.error("Error fetching topics:", error));
});

function viewMaterials(topicId) {
  window.location.href = `/materials?topicId=${topicId}`;
}
