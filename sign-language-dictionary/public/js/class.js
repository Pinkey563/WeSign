// // document.addEventListener('DOMContentLoaded', function() {
// //   const searchTypeSelect = document.getElementById('searchType');
// //   const searchOptionsSelect = document.getElementById('searchOptions');
// //   const classList = document.getElementById('classList');
// //   const topicsModal = document.getElementById('topicsModal');
// //   const topicsContainer = document.getElementById('topicsContainer');

// //   fetchClasses();

// //   searchTypeSelect.addEventListener('change', function() {
// //     const searchType = searchTypeSelect.value;
// //     if (searchType === 'all') {
// //       searchOptionsSelect.style.display = 'none';
// //       fetchClasses();
// //     } else {
// //       fetchOptions(searchType);
// //       searchOptionsSelect.style.display = 'block';
// //     }
// //   });

// //   searchOptionsSelect.addEventListener('change', function() {
// //     const searchType = searchTypeSelect.value;
// //     const searchValue = searchOptionsSelect.value;
// //     fetchClasses(searchType, searchValue);
// //   });

// //   function fetchClasses(searchType = 'all', searchValue = '') {
// //     const url = `/api/classes?searchType=${searchType}&searchValue=${searchValue}`;
// //     fetch(url)
// //       .then(response => response.json())
// //       .then(classes => {
// //         classList.innerHTML = '';
// //         classes.forEach((classItem, index) => {
// //           const row = document.createElement('tr');
// //           row.innerHTML = `
// //             <td>${index + 1}</td>
// //             <td>${classItem.name}</td>
// //             <td>${classItem.subject}</td>
// //             <td>${classItem.code}</td>
// //             <td>${classItem.grade}</td>
// //             <td>${classItem.teacher}</td>
// //             <td><button onclick="viewTopics('${classItem.code}', '${classItem.subject}')">Xem bài học</button></td>
// //           `;
// //           classList.appendChild(row);
// //         });
// //       })
// //       .catch(error => console.error("Error fetching classes:", error));
// //   }

// //   function fetchOptions(searchType) {
// //     const url = `/api/classes/options?searchType=${searchType}`;
// //     fetch(url)
// //       .then(response => response.json())
// //       .then(options => {
// //         searchOptionsSelect.innerHTML = '<option value="">Chọn một tùy chọn</option>';
// //         options.forEach(option => {
// //           const optionElement = document.createElement('option');
// //           optionElement.value = option.value;
// //           optionElement.textContent = option.label;
// //           searchOptionsSelect.appendChild(optionElement);
// //         });
// //       })
// //       .catch(error => console.error("Error fetching options for searchOptionsSelect:", error));
// //   }

// //   window.viewTopics = function(classCode, subject) {
// //     console.log("Fetching topics for class:", classCode, "subject:", subject);
// //     fetch(`/api/topics?classCode=${classCode}&subject=${subject}`)
// //       .then(response => response.json())
// //       .then(topics => {
// //         topicsContainer.innerHTML = `
// //         <h1>Danh sách các chủ đề cho lớp ${classCode}- Môn học: ${subject}</h1>
// //           <table>
// //             <thead>
// //               <tr>
// //                 <th>STT</th>
// //                 <th>Tên chủ đề</th>
// //                 <th>Mô tả</th>
// //                 <th>Hành động</th>
// //               </tr>
// //             </thead>
// //             <tbody>
// //               ${topics.map((topic, index) => `
// //                 <tr>
// //                   <td>${index + 1}</td>
// //                   <td>${topic.name}</td>
// //                   <td>${topic.description || 'Không có mô tả'}</td>
// //                   <td><button onclick="viewMaterials('${classCode}', '${topic.id}')">Xem học liệu</button></td>
// //                 </tr>
// //               `).join('')}
// //             </tbody>
// //           </table>
// //         `;
// //         topicsModal.style.display = 'block';
// //       })
// //       .catch(error => console.error("Error fetching topics:", error));
// //   };

// //   window.viewMaterials = function(classCode, topicId) {
// //     console.log("Fetching materials for topic:", topicId);
// //     if (!topicId) {
// //       console.error('Invalid topicId:', topicId);
// //       return;
// //     }
// //     fetch(`/api/materials?topicId=${topicId}`)
// //       .then(response => response.json())
// //       .then(materials => {
// //         if (materials.length > 0) {
// //           displayMaterials(materials, classCode, topicId);
          
// //           const materialsModal = document.getElementById('materialsModal');
// //           if (!materialsModal) {
// //             console.error('Materials modal element not found.');
// //             return;
// //           }
// //           materialsModal.style.display = 'block';          
// //         }
// //       })
// //       .catch(error => console.error('Error fetching materials:', error));
// //   };

