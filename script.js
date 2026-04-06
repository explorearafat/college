// Home পেজের বাটনে ক্লিক করলে মেসেজ দেখাবে
const welcomeBtn = document.getElementById('welcomeBtn');
if (welcomeBtn) {
    welcomeBtn.addEventListener('click', function() {
        alert('আমাদের ওয়েবসাইটে আসার জন্য ধন্যবাদ!');
    });
}

// Contact ফর্ম সাবমিট করলে মেসেজ দেখাবে
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // পেজ রিলোড হওয়া বন্ধ করবে
        alert('আপনার মেসেজটি সফলভাবে পাঠানো হয়েছে!');
        contactForm.reset(); // ফর্ম খালি করে দিবে
    });
}
