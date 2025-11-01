// Simple interactivity for demonstration
document.addEventListener('DOMContentLoaded', function() {
  // Navigation active state
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      navItems.forEach(i => i.classList.remove('active'));
      this.classList.add('active');
    });
  });

  // Route selection state
  let selectedRoute = null;
  let isStarted = false;

  // Route buttons with toggle functionality
  const routeButtons = document.querySelectorAll('.route-btn');
  const lintasanABtn = routeButtons[0];
  const lintasanBBtn = routeButtons[1];
  const startBtn = routeButtons[2];

  // Function to show/hide virtual map elements based on route
  function updateVirtualMap(route) {
    const virtualMapGrid = document.querySelector('.map-grid');
    
    if (!virtualMapGrid) return;

    // Remove all existing route-specific elements
    const oldElements = virtualMapGrid.querySelectorAll('.route-element, .b-label, .red-dot, .green-dot, .green-rect, .blue-rect, .biggreen-rect, .anchor-logo');
    oldElements.forEach(el => el.remove());

    if (route === 'A') {
      createLintasanA(virtualMapGrid);
    } else if (route === 'B') {
      createLintasanB(virtualMapGrid);
    }
  }

  // Function to mirror position horizontally
  function mirrorPosition(left) {
    // Convert percentage to number
    const leftPercent = parseFloat(left);
    // Mirror position: 100% - original position
    return (100 - leftPercent) + '%';
  }

  // Create Lintasan A elements (mirror of Lintasan B)
  function createLintasanA(container) {
    // Add A label (mirrored position)
    const aLabel = document.createElement('div');
    aLabel.className = 'b-label route-element';
    aLabel.textContent = 'A';
    aLabel.style.top = '185px';
    aLabel.style.left = mirrorPosition('50.5%'); // Mirrored from B
    container.appendChild(aLabel);

    // Red dots for Lintasan A (mirrored from Lintasan B)
    const redDotsB = [
      { top: '227px', left: '92%' },
      { top: '170px', left: '92%' },
      { top: '120px', left: '88%' },
      { top: '55px', left: '59%' },
      { top: '55px', left: '52%' },
      { top: '55px', left: '45%' },
      { top: '55px', left: '38%' },
      { top: '154px', left: '11%' },
      { top: '197px', left: '19%' },
      { top: '230px', left: '15%' }
    ];

    redDotsB.forEach(pos => {
      const dot = document.createElement('div');
      dot.className = 'red-dot route-element';
      dot.style.top = pos.top;
      dot.style.left = mirrorPosition(pos.left); // Mirrored position
      container.appendChild(dot);
    });

    // Green dots for Lintasan A (mirrored from Lintasan B)
    const greenDotsB = [
      { top: '227px', left: '85%' },
      { top: '170px', left: '85%' },
      { top: '120px', left: '82%' },
      { top: '35px', left: '59%' },
      { top: '35px', left: '52%' },
      { top: '35px', left: '45%' },
      { top: '35px', left: '38%' },
      { top: '154px', left: '4%' },
      { top: '197px', left: '13%' },
      { top: '230px', left: '9%' }
    ];

    greenDotsB.forEach(pos => {
      const dot = document.createElement('div');
      dot.className = 'green-dot route-element';
      dot.style.top = pos.top;
      dot.style.left = mirrorPosition(pos.left); // Mirrored position
      container.appendChild(dot);
    });

    // Green rectangle (mirrored)
    const greenRect = document.createElement('div');
    greenRect.className = 'green-rect route-element';
    greenRect.style.top = '276px';
    greenRect.style.left = mirrorPosition('86%'); // Mirrored
    container.appendChild(greenRect);

    // Blue rectangle (mirrored)
    const blueRect = document.createElement('div');
    blueRect.className = 'blue-rect route-element';
    blueRect.style.top = '304px';
    blueRect.style.left = mirrorPosition('78%'); // Mirrored
    container.appendChild(blueRect);

    // Big green rectangle (mirrored) - PERBAIKAN: gunakan biggreen-rect, bukan biggred-rect
    const bigGreenRect = document.createElement('div');
    bigGreenRect.className = 'biggreen-rect route-element';
    bigGreenRect.style.top = '338px';
    bigGreenRect.style.left = mirrorPosition('15%'); // Mirrored
    container.appendChild(bigGreenRect);

    // Anchor logo (mirrored)
    const anchorLogo = document.createElement('div');
    anchorLogo.className = 'anchor-logo route-element';
    anchorLogo.style.top = '312px';
    anchorLogo.style.left = mirrorPosition('12%'); // Mirrored
    anchorLogo.innerHTML = '<i class="ri-anchor-fill" style="color:#7a7a7a; font-size:30px;"></i>';
    container.appendChild(anchorLogo);
  }

  // Create Lintasan B elements (original)
  function createLintasanB(container) {
    // B label
    const bLabel = document.createElement('div');
    bLabel.className = 'b-label route-element';
    bLabel.textContent = 'B';
    bLabel.style.top = '185px';
    bLabel.style.left = '50.5%';
    container.appendChild(bLabel);

    // Red dots for Lintasan B
    const redDotsB = [
      { top: '227px', left: '92%' },
      { top: '170px', left: '92%' },
      { top: '120px', left: '88%' },
      { top: '55px', left: '59%' },
      { top: '55px', left: '52%' },
      { top: '55px', left: '45%' },
      { top: '55px', left: '38%' },
      { top: '154px', left: '11%' },
      { top: '197px', left: '19%' },
      { top: '230px', left: '15%' }
    ];

    redDotsB.forEach(pos => {
      const dot = document.createElement('div');
      dot.className = 'red-dot route-element';
      dot.style.top = pos.top;
      dot.style.left = pos.left;
      container.appendChild(dot);
    });

    // Green dots for Lintasan B
    const greenDotsB = [
      { top: '227px', left: '85%' },
      { top: '170px', left: '85%' },
      { top: '120px', left: '82%' },
      { top: '35px', left: '59%' },
      { top: '35px', left: '52%' },
      { top: '35px', left: '45%' },
      { top: '35px', left: '38%' },
      { top: '154px', left: '4%' },
      { top: '197px', left: '13%' },
      { top: '230px', left: '9%' }
    ];

    greenDotsB.forEach(pos => {
      const dot = document.createElement('div');
      dot.className = 'green-dot route-element';
      dot.style.top = pos.top;
      dot.style.left = pos.left;
      container.appendChild(dot);
    });

    // Green rectangle
    const greenRect = document.createElement('div');
    greenRect.className = 'green-rect route-element';
    greenRect.style.top = '276px';
    greenRect.style.left = '86%';
    container.appendChild(greenRect);

    // Blue rectangle
    const blueRect = document.createElement('div');
    blueRect.className = 'blue-rect route-element';
    blueRect.style.top = '304px';
    blueRect.style.left = '78%';
    container.appendChild(blueRect);

    // Big green rectangle
    const bigGreenRect = document.createElement('div');
    bigGreenRect.className = 'biggreen-rect route-element';
    bigGreenRect.style.top = '338px';
    bigGreenRect.style.left = '15%';
    container.appendChild(bigGreenRect);

    // Anchor logo
    const anchorLogo = document.createElement('div');
    anchorLogo.className = 'anchor-logo route-element';
    anchorLogo.style.top = '312px';
    anchorLogo.style.left = '12%';
    anchorLogo.innerHTML = '<i class="ri-anchor-fill" style="color:#7a7a7a; font-size:30px;"></i>';
    container.appendChild(anchorLogo);
  }

  // Update button states function
  function updateButtonStates(activeRoute) {
    routeButtons.forEach(btn => btn.classList.remove('active', 'secondary'));
    
    if (activeRoute === 'A') {
      lintasanABtn.classList.add('active');
      lintasanBBtn.classList.add('secondary');
    } else if (activeRoute === 'B') {
      lintasanBBtn.classList.add('active');
      lintasanABtn.classList.add('secondary');
    }
  }

  // Lintasan A button click
  lintasanABtn.addEventListener('click', function() {
    selectedRoute = 'A';
    isStarted = false;
    
    // Update button states
    updateButtonStates('A');
    startBtn.classList.remove('active');
    
    // Update virtual map
    updateVirtualMap('A');
    
    console.log('Lintasan A dipilih (mirror dari B)');
  });

  // Lintasan B button click
  lintasanBBtn.addEventListener('click', function() {
    selectedRoute = 'B';
    isStarted = false;
    
    // Update button states
    updateButtonStates('B');
    startBtn.classList.remove('active');
    
    // Update virtual map
    updateVirtualMap('B');
    
    console.log('Lintasan B dipilih');
  });

  // Start button click
  startBtn.addEventListener('click', function() {
    if (!selectedRoute) {
      alert('Pilih lintasan terlebih dahulu (A atau B)');
      return;
    }
    
    isStarted = true;
    startBtn.classList.add('active');
    
    console.log('Misi dimulai dengan Lintasan ' + selectedRoute);
  });

  // Initialize with Lintasan A (default)
  selectedRoute = 'A';
  updateButtonStates('A');
  updateVirtualMap('A');

  // Update time
  function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('id-ID');
    const dateString = now.toLocaleDateString('id-ID');
    const dayString = now.toLocaleDateString('id-ID', { weekday: 'long' });
    
    // Update time elements
    const geoValues = document.querySelectorAll('.geo-value');
    if (geoValues.length >= 3) {
      geoValues[2].textContent = timeString;
      geoValues[1].textContent = dateString;
      geoValues[0].textContent = dayString;
    }
  }

  // Update time every second
  setInterval(updateTime, 1000);
  updateTime();
});

// Initialize Leaflet map
var map = L.map('map').setView([-7.9653, 112.6301], 15);

// Add OpenStreetMap tile layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Add marker for ship position
var marker = L.marker([-7.9653, 112.6301]).addTo(map);
marker.bindPopup("<b>Posisi Kapal</b><br>Monitor Kapal USU - KKI.").openPopup();