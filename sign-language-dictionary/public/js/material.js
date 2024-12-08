// // document.addEventListener('DOMContentLoaded', function() {
// //   const materialsDataElement = document.getElementById('materialsData');
// //   if (!materialsDataElement) {
// //       console.error('materialsData element not found.');
// //       return;
// //   }

// //   try {
// //       const materials = JSON.parse(materialsDataElement.textContent);
// //       console.log('Materials:', materials);

// //       const materialContent = document.getElementById('materialContent');
// //       const materialVideo = document.getElementById('materialVideo');
// //       const prevButton = document.getElementById('prevMaterial');
// //       const nextButton = document.getElementById('nextMaterial');
// //       const backButton = document.getElementById('backToClassList');

// //       let currentMaterialIndex = 0;

// //       function renderMaterials() {
// //           materials.forEach((material, index) => {
// //               // Create a container for the content
// //               const containerElement = document.createElement('div');
// //               containerElement.id = `container-${index}`;
// //               containerElement.className = 'material-container';
// //               containerElement.style.display = index === 0 ? 'block' : 'none';

// //             // Render image
// //               if (material.image) {
// //                   const imgElement = document.createElement('img');
// //                   imgElement.src = `data:image/jpeg;base64,${material.image}`;
// //                   imgElement.alt = `Image for material ${index}`;
// //                   imgElement.className = 'material-image';
// //                   containerElement.appendChild(imgElement);
// //               } else {
// //                   contentElement.innerHTML += `<p>The content does not exist.</p>`;
// //               }

// //               // Render video
// //               const videoElement = document.createElement('video');
// //               videoElement.id = `video-${index}`;
// //               videoElement.controls = true;
// //               videoElement.className = 'material-video';
// //               if (material.video === null) {
// //                   videoElement.innerHTML = `<p>The video does not exist.</p>`;
// //               } else {
// //                   videoElement.innerHTML = `
// //                       <source src="${material.video}" type="video/mp4">
// //                       Your browser does not support the video tag.
// //                   `;
// //               }
// //               containerElement.appendChild(videoElement);

// //               materialContent.appendChild(containerElement);
// //           });
// //       }

// //       function showMaterial(index) {
// //           materials.forEach((material, i) => {
// //               document.getElementById(`container-${i}`).style.display = i === index ? 'block' : 'none';
// //           });

// //           // Show/Hide buttons based on the current material index
// //           if (index === 0) {
// //               prevButton.style.display = 'none';
// //           } else {
// //               prevButton.style.display = 'inline-block';
// //           }

// //           if (index === materials.length - 1) {
// //               nextButton.style.display = 'none';
// //           } else {
// //               nextButton.style.display = 'inline-block';
// //           }
// //       }

// //       prevButton.onclick = function() {
// //           if (currentMaterialIndex > 0) {
// //               currentMaterialIndex--;
// //               showMaterial(currentMaterialIndex);
// //           }
// //       };

// //       nextButton.onclick = function() {
// //           if (currentMaterialIndex < materials.length - 1) {
// //               currentMaterialIndex++;
// //               showMaterial(currentMaterialIndex);
// //           }
// //       };

// //       backButton.onclick = function() {
// //           window.location.href = '/classes';
// //       };

// //       renderMaterials();
// //       showMaterial(currentMaterialIndex);

// //   } catch (error) {
// //       console.error('Error parsing materials data:', error);
// //   }
// // });


// document.addEventListener('DOMContentLoaded', function() {
//   const materialsDataElement = document.getElementById('materialsData');
//   if (!materialsDataElement) {
//       console.error('materialsData element not found.');
//       return;
//   }

//   try {
//       const materials = JSON.parse(materialsDataElement.textContent);
//       console.log('Materials:', materials);

//       const materialContent = document.getElementById('materialContent');
//       const materialVideo = document.getElementById('materialVideo');
//       const prevButton = document.getElementById('prevMaterial');
//       const nextButton = document.getElementById('nextMaterial');
//       const backButton = document.getElementById('backToClassList');

//       let currentMaterialIndex = 0;

//       function renderMaterials() {
//           materials.forEach((material, index) => {
//               // Render content and image in the left div
//               const contentElement = document.createElement('div');
//               if (material.image) {
//               contentElement.id = `content-${index}`;
//               contentElement.className = 'material-item';
//               contentElement.src = `data:image/jpeg;base64,${material.image}`;
//               contentElement.alt = `Image for material ${index}`;
//               contentElement.style.display = index === 0 ? 'block' : 'none';
//               } else {
//                   contentElement.innerHTML += `<p>The content does not exist.</p>`;
//               }
//               materialContent.appendChild(contentElement);

