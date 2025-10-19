interface Clock {
  id: string;
  city: string;
  timezone: string;
}

interface CityData {
  name: string;
  timezone: string;
}

// Comprehensive list of cities with their timezones
const cities: CityData[] = [
  // North America
  { name: 'Anchorage', timezone: 'America/Anchorage' },
  { name: 'Atlanta', timezone: 'America/New_York' },
  { name: 'Boston', timezone: 'America/New_York' },
  { name: 'Calgary', timezone: 'America/Edmonton' },
  { name: 'Chicago', timezone: 'America/Chicago' },
  { name: 'Dallas', timezone: 'America/Chicago' },
  { name: 'Denver', timezone: 'America/Denver' },
  { name: 'Detroit', timezone: 'America/Detroit' },
  { name: 'Guadalajara', timezone: 'America/Mexico_City' },
  { name: 'Havana', timezone: 'America/Havana' },
  { name: 'Honolulu', timezone: 'Pacific/Honolulu' },
  { name: 'Houston', timezone: 'America/Chicago' },
  { name: 'Las Vegas', timezone: 'America/Los_Angeles' },
  { name: 'Los Angeles', timezone: 'America/Los_Angeles' },
  { name: 'Mexico City', timezone: 'America/Mexico_City' },
  { name: 'Miami', timezone: 'America/New_York' },
  { name: 'Minneapolis', timezone: 'America/Chicago' },
  { name: 'Montreal', timezone: 'America/Toronto' },
  { name: 'New York', timezone: 'America/New_York' },
  { name: 'Ottawa', timezone: 'America/Toronto' },
  { name: 'Philadelphia', timezone: 'America/New_York' },
  { name: 'Phoenix', timezone: 'America/Phoenix' },
  { name: 'Portland', timezone: 'America/Los_Angeles' },
  { name: 'San Francisco', timezone: 'America/Los_Angeles' },
  { name: 'Seattle', timezone: 'America/Los_Angeles' },
  { name: 'Toronto', timezone: 'America/Toronto' },
  { name: 'Vancouver', timezone: 'America/Vancouver' },
  { name: 'Washington DC', timezone: 'America/New_York' },
  { name: 'Winnipeg', timezone: 'America/Winnipeg' },
  
  // Central & South America
  { name: 'Bogotá', timezone: 'America/Bogota' },
  { name: 'Buenos Aires', timezone: 'America/Argentina/Buenos_Aires' },
  { name: 'Caracas', timezone: 'America/Caracas' },
  { name: 'Lima', timezone: 'America/Lima' },
  { name: 'Montevideo', timezone: 'America/Montevideo' },
  { name: 'Panama City', timezone: 'America/Panama' },
  { name: 'Quito', timezone: 'America/Guayaquil' },
  { name: 'Rio de Janeiro', timezone: 'America/Sao_Paulo' },
  { name: 'Santiago', timezone: 'America/Santiago' },
  { name: 'São Paulo', timezone: 'America/Sao_Paulo' },
  
  // Europe
  { name: 'Amsterdam', timezone: 'Europe/Amsterdam' },
  { name: 'Athens', timezone: 'Europe/Athens' },
  { name: 'Barcelona', timezone: 'Europe/Madrid' },
  { name: 'Belfast', timezone: 'Europe/London' },
  { name: 'Belgrade', timezone: 'Europe/Belgrade' },
  { name: 'Berlin', timezone: 'Europe/Berlin' },
  { name: 'Bern', timezone: 'Europe/Zurich' },
  { name: 'Brussels', timezone: 'Europe/Brussels' },
  { name: 'Bucharest', timezone: 'Europe/Bucharest' },
  { name: 'Budapest', timezone: 'Europe/Budapest' },
  { name: 'Copenhagen', timezone: 'Europe/Copenhagen' },
  { name: 'Dublin', timezone: 'Europe/Dublin' },
  { name: 'Edinburgh', timezone: 'Europe/London' },
  { name: 'Frankfurt', timezone: 'Europe/Berlin' },
  { name: 'Geneva', timezone: 'Europe/Zurich' },
  { name: 'Helsinki', timezone: 'Europe/Helsinki' },
  { name: 'Istanbul', timezone: 'Europe/Istanbul' },
  { name: 'Kyiv', timezone: 'Europe/Kyiv' },
  { name: 'Lisbon', timezone: 'Europe/Lisbon' },
  { name: 'London', timezone: 'Europe/London' },
  { name: 'Madrid', timezone: 'Europe/Madrid' },
  { name: 'Manchester', timezone: 'Europe/London' },
  { name: 'Milan', timezone: 'Europe/Rome' },
  { name: 'Moscow', timezone: 'Europe/Moscow' },
  { name: 'Munich', timezone: 'Europe/Berlin' },
  { name: 'Oslo', timezone: 'Europe/Oslo' },
  { name: 'Paris', timezone: 'Europe/Paris' },
  { name: 'Prague', timezone: 'Europe/Prague' },
  { name: 'Reykjavik', timezone: 'Atlantic/Reykjavik' },
  { name: 'Riga', timezone: 'Europe/Riga' },
  { name: 'Rome', timezone: 'Europe/Rome' },
  { name: 'Sofia', timezone: 'Europe/Sofia' },
  { name: 'Stockholm', timezone: 'Europe/Stockholm' },
  { name: 'Tallinn', timezone: 'Europe/Tallinn' },
  { name: 'Vienna', timezone: 'Europe/Vienna' },
  { name: 'Vilnius', timezone: 'Europe/Vilnius' },
  { name: 'Warsaw', timezone: 'Europe/Warsaw' },
  { name: 'Zurich', timezone: 'Europe/Zurich' },
  
  // Africa
  { name: 'Accra', timezone: 'Africa/Accra' },
  { name: 'Addis Ababa', timezone: 'Africa/Addis_Ababa' },
  { name: 'Algiers', timezone: 'Africa/Algiers' },
  { name: 'Cairo', timezone: 'Africa/Cairo' },
  { name: 'Cape Town', timezone: 'Africa/Johannesburg' },
  { name: 'Casablanca', timezone: 'Africa/Casablanca' },
  { name: 'Dakar', timezone: 'Africa/Dakar' },
  { name: 'Dar es Salaam', timezone: 'Africa/Dar_es_Salaam' },
  { name: 'Johannesburg', timezone: 'Africa/Johannesburg' },
  { name: 'Kampala', timezone: 'Africa/Kampala' },
  { name: 'Khartoum', timezone: 'Africa/Khartoum' },
  { name: 'Kinshasa', timezone: 'Africa/Kinshasa' },
  { name: 'Lagos', timezone: 'Africa/Lagos' },
  { name: 'Nairobi', timezone: 'Africa/Nairobi' },
  { name: 'Tunis', timezone: 'Africa/Tunis' },
  
  // Middle East
  { name: 'Abu Dhabi', timezone: 'Asia/Dubai' },
  { name: 'Amman', timezone: 'Asia/Amman' },
  { name: 'Baghdad', timezone: 'Asia/Baghdad' },
  { name: 'Beirut', timezone: 'Asia/Beirut' },
  { name: 'Damascus', timezone: 'Asia/Damascus' },
  { name: 'Doha', timezone: 'Asia/Qatar' },
  { name: 'Dubai', timezone: 'Asia/Dubai' },
  { name: 'Jerusalem', timezone: 'Asia/Jerusalem' },
  { name: 'Kuwait City', timezone: 'Asia/Kuwait' },
  { name: 'Muscat', timezone: 'Asia/Muscat' },
  { name: 'Riyadh', timezone: 'Asia/Riyadh' },
  { name: 'Tehran', timezone: 'Asia/Tehran' },
  { name: 'Tel Aviv', timezone: 'Asia/Tel_Aviv' },
  
  // Asia
  { name: 'Almaty', timezone: 'Asia/Almaty' },
  { name: 'Bangkok', timezone: 'Asia/Bangkok' },
  { name: 'Beijing', timezone: 'Asia/Shanghai' },
  { name: 'Bengaluru', timezone: 'Asia/Kolkata' },
  { name: 'Chennai', timezone: 'Asia/Kolkata' },
  { name: 'Colombo', timezone: 'Asia/Colombo' },
  { name: 'Delhi', timezone: 'Asia/Kolkata' },
  { name: 'Dhaka', timezone: 'Asia/Dhaka' },
  { name: 'Hanoi', timezone: 'Asia/Ho_Chi_Minh' },
  { name: 'Ho Chi Minh City', timezone: 'Asia/Ho_Chi_Minh' },
  { name: 'Hong Kong', timezone: 'Asia/Hong_Kong' },
  { name: 'Hyderabad', timezone: 'Asia/Kolkata' },
  { name: 'Jakarta', timezone: 'Asia/Jakarta' },
  { name: 'Karachi', timezone: 'Asia/Karachi' },
  { name: 'Kathmandu', timezone: 'Asia/Kathmandu' },
  { name: 'Kolkata', timezone: 'Asia/Kolkata' },
  { name: 'Kuala Lumpur', timezone: 'Asia/Kuala_Lumpur' },
  { name: 'Lahore', timezone: 'Asia/Karachi' },
  { name: 'Manila', timezone: 'Asia/Manila' },
  { name: 'Mumbai', timezone: 'Asia/Kolkata' },
  { name: 'Osaka', timezone: 'Asia/Tokyo' },
  { name: 'Pune', timezone: 'Asia/Kolkata' },
  { name: 'Pyongyang', timezone: 'Asia/Pyongyang' },
  { name: 'Seoul', timezone: 'Asia/Seoul' },
  { name: 'Shanghai', timezone: 'Asia/Shanghai' },
  { name: 'Shenzhen', timezone: 'Asia/Shanghai' },
  { name: 'Singapore', timezone: 'Asia/Singapore' },
  { name: 'Taipei', timezone: 'Asia/Taipei' },
  { name: 'Tashkent', timezone: 'Asia/Tashkent' },
  { name: 'Tbilisi', timezone: 'Asia/Tbilisi' },
  { name: 'Tokyo', timezone: 'Asia/Tokyo' },
  { name: 'Ulaanbaatar', timezone: 'Asia/Ulaanbaatar' },
  { name: 'Vladivostok', timezone: 'Asia/Vladivostok' },
  { name: 'Yangon', timezone: 'Asia/Yangon' },
  { name: 'Yekaterinburg', timezone: 'Asia/Yekaterinburg' },
  
  // Oceania
  { name: 'Adelaide', timezone: 'Australia/Adelaide' },
  { name: 'Auckland', timezone: 'Pacific/Auckland' },
  { name: 'Brisbane', timezone: 'Australia/Brisbane' },
  { name: 'Canberra', timezone: 'Australia/Sydney' },
  { name: 'Christchurch', timezone: 'Pacific/Auckland' },
  { name: 'Darwin', timezone: 'Australia/Darwin' },
  { name: 'Fiji', timezone: 'Pacific/Fiji' },
  { name: 'Guam', timezone: 'Pacific/Guam' },
  { name: 'Melbourne', timezone: 'Australia/Melbourne' },
  { name: 'Perth', timezone: 'Australia/Perth' },
  { name: 'Port Moresby', timezone: 'Pacific/Port_Moresby' },
  { name: 'Sydney', timezone: 'Australia/Sydney' },
  { name: 'Wellington', timezone: 'Pacific/Auckland' },
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
