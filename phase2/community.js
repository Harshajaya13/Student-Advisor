document.addEventListener('DOMContentLoaded', () => {
    
    const feedContainer = document.getElementById('project-feed');

    // --- MOCK DATA (The "Database") ---
    // In a real app, this comes from your Backend API (Node/Python)
    const projects = [
        {
            user: "Aravind K.",
            college: "Tier-3 Engineering College (Remote)",
            role: "Looking for Internship",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aravind",
            image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&auto=format&fit=crop&q=60", // Code screen
            title: "AI Chatbot for Healthcare",
            stack: ["fab fa-python", "fab fa-aws", "fab fa-react"], // FontAwesome classes
            stats: { leetcode: "Top 15%", github: "30 Commits/wk" },
            badge: "🏆 Hackathon Winner",
            links: { linkedin: "#", github: "#" }
        },
        {
            user: "Sneha R.",
            college: "Gitam University",
            role: "Poster Designer",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sneha",
            image: "https://images.unsplash.com/photo-1626785774573-4b799314346d?w=800&auto=format&fit=crop&q=60", // UI Design
            title: "College Fest UI Kit",
            stack: ["fab fa-figma", "fab fa-html5", "fab fa-css3"],
            stats: { leetcode: "N/A", github: "10 Repos" },
            badge: "🎨 Design Lead",
            links: { linkedin: "#", github: "#" }
        },
        {
            user: "Rahul M.",
            college: "NIT Warangal",
            role: "Full Stack Dev",
            avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60", // Laptop
            title: "E-Commerce Aggregator",
            stack: ["fab fa-node", "fab fa-react", "fas fa-database"],
            stats: { leetcode: "Rank 1400", github: "Emerald Badge" },
            badge: "💎 Top Contributor",
            links: { linkedin: "#", github: "#" }
        }
    ];

    // --- RENDER ENGINE ---
    function renderFeed(data) {
        feedContainer.innerHTML = ''; // Clear feed

        data.forEach(project => {
            const card = document.createElement('div');
            card.classList.add('project-card');

            // Icon HTML generation
            const stackIcons = project.stack.map(iconClass => `<i class="${iconClass} tech-icon"></i>`).join('');

            card.innerHTML = `
                <div class="card-header">
                    <img src="${project.avatar}" class="user-avatar" alt="User">
                    <div class="user-info">
                        <h4>${project.user}</h4>
                        <p>${project.college}</p>
                    </div>
                    ${project.badge ? `<span class="badge">${project.badge}</span>` : ''}
                </div>
                
                <img src="${project.image}" class="card-visual" alt="Project Screenshot">
                
                <div class="stats-bar">
                    <span>⚡ ${project.stats.leetcode}</span>
                    <span>🐱 ${project.stats.github}</span>
                    <span>🔥 ${project.role}</span>
                </div>

                <div class="card-footer">
                    <div class="tech-stack">
                        ${stackIcons}
                    </div>
                    <div class="action-buttons">
                        <button class="btn btn-secondary" onclick="window.open('${project.links.github}')">
                            <i class="fab fa-github"></i> View Code
                        </button>
                        <button class="btn btn-primary" onclick="window.open('${project.links.linkedin}')">
                            <i class="fab fa-linkedin"></i> Connect
                        </button>
                    </div>
                </div>
            `;

            feedContainer.appendChild(card);
        });
    }

    // Initial Load
    renderFeed(projects);

    // --- SEARCH/FILTER LOGIC (Simple Client-Side) ---
    document.getElementById('search-input').addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        const filtered = projects.filter(p => 
            p.title.toLowerCase().includes(term) || 
            p.stack.some(s => s.includes(term))
        );
        renderFeed(filtered);
    });
});