// //   // Assuming displayMaterials is defined elsewhere
// //   function displayMaterials(materials, classCode, topicId) {
// //     const materialContainer = document.getElementById("materialContainer"); 
// //     if (!materialContainer) {
// //       console.error("Material container element not found.");
// //       return;
// //     }
  
// //     let currentMaterialIndex = 0;
  
// //     const displayMaterial = () => {
// //       const material = materials[currentMaterialIndex];
// //       materialContainer.innerHTML = `
// //         <h3>${material.topic_id}</h3>
// //         <p>${material.content || 'No description available'}</p>
// //         <video controls>
// //           <source src="${material.url}" type="video/mp4">
// //         </video>
// //       `;
// //     };
  
// //     document.getElementById('prevMaterial').onclick = () => {
// //       if (currentMaterialIndex > 0) {
// //         currentMaterialIndex--;
// //         displayMaterial();
// //       }
// //     };
  
// //     document.getElementById('nextMaterial').onclick = () => {
// //       if (currentMaterialIndex < materials.length - 1) {
// //         currentMaterialIndex++;
// //         displayMaterial();
// //       }
// //     };
  
// //     displayMaterial();
// //     window.history.pushState({}, '', `/materials?classCode=${classCode}&topicId=${topicId}`);
// //   }
  
// //   window.closeModal = function() {
// //     const topicsModal = document.getElementById('topicsModal');
    
// //     // Check if topicsModal exists before trying to hide it
// //     if (topicsModal) {
// //       topicsModal.style.display = 'none';
// //     } else {
// //       console.error('Modal element not found.');
// //     }
// //   };
// // });

// document.addEventListener('DOMContentLoaded', function() {
//   const searchTypeSelect = document.getElementById('searchType');
//   const searchOptionsSelect = document.getElementById('searchOptions');
//   const classList = document.getElementById('classList');
//   const topicsModal = document.getElementById('topicsModal');
//   const topicsContainer = document.getElementById('topicsContainer');

//   fetchClasses();

//   searchTypeSelect.addEventListener('change', function() {
//     const searchType = searchTypeSelect.value;
//     if (searchType === 'all') {
//       searchOptionsSelect.style.display = 'none';
//       fetchClasses();
//     } else {
//       fetchOptions(searchType);
//       searchOptionsSelect.style.display = 'block';
//     }
//   });

//   searchOptionsSelect.addEventListener('change', function() {
//     const searchType = searchTypeSelect.value;
//     const searchValue = searchOptionsSelect.value;
//     fetchClasses(searchType, searchValue);
//   });

//   function fetchClasses(searchType = 'all', searchValue = '') {
//     const url = `/api/classes?searchType=${searchType}&searchValue=${searchValue}`;
//     fetch(url)
//       .then(response => response.json())
//       .then(classes => {
//         classList.innerHTML = '';
//         classes.forEach((classItem, index) => {
//           const row = document.createElement('tr');
//           row.innerHTML = `
//             <td>${index + 1}</td>
//             <td>${classItem.name}</td>
//             <td>${classItem.subject}</td>
//             <td>${classItem.code}</td>
//             <td>${classItem.grade}</td>
//             <td>${classItem.teacher}</td>
//             <td><button onclick="viewTopics('${classItem.code}', '${classItem.subject}')">Xem bài học</button></td>
//           `;
//           classList.appendChild(row);
//         });
//       })
//       .catch(error => console.error("Error fetching classes:", error));
//   }

//   function fetchOptions(searchType) {
//     const url = `/api/classes/options?searchType=${searchType}`;
//     fetch(url)
//       .then(response => response.json())
//       .then(options => {
//         searchOptionsSelect.innerHTML = '<option value="">Chọn một tùy chọn</option>';
//         options.forEach(option => {
//           const optionElement = document.createElement('option');
//           optionElement.value = option.value;
//           optionElement.textContent = option.label;
//           searchOptionsSelect.appendChild(optionElement);
//         });
//       })
//       .catch(error => console.error("Error fetching options for searchOptionsSelect:", error));
//   }

//   window.viewTopics = function(classCode, subject) {
//     console.log("Fetching topics for class:", classCode, "subject:", subject);
//     fetch(`/api/topics?classCode=${classCode}&subject=${subject}`)
//       .then(response => response.json())
//       .then(topics => {
//         topicsContainer.innerHTML = `
//         <h1>Danh sách các chủ đề cho lớp ${classCode}- Môn học: ${subject}</h1>
//           <table>
//             <thead>
//               <tr>
//                 <th>STT</th>
//                 <th>Tên chủ đề</th>
//                 <th>Mô tả</th>
//                 <th>Hành động</th>
//               </tr>
//             </thead>
//             <tbody>
//               ${topics.map((topic, index) => `
//                 <tr>
//                   <td>${index + 1}</td>
//                   <td>${topic.name}</td>
//                   <td>${topic.description || 'Không có mô tả'}</td>
//                   <td><button onclick="viewMaterials('${classCode}', '${topic.id}')">Xem học liệu</button></td>
//                 </tr>
//               `).join('')}
//             </tbody>
//           </table>
//         `;
//         topicsModal.style.display = 'block';
//       })
//       .catch(error => console.error("Error fetching topics:", error));
//   };

