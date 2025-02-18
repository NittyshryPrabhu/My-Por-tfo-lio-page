// JavaScript for hamburger menu toggle functionality
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});


// Smooth scroll functionality for the CTA button
document.getElementById("cta-btn").addEventListener("click", function() {
    window.scrollTo({
        top: document.getElementById("portfolio").offsetTop,
        behavior: "smooth"
    });
});



// // Toggle visibility of the "more text" section
// document.getElementById("see-more-btn").addEventListener("click", function() {
//     const moreText = document.getElementById("more-text");
//     moreText.style.display = (moreText.style.display === "block") ? "none" : "block";
//     this.textContent = (moreText.style.display === "block") ? "See Less" : "See More";
// });


// // JavaScript for portfolio modal functionality

// // Get all portfolio items
// const portfolioItems = document.querySelectorAll('.portfolio-item');

// // Get modal elements
// const modal = document.getElementById('project-modal');
// const modalTitle = document.getElementById('modal-title');
// const modalImage = document.getElementById('modal-image');
// const modalDescription = document.getElementById('modal-description');
// const closeModalButton = document.getElementById('close-modal');

// // Open modal on clicking a portfolio item
// portfolioItems.forEach(item => {
//     item.addEventListener('click', function() {
//         const projectId = item.getAttribute('data-project');
        
//         // Dynamically update the modal content based on the clicked project
//         modalTitle.textContent = `Project ${projectId}`;
//         modalImage.src = `project${projectId}.jpg`; // assuming images named as 'project1.jpg', etc.
//         modalDescription.textContent = `Details and description for Project ${projectId}.`;
        
//         // Show the modal
//         modal.style.display = 'flex';
//     });
// });

// // Close the modal when user clicks on the close button
// closeModalButton.addEventListener('click', function() {
//     modal.style.display = 'none';
// });

// // Close the modal if user clicks anywhere outside the modal content
// window.addEventListener('click', function(event) {
//     if (event.target === modal) {
//         modal.style.display = 'none';
//     }
// });



// // Get all testimonial elements and buttons
// const testimonials = document.querySelectorAll('.testimonial');
// const prevButton = document.getElementById('prev-btn');
// const nextButton = document.getElementById('next-btn');

// // Initial index for testimonial carousel
// let currentIndex = 0;

// // Show the first testimonial on load
// testimonials[currentIndex].classList.add('show');

// // Function to show the next testimonial
// function showNextTestimonial() {
//     testimonials[currentIndex].classList.remove('show');
//     currentIndex = (currentIndex + 1) % testimonials.length;
//     testimonials[currentIndex].classList.add('show');
// }

// // Function to show the previous testimonial
// function showPrevTestimonial() {
//     testimonials[currentIndex].classList.remove('show');
//     currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
//     testimonials[currentIndex].classList.add('show');
// }

// // Add event listeners to the buttons
// nextButton.addEventListener('click', showNextTestimonial);
// prevButton.addEventListener('click', showPrevTestimonial);



// Get the "See More Posts" button
const seeMoreBtn = document.getElementById('see-more-btn');

// Simulate loading more blog posts dynamically
seeMoreBtn.addEventListener('click', function() {
    // Here, we can add more blog items by fetching data from a database or API (simulation)
    alert("Thank You For Visiting more content on my Profile");

    // For example, we could dynamically add another blog post here:
    const newBlogPost = document.createElement('div');
    newBlogPost.classList.add('blog-item');
    newBlogPost.innerHTML = `
        <img src="https://blogger.googleusercontent.com/img/a/AVvXsEjaZ19xpxDn2usUAGav57RT1y9OJIy1O09eyRKWKn84qw6l9omw0ax9gu6sgUQnxMdacUqSIz7vnHSoc0aVxpKRTpAzFvBsiIt7Fi1QnTKuUzazYHjOnmBzD4HZsH7AFEQF3mf4eWdaSiopZ-V-MpuqHuNLnCvI_VZVGQOJUlaWvyTZ0zzpSTFNKlinTMZ5" alt="Blog 4" class="blog-img">
        <div class="blog-info">
            <h3> The Process of Our Birth</h3>
            <span class="blog-date">October 23, 2024</span>
            <p class="blog-description">
               Our Birth

             wr : Nittyshry Prabhu
            </p>
            <a href="https://nittyshryprabhu.blogspot.com/2024/10/the-process-our-birth.html" class="blog-read-more">Read More</a>
        </div>
    `;

    // Append the new blog post to the blog grid
    document.querySelector('.blog-grid').appendChild(newBlogPost);
});



// // Get elements for form validation
// const contactForm = document.getElementById('contact-form');
// const submitBtn = document.getElementById('submit-btn');
// const successMessage = document.getElementById('success-msg');

// // Function to handle form submission
// contactForm.addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent the default form submission
    
//     // Form data
//     const formData = new FormData(contactForm);

//     // Simple client-side validation (checking if fields are not empty)
//     if (!formData.get('name') || !formData.get('email') || !formData.get('message')) {
//         alert("All fields are required!");
//         return;
//     }

//     // Simulating a successful submission (usually would be a real API request)
//     // Show success message
//     successMessage.style.display = 'block';

//     // Reset form after 3 seconds
//     setTimeout(function () {
//         contactForm.reset(); // Reset the form
//         successMessage.style.display = 'none'; // Hide success message
//     }, 3000);
// });



// Example: Displaying a success message after clicking a contact link
document.querySelector('.footer-contact ul').addEventListener('click', function() {
    console.log("You clicked a contact link!");
});

