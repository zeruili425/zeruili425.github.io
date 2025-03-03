// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Example project data
const projects = [
    {
        title: 'Project 1',
        description: 'Description of project 1',
        image: 'path/to/image1.jpg',
        link: '#'
    },
    // Add more projects here
];

// Example blog posts data
const blogPosts = [
    {
        title: 'Blog Post 1',
        date: '2024-01-01',
        excerpt: 'This is a preview of blog post 1...',
        link: '#'
    },
    // Add more blog posts here
];

// Function to render projects
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}">Learn More</a>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Function to render blog posts
function renderBlogPosts() {
    const blogContainer = document.querySelector('.blog-posts');
    blogPosts.forEach(post => {
        const blogPost = document.createElement('article');
        blogPost.className = 'blog-post';
        blogPost.innerHTML = `
            <h3>${post.title}</h3>
            <time>${post.date}</time>
            <p>${post.excerpt}</p>
            <a href="${post.link}">Read More</a>
        `;
        blogContainer.appendChild(blogPost);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderProjects();
    renderBlogPosts();
});

function unlockExperience() {
    const card = document.getElementById('tiktok-card');
    const overlay = card.querySelector('.lock-overlay');
    const achievementCards = card.querySelectorAll('.achievement-card');
    
    // Fade out the lock overlay
    overlay.style.opacity = '0';
    
    // Remove the overlay after animation
    setTimeout(() => {
        overlay.style.display = 'none';
        card.classList.remove('locked');
        
        // Animate achievement cards one by one
        achievementCards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('fade-in');
            }, index * 200); // 200ms delay between each card
        });
        
        // Play unlock sound (optional)
        const unlockSound = new Audio('sounds/unlock.mp3');
        unlockSound.volume = 0.5;
        unlockSound.play().catch(() => {
            // Handle browsers that block autoplay
            console.log('Sound autoplay blocked');
        });
        
        // Add confetti effect
        createConfetti();
    }, 500);
}

function createConfetti() {
    const colors = ['#FE2C55', '#FF0000', '#ffffff'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
        confetti.style.opacity = Math.random();
        document.body.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}

// Add confetti styles dynamically
const style = document.createElement('style');
style.textContent = `
    .confetti {
        position: fixed;
        top: -10px;
        width: 10px;
        height: 10px;
        pointer-events: none;
        animation: fall linear forwards;
        z-index: 1000;
    }
    
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
        }
    }
`;
document.head.appendChild(style); 