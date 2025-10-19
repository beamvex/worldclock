interface Clock {
  id: string;
  city: string;
  timezone: string;
}

interface CityData {
  name: string;
  timezone: string;
}

// Popular cities with their timezones
const cities: CityData[] = [
  { name: 'New York', timezone: 'America/New_York' },
  { name: 'London', timezone: 'Europe/London' },
  { name: 'Paris', timezone: 'Europe/Paris' },
  { name: 'Tokyo', timezone: 'Asia/Tokyo' },
  { name: 'Sydney', timezone: 'Australia/Sydney' },
  { name: 'Dubai', timezone: 'Asia/Dubai' },
  { name: 'Singapore', timezone: 'Asia/Singapore' },
  { name: 'Hong Kong', timezone: 'Asia/Hong_Kong' },
  { name: 'Los Angeles', timezone: 'America/Los_Angeles' },
  { name: 'Chicago', timezone: 'America/Chicago' },
  { name: 'Toronto', timezone: 'America/Toronto' },
  { name: 'Mexico City', timezone: 'America/Mexico_City' },
  { name: 'São Paulo', timezone: 'America/Sao_Paulo' },
  { name: 'Buenos Aires', timezone: 'America/Argentina/Buenos_Aires' },
  { name: 'Berlin', timezone: 'Europe/Berlin' },
  { name: 'Rome', timezone: 'Europe/Rome' },
  { name: 'Madrid', timezone: 'Europe/Madrid' },
  { name: 'Amsterdam', timezone: 'Europe/Amsterdam' },
  { name: 'Moscow', timezone: 'Europe/Moscow' },
  { name: 'Istanbul', timezone: 'Europe/Istanbul' },
  { name: 'Cairo', timezone: 'Africa/Cairo' },
  { name: 'Johannesburg', timezone: 'Africa/Johannesburg' },
  { name: 'Mumbai', timezone: 'Asia/Kolkata' },
  { name: 'Bangkok', timezone: 'Asia/Bangkok' },
  { name: 'Seoul', timezone: 'Asia/Seoul' },
  { name: 'Beijing', timezone: 'Asia/Shanghai' },
  { name: 'Shanghai', timezone: 'Asia/Shanghai' },
  { name: 'Melbourne', timezone: 'Australia/Melbourne' },
  { name: 'Auckland', timezone: 'Pacific/Auckland' },
  { name: 'Vancouver', timezone: 'America/Vancouver' },
];

let clocks: Clock[] = [];
let currentSize: string = 'medium';
let convertedTime: Date | null = null;

// Load clocks from localStorage
function loadClocks(): void {
  const saved = localStorage.getItem('worldClocks');
  if (saved) {
    clocks = JSON.parse(saved);
  } else {
    // Default clocks
    clocks = [
      { id: generateId(), city: 'New York', timezone: 'America/New_York' },
      { id: generateId(), city: 'London', timezone: 'Europe/London' },
      { id: generateId(), city: 'Tokyo', timezone: 'Asia/Tokyo' },
    ];
    saveClocks();
  }
}

// Save clocks to localStorage
function saveClocks(): void {
  localStorage.setItem('worldClocks', JSON.stringify(clocks));
}

// Load size preference
function loadSize(): void {
  const saved = localStorage.getItem('clockSize');
  if (saved) {
    currentSize = saved;
  }
  applySize();
}

// Save size preference
function saveSize(size: string): void {
  currentSize = size;
  localStorage.setItem('clockSize', size);
  applySize();
}

// Apply size class to grid
function applySize(): void {
  const grid = document.getElementById('clocksGrid');
  if (!grid) return;

  grid.className = 'clocks-grid';
  if (currentSize !== 'medium') {
    grid.classList.add(`size-${currentSize}`);
  }
}

// Generate unique ID
function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Format time for a timezone
function formatTime(timezone: string, baseTime?: Date): string {
  const now = baseTime || new Date();
  return now.toLocaleTimeString('en-US', {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });
}

