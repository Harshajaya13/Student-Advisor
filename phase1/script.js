document.addEventListener('DOMContentLoaded', () => {
    
    const gridContainer = document.getElementById('decision-grid');
    const title = document.querySelector('.intro-text h1');
    const subtitle = document.querySelector('.intro-text p');
    const cards = document.querySelectorAll('.card');

    // --- 1. THE BRAIN (Configuration) ---
    // This is where you edit your content. No need to touch HTML.
    const pathConfig = {
        'engineering': {
            title: "Select Your Branch",
            subtitle: "Projects, Coding, and Core Skills.",
            options: [
                { id: 'cse', icon: '💻', title: 'CSE', desc: 'Computer Science' },
                { id: 'csm', icon: '🤖', title: 'CSM', desc: 'AI & Machine Learning' },
                { id: 'ece', icon: '📡', title: 'ECE', desc: 'Electronics & Comm.' },
                { id: 'mech', icon: '⚙️', title: 'Mechanical', desc: 'Machines & Design' }
            ]
        },
        'gate': {
            title: "GATE Preparation",
            subtitle: "Targeting PSU Jobs & M.Tech.",
            options: [
                { id: 'gate-cs', icon: '🧮', title: 'CS & IT', desc: 'Algorithms & Logic' },
                { id: 'gate-ec', icon: '🔌', title: 'Electronics', desc: 'Circuits & Signals' },
                { id: 'gate-me', icon: '🏗️', title: 'Mechanical', desc: 'Thermodynamics' }
            ]
        },
        'govt-prep': {
            title: "Government Exams",
            subtitle: "Stability, Service, and Rank.",
            options: [
                { id: 'ssc', icon: '🇮🇳', title: 'SSC CGL', desc: 'Staff Selection' },
                { id: 'bank', icon: '🏦', title: 'Banking', desc: 'PO & Clerk' },
                { id: 'rail', icon: '🚆', title: 'Railways', desc: 'RRB NTPC' }
            ]
        }
        // You can easily add 'school', 'interview', etc. here later
    };

    // --- 2. THE LISTENER ---
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            
            if (pathConfig[category]) {
                morphInterface(pathConfig[category]);
            } else {
                alert("This section is under construction! 🚧");
            }
        });
    });

    // --- 3. THE MORPHING ENGINE ---
    function morphInterface(data) {
        // Step 1: Fade Out
        gridContainer.style.opacity = '0';
        document.querySelector('.intro-text').style.opacity = '0';

        setTimeout(() => {
            // Step 2: Update Data
            title.innerText = data.title;
            subtitle.innerText = data.subtitle;

            // Step 3: Generate New Cards Dynamically
            let htmlContent = '';
            
            data.options.forEach(opt => {
                htmlContent += `
                    <div class="card sub-card" id="${opt.id}" onclick="handleSubSelection('${opt.id}')">
                        <div class="icon">${opt.icon}</div>
                        <h3>${opt.title}</h3>
                        <p>${opt.desc}</p>
                    </div>
                `;
            });

            // Add a Back Button
            htmlContent += `
                <div class="card back-btn" onclick="location.reload()">
                    <div class="icon">⬅️</div>
                    <h3>Go Back</h3>
                    <p>Main Menu</p>
                </div>
            `;

            gridContainer.innerHTML = htmlContent;

            // Step 4: Fade In
            gridContainer.style.opacity = '1';
            document.querySelector('.intro-text').style.opacity = '1';
            
        }, 300); // Wait for fade out
    }
});

// --- 4. THE FINAL DESTINATION ---
function handleSubSelection(id) {
    // This is where we link to the actual dashboard folders later
    console.log("User selected sub-branch:", id);
    alert(`Launching Dashboard for: ${id.toUpperCase()}`);
    // Example: window.location.href = `/dashboards/${id}/index.html`;
}