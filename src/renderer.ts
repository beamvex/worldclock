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

// Generate unique ID
function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// Format time for a timezone
function formatTime(timezone: string): string {
  const now = new Date();
  return now.toLocaleTimeString('en-US', {
    timeZone: timezone,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });
}

// Format date for a timezone
function formatDate(timezone: string): string {
  const now = new Date();
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
  const time = formatTime(clock.timezone);
  const date = formatDate(clock.timezone);

  return `
    <div class="clock-card" data-id="${clock.id}">
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
      timeDisplay.textContent = formatTime(clock.timezone);
    }
    if (dateDisplay) {
      dateDisplay.textContent = formatDate(clock.timezone);
    }
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
  populateCitySelect();
  renderClocks();
  initModal();

  // Update clocks every second
  setInterval(updateClocks, 1000);
}

// Start app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
