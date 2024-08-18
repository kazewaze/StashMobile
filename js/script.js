let sidebar = document.getElementById('sidebar');
let startX, currentX;
let isDragging = false;

function openSidebar() {
  sidebar.classList.add('show-sidebar');
}  

function closeSidebar() {
  sidebar.classList.remove('show-sidebar');
}

// Touch Start Event.
document.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;

  // Check: Touch is near right edge for Opening Sidebar ?
  if (startX > window.innerWidth - 50 || sidebar.classList.contains('show-sidebar')) {
    isDragging = true;
  }
});

// Touch Move Event.
document.addEventListener('touchmove', (e) => {
  if (!isDragging)
    return;

  currentX = e.touches[0].clientX;

  // Check: Swiping to Open or Close the Sidebar ?
  if (sidebar.classList.contains('show-sidebar')) {
    if (currentX - startX > 50) {
      closeSidebar();
    }
  } else {
    if (startX - currentX > 50) {
      openSidebar();
    }
  }
});

// Touch End Event.
document.addEventListener('touchend', () => {
  isDragging = false;
});