//   window.viewMaterials = function(classCode, topicId) {
//     console.log("Fetching materials for topic:", topicId);
//     if (!topicId) {
//       console.error('Invalid topicId:', topicId);
//       return;
//     }
//     fetch(`/api/materials?topicId=${topicId}`)
//       .then(response => response.json())
//       .then(materials => {
//         if (materials.length > 0) {
//           window.location.href = `/materials?classCode=${classCode}&topicId=${topicId}`;
//         } else {
//           console.error('No materials found for this topic.');
//         }
//       })
//       .catch(error => console.error("Error fetching materials:", error));
//   };

//   window.closeModal = function() { 
//     topicsModal.style.display = 'none'; 
//   };
// });
document.addEventListener('DOMContentLoaded', function() {
  const searchTypeSelect = document.getElementById('searchType');
  const searchOptionsSelect = document.getElementById('searchOptions');
  const classList = document.getElementById('classList');
  const topicsModal = document.getElementById('topicsModal');
  const topicsContainer = document.getElementById('topicsContainer');

  fetchClasses();

  searchTypeSelect.addEventListener('change', function() {
    const searchType = searchTypeSelect.value;
    if (searchType === 'all') {
      searchOptionsSelect.style.display = 'none';
      fetchClasses();
    } else {
      fetchOptions(searchType);
      searchOptionsSelect.style.display = 'block';
    }
  });

  searchOptionsSelect.addEventListener('change', function() {
    const searchType = searchTypeSelect.value;
    const searchValue = searchOptionsSelect.value;
    fetchClasses(searchType, searchValue);
  });

  function fetchClasses(searchType = 'all', searchValue = '') {
    const url = `/api/classes?searchType=${searchType}&searchValue=${searchValue}`;
    fetch(url)
      .then(response => response.json())
      .then(classes => {
        classList.innerHTML = '';
        classes.forEach((classItem, index) => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td>${index + 1}</td>
            <td>${classItem.name}</td>
            <td>${classItem.subject}</td>
            <td>${classItem.code}</td>
            <td>${classItem.grade}</td>
            <td>${classItem.teacher}</td>
            <td><button onclick="viewTopics('${classItem.code}', '${classItem.subject}')">Xem bài học</button></td>
          `;
          classList.appendChild(row);
        });
      })
      .catch(error => console.error("Error fetching classes:", error));
  }

  function fetchOptions(searchType) {
    const url = `/api/classes/options?searchType=${searchType}`;
    fetch(url)
      .then(response => response.json())
      .then(options => {
        searchOptionsSelect.innerHTML = '<option value="">Chọn một tùy chọn</option>';
        options.forEach(option => {
          const optionElement = document.createElement('option');
          optionElement.value = option.value;
          optionElement.textContent = option.label;
          searchOptionsSelect.appendChild(optionElement);
        });
      })
      .catch(error => console.error("Error fetching options for searchOptionsSelect:", error));
  }

  window.viewTopics = function(classCode, subject) {
    console.log("Fetching topics for class:", classCode, "subject:", subject);
    fetch(`/api/topics?classCode=${classCode}&subject=${subject}`)
      .then(response => response.json())
      .then(topics => {
        topicsContainer.innerHTML = `
        <h1>Danh sách các chủ đề cho lớp ${classCode} - Môn học: ${subject}</h1>
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên chủ đề</th>
                <th>Mô tả</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              ${topics.map((topic, index) => `
                <tr>
                  <td>${index + 1}</td>
                  <td>${topic.name}</td>
                  <td>${topic.description || 'Không có mô tả'}</td>
                  <td><button onclick="viewMaterials('${classCode}', '${topic.id}')">Xem học liệu</button></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        `;
        topicsModal.style.display = 'block';
      })
      .catch(error => console.error("Error fetching topics:", error));
  };

  window.viewMaterials = function(classCode, topicId) {
    console.log("Fetching materials for topic:", topicId);
    if (!topicId) {
      console.error('Invalid topicId:', topicId);
      return;
    }
    fetch(`/api/materials?topicId=${topicId}`)
      .then(response => response.json())
      .then(materials => {
        if (materials.length > 0) {
          window.location.href = `/materials?classCode=${classCode}&topicId=${topicId}`;
        } else {
          console.error('No materials found for this topic.');
        }
      })
      .catch(error => console.error("Error fetching materials:", error));
  };

  window.closeModal = function() { 
    topicsModal.style.display = 'none'; 
  };
});
