// JavaScript for hamburger menu toggle functionality
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
}

// Smooth scroll functionality for the CTA button
const ctaBtn = document.getElementById("cta-btn");
const portfolioSection = document.getElementById("portfolio");

if (ctaBtn && portfolioSection) {
    ctaBtn.addEventListener("click", function() {
        window.scrollTo({
            top: portfolioSection.offsetTop,
            behavior: "smooth"
        });
    });
}

// Toggle visibility of the "more text" section
const seeMoreBtn = document.getElementById("see-more-btn");
const moreText = document.getElementById("more-text");

if (seeMoreBtn && moreText) {
    seeMoreBtn.addEventListener("click", function() {
        const isVisible = moreText.style.display === "block";
        moreText.style.display = isVisible ? "none" : "block";
        this.textContent = isVisible ? "See More" : "See Less";
    });
}

// Get the "See More Posts" button
if (seeMoreBtn) {
    seeMoreBtn.addEventListener('click', function() {
        alert("Thank You For Visiting more content on my Profile");
        const newBlogPost = document.createElement('div');
        newBlogPost.classList.add('blog-item');
        newBlogPost.innerHTML = `
            <img src="https://blogger.googleusercontent.com/img/a/AVvXsEjaZ19xpxDn2usUAGav57RT1y9OJIy1O09eyRKWKn84qw6l9omw0ax9gu6sgUQnxMdacUqSIz7vnHSoc0aVxpKRTpAzFvBsiIt7Fi1QnTKuUzazYHjOnmBzD4HZsH7AFEQF3mf4eWdaSiopZ-V-MpuqHuNLnCvI_VZVGQOJUlaWvyTZ0zzpSTFNKlinTMZ5" alt="Blog 4" class="blog-img">
            <div class="blog-info">
                <h3>The Process of Our Birth</h3>
                <span class="blog-date">October 23, 2024</span>
                <p class="blog-description">wr : Nittyshry Prabhu</p>
                <a href="https://nittyshryprabhu.blogspot.com/2024/10/the-process-our-birth.html" class="blog-read-more">Read More</a>
            </div>
        `;
        document.querySelector('.blog-grid').appendChild(newBlogPost);
    });
}

// Example: Displaying a success message after clicking a contact link
const footerContact = document.querySelector('.footer-contact ul');
if (footerContact) {
    footerContact.addEventListener('click', function() {
        console.log("You clicked a contact link!");
    });
}