//               // Render video in the right div
//               const videoElement = document.createElement('video');
//               videoElement.id = `video-${index}`;
//               videoElement.controls = true;
//               videoElement.style.display = index === 0 ? 'block' : 'none';
//               if (material.video === null) {
//                   videoElement.innerHTML = `<p>The video does not exist.</p>`;
//               } else {
//                   videoElement.innerHTML = `
//                       <source src="${material.video}" type="video/mp4">
//                       Your browser does not support the video tag.
//                   `;
//               }
//               materialVideo.appendChild(videoElement);
//           });
//       }

//       function showMaterial(index) {
//           materials.forEach((material, i) => {
//               document.getElementById(`content-${i}`).style.display = i === index ? 'block' : 'none';
//               document.getElementById(`video-${i}`).style.display = i === index ? 'block' : 'none';
//           });

//           // Show/Hide buttons based on the current material index
//           if (index === 0) {
//               prevButton.style.display = 'none';
//           } else {
//               prevButton.style.display = 'inline-block';
//           }

//           if (index === materials.length - 1) {
//               nextButton.style.display = 'none';
//           } else {
//               nextButton.style.display = 'inline-block';
//           }
//       }

//       prevButton.onclick = function() {
//           if (currentMaterialIndex > 0) {
//               currentMaterialIndex--;
//               showMaterial(currentMaterialIndex);
//           }
//       };

//       nextButton.onclick = function() {
//           if (currentMaterialIndex < materials.length - 1) {
//               currentMaterialIndex++;
//               showMaterial(currentMaterialIndex);
//           }
//       };

//       backButton.onclick = function() {
//           window.location.href = '/classes';
//       };

//       renderMaterials();
//       showMaterial(currentMaterialIndex);

//   } catch (error) {
//       console.error('Error parsing materials data:', error);
//   }
// });


document.addEventListener('DOMContentLoaded', function() {
  const materialsDataElement = document.getElementById('materialsData');
  if (!materialsDataElement) {
      console.error('materialsData element not found.');
      return;
  }

  try {
      const materials = JSON.parse(materialsDataElement.textContent);
      console.log('Materials:', materials);

      const materialContent = document.getElementById('materialContent');
      const materialVideo = document.getElementById('materialVideo');
      const prevButton = document.getElementById('prevMaterial');
      const nextButton = document.getElementById('nextMaterial');
      const backButton = document.getElementById('backToClassList');

      let currentMaterialIndex = 0;

      function renderMaterials() {
          materials.forEach((material, index) => {
              // Render image in the left div
              const imageElement = document.createElement('div');
              imageElement.id = `content-${index}`;
              imageElement.className = 'material-item';
              imageElement.style.display = index === 0 ? 'block' : 'none';

              if (material.image) {
                  const imgElement = document.createElement('img');
                  imgElement.src = `data:image/jpeg;base64,${material.image}`;
                  imgElement.alt = `Image for material ${index}`;
                  imgElement.className = 'material-image';
                  imageElement.appendChild(imgElement);
              } else {
                  imageElement.innerHTML += `<p>The image does not exist.</p>`;
              }

              materialContent.appendChild(imageElement);

              // Render video in the right div
              const videoElement = document.createElement('video');
              videoElement.id = `video-${index}`;
              videoElement.controls = true;
              videoElement.style.display = index === 0 ? 'block' : 'none';

              if (material.video !== null) {
                  const sourceElement = document.createElement('source');
                  sourceElement.src = material.video;
                  sourceElement.type = 'video/mp4';
                  videoElement.appendChild(sourceElement);
              } else {
                  videoElement.innerHTML = `<p>The video does not exist.</p>`;
              }

              materialVideo.appendChild(videoElement);
          });
      }

      function showMaterial(index) {
          materials.forEach((material, i) => {
              document.getElementById(`content-${i}`).style.display = i === index ? 'block' : 'none';
              document.getElementById(`video-${i}`).style.display = i === index ? 'block' : 'none';
          });

          // Show/Hide buttons based on the current material index
          prevButton.style.display = index === 0 ? 'none' : 'inline-block';
          nextButton.style.display = index === materials.length - 1 ? 'none' : 'inline-block';
      }

      prevButton.onclick = function() {
          if (currentMaterialIndex > 0) {
              currentMaterialIndex--;
              showMaterial(currentMaterialIndex);
          }
      };

      nextButton.onclick = function() {
          if (currentMaterialIndex < materials.length - 1) {
              currentMaterialIndex++;
              showMaterial(currentMaterialIndex);
          }
      };

      backButton.onclick = function() {
          window.location.href = '/classes';
      };

      renderMaterials();
      showMaterial(currentMaterialIndex);

  } catch (error) {
      console.error('Error parsing materials data:', error);
  }
});
