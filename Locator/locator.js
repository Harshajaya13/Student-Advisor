// Variables
const searchBtn = document.getElementById('search-button');
const platformSelect = document.getElementById('platform-select');
const resultsContainer = document.getElementById('results-container');
const resourcesArea = document.getElementById('resources-area');
const noteArea = document.getElementById('senpai-note-area');
const storiesArea = document.getElementById('stories-area');
const loadingSpinner = document.getElementById('loading-spinner');

// Global variable to store the current topic's data
let currentTopicData = null; 

// 1. EVENT: USER CLICKS SEARCH
searchBtn.addEventListener('click', function() {
    const userInput = document.getElementById('user-topic').value.toLowerCase().trim();
    
    // Reset UI
    resultsContainer.style.display = 'block';
    loadingSpinner.style.display = 'block';
    resourcesArea.innerHTML = '';
    noteArea.innerHTML = '';
    storiesArea.innerHTML = '';
    platformSelect.value = 'all'; // Reset filter to "Show Everything"

    setTimeout(() => {
        loadingSpinner.style.display = 'none';

        if (resourcesData[userInput]) {
            // Save data to global variable so we can filter it later
            currentTopicData = resourcesData[userInput];
            
            // Render Note
            noteArea.innerHTML = `<div class="senpai-note">${currentTopicData.senpaiNote}</div>`;
            
            // Render Stories
            renderStories(currentTopicData.stories);

            // Render ALL Resources initially
            renderResources(currentTopicData.resources, 'all');

        } else {
            resourcesArea.innerHTML = `<p style="text-align:center; padding:20px;">Topic not found. Try <b>Python</b> or <b>Java</b>.</p>`;
            currentTopicData = null;
        }
    }, 600);
});

// 2. EVENT: USER CHANGES THE DROPDOWN (FILTER)
platformSelect.addEventListener('change', function() {
    if (currentTopicData) {
        const selectedCategory = this.value; // gets 'youtube', 'course', or 'all'
        
        // Clear current list
        resourcesArea.innerHTML = '';
        
        // Re-render based on selection
        renderResources(currentTopicData.resources, selectedCategory);
    }
});

// --- HELPER FUNCTIONS ---

// Function to loop through resources and display them
function renderResources(resourcesList, filter) {
    // If filter is 'all', use all resources. Else, filter by category.
    const filteredList = (filter === 'all') 
        ? resourcesList 
        : resourcesList.filter(res => res.category === filter);

    if (filteredList.length === 0) {
        resourcesArea.innerHTML = `<p style="color:#666; text-align:center;">No resources found for this category.</p>`;
        return;
    }

    filteredList.forEach((res, index) => {
        // Create unique ID for description toggle
        // We use Math.random to ensure IDs are unique if we re-render
        const uniqueId = 'desc-' + Math.floor(Math.random() * 10000);

        const card = document.createElement('div');
        card.className = 'resource-card';
        card.innerHTML = `
            <div class="card-header">
                <div>
                    <span class="platform-tag ${res.category}">${res.category.toUpperCase()}</span>
                    <h3 class="resource-title"><a href="${res.url}" target="_blank">${res.name} ↗</a></h3>
                </div>
                <button class="toggle-btn" onclick="toggleDescription('${uniqueId}', this)">+</button>
            </div>
            <div id="${uniqueId}" class="card-description">
                ${res.description}
            </div>
        `;
        resourcesArea.appendChild(card);
    });
}

// Function to render stories
function renderStories(storiesList) {
    storiesList.forEach(story => {
        storiesArea.innerHTML += `
            <div class="story-card">
                <h4 class="story-title">📖 ${story.title}</h4>
                <p>${story.text}</p>
            </div>
        `;
    });
}

// Function to Toggle Description
function toggleDescription(id, btnElement) {
    const desc = document.getElementById(id);
    
    if (desc.classList.contains('active')) {
        desc.classList.remove('active');
        btnElement.textContent = '+';
        btnElement.style.background = '#f0f2f5';
        btnElement.style.color = '#555';
    } else {
        desc.classList.add('active');
        btnElement.textContent = '-';
        btnElement.style.background = '#007aff';
        btnElement.style.color = 'white';
    }
}