// Format date for a timezone
function formatDate(timezone: string, baseTime?: Date): string {
  const now = baseTime || new Date();
  return now.toLocaleDateString('en-US', {
    timeZone: timezone,
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

// Get timezone offset in minutes
function getTimezoneOffset(timezone: string): number {
  const now = new Date();
  const utcDate = new Date(now.toLocaleString('en-US', { timeZone: 'UTC' }));
  const tzDate = new Date(now.toLocaleString('en-US', { timeZone: timezone }));
  return (tzDate.getTime() - utcDate.getTime()) / 60000;
}

// Get hour for a timezone
function getHourForTimezone(timezone: string, baseTime?: Date): number {
  const now = baseTime || new Date();
  const timeString = now.toLocaleTimeString('en-US', {
    timeZone: timezone,
    hour: '2-digit',
    hour12: false,
  });
  return parseInt(timeString.split(':')[0], 10);
}

// Get color class based on time of day
function getTimeColorClass(timezone: string, baseTime?: Date): string {
  const hour = getHourForTimezone(timezone, baseTime);
  
  // Night: 22:00 - 06:00 (10 PM - 6 AM) - black
  if (hour >= 22 || hour < 6) {
    return 'time-night';
  }
  // Early morning: 06:00 - 09:00 (6 AM - 9 AM) - yellow
  else if (hour >= 6 && hour < 9) {
    return 'time-early';
  }
  // Working hours: 09:00 - 17:00 (9 AM - 5 PM) - green
  else if (hour >= 9 && hour < 17) {
    return 'time-work';
  }
  // Late evening: 17:00 - 22:00 (5 PM - 10 PM) - yellow
  else {
    return 'time-late';
  }
}

// Sort clocks by timezone offset
function sortClocksByTimezone(clocksToSort: Clock[]): Clock[] {
  return [...clocksToSort].sort((a, b) => {
    const offsetA = getTimezoneOffset(a.timezone);
    const offsetB = getTimezoneOffset(b.timezone);
    return offsetA - offsetB;
  });
}

// Create clock card HTML
function createClockCard(clock: Clock): string {
  const time = formatTime(clock.timezone, convertedTime || undefined);
  const date = formatDate(clock.timezone, convertedTime || undefined);
  const colorClass = getTimeColorClass(clock.timezone, convertedTime || undefined);

  return `
    <div class="clock-card ${colorClass}" data-id="${clock.id}">
      <div class="clock-header">
        <div class="city-name">${clock.city}</div>
        <button class="remove-btn" onclick="removeClock('${clock.id}')">Remove</button>
      </div>
      <div class="time-display">${time}</div>
      <div class="date-display">${date}</div>
      <div class="timezone-display">${clock.timezone}</div>
    </div>
  `;
}

// Render all clocks
function renderClocks(): void {
  const grid = document.getElementById('clocksGrid');
  if (!grid) return;

  const sortedClocks = sortClocksByTimezone(clocks);
  grid.innerHTML = sortedClocks.map((clock) => createClockCard(clock)).join('');
}

// Update all clock times
function updateClocks(): void {
  const sortedClocks = sortClocksByTimezone(clocks);
  sortedClocks.forEach((clock) => {
    const card = document.querySelector(
      `.clock-card[data-id="${clock.id}"]`
    ) as HTMLElement;
    if (!card) return;

    const timeDisplay = card.querySelector('.time-display');
    const dateDisplay = card.querySelector('.date-display');

    if (timeDisplay) {
      timeDisplay.textContent = formatTime(clock.timezone, convertedTime || undefined);
    }
    if (dateDisplay) {
      dateDisplay.textContent = formatDate(clock.timezone, convertedTime || undefined);
    }

    // Update color class based on current time
    const newColorClass = getTimeColorClass(clock.timezone, convertedTime || undefined);
    card.className = 'clock-card ' + newColorClass;
  });
}

// Add clock
function addClock(city: string, timezone: string): void {
  const newClock: Clock = {
    id: generateId(),
    city,
    timezone,
  };

  clocks.push(newClock);
  saveClocks();
  renderClocks();
}

// Remove clock
function removeClock(id: string): void {
  clocks = clocks.filter((clock) => clock.id !== id);
  saveClocks();
  renderClocks();
}

// Make removeClock available globally
(window as any).removeClock = removeClock;

// Populate city select dropdown
function populateCitySelect(): void {
  const select = document.getElementById('citySelect') as HTMLSelectElement;
  if (!select) return;

  cities
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach((city) => {
      const option = document.createElement('option');
      option.value = JSON.stringify(city);
      option.textContent = city.name;
      select.appendChild(option);
    });
}

// Initialize size selector
function initSizeSelector(): void {
  const sizeSelect = document.getElementById('sizeSelect') as HTMLSelectElement;
  if (!sizeSelect) return;

  // Set initial value
  sizeSelect.value = currentSize;

  // Handle size changes
  sizeSelect.addEventListener('change', (event) => {
    const target = event.target as HTMLSelectElement;
    saveSize(target.value);
  });
}

// Initialize time converter
function initTimeConverter(): void {
  const hourSelect = document.getElementById('hourSelect') as HTMLSelectElement;
  const minuteSelect = document.getElementById('minuteSelect') as HTMLSelectElement;
  const convertBtn = document.getElementById('convertBtn');
  const clearBtn = document.getElementById('clearConvertBtn');

  if (!hourSelect || !minuteSelect || !convertBtn || !clearBtn) return;

  // Populate hour dropdown (00-23)
  for (let i = 0; i < 24; i++) {
    const option = document.createElement('option');
    option.value = i.toString();
    option.textContent = i.toString().padStart(2, '0');
    hourSelect.appendChild(option);
  }

  // Populate minute dropdown (00-59)
  for (let i = 0; i < 60; i++) {
    const option = document.createElement('option');
    option.value = i.toString();
    option.textContent = i.toString().padStart(2, '0');
    minuteSelect.appendChild(option);
  }

  // Set default to current time
  const now = new Date();
  hourSelect.value = now.getHours().toString();
  minuteSelect.value = now.getMinutes().toString();

  convertBtn.addEventListener('click', () => {
    const hours = parseInt(hourSelect.value, 10);
    const minutes = parseInt(minuteSelect.value, 10);
    
    // Create a date object with today's date and the specified time
    const now = new Date();
    convertedTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      hours,
      minutes,
      0
    );

    // Re-render all clocks with the converted time
    renderClocks();
  });

  clearBtn.addEventListener('click', () => {
    convertedTime = null;
    const now = new Date();
    hourSelect.value = now.getHours().toString();
    minuteSelect.value = now.getMinutes().toString();
    renderClocks();
  });
}

// Initialize modal
function initModal(): void {
  const modal = document.getElementById('modal');
  const addBtn = document.getElementById('addClockBtn');
  const closeBtn = document.querySelector('.close');
  const confirmBtn = document.getElementById('confirmAddBtn');
  const citySelect = document.getElementById('citySelect') as HTMLSelectElement;

  if (!modal || !addBtn || !closeBtn || !confirmBtn || !citySelect) return;

  addBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    citySelect.value = '';
  });

  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
      citySelect.value = '';
    }
  });

  confirmBtn.addEventListener('click', () => {
    const selectedValue = citySelect.value;
    if (selectedValue) {
      const cityData: CityData = JSON.parse(selectedValue);
      addClock(cityData.name, cityData.timezone);
      modal.style.display = 'none';
      citySelect.value = '';
    }
  });
}

// Initialize app
function init(): void {
  loadClocks();
  loadSize();
  populateCitySelect();
  renderClocks();
  initModal();
  initSizeSelector();
  initTimeConverter();

  // Update clocks every second (only if not in conversion mode)
  setInterval(() => {
    if (!convertedTime) {
      updateClocks();
    }
  }, 1000);
}

// Start app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
