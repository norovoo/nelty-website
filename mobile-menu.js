/**
 * Mobile Menu Toggle Functionality
 * Handles hamburger menu interaction for mobile devices
 */

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  if (!menuToggle || !mainNav) return;

  // Toggle menu when clicking the hamburger button
  menuToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');
    const isExpanded = mainNav.classList.contains('active');
    menuToggle.setAttribute('aria-expanded', isExpanded);
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    const isClickInsideNav = mainNav.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);

    if (!isClickInsideNav && !isClickOnToggle && mainNav.classList.contains('active')) {
      mainNav.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Close menu when pressing ESC key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && mainNav.classList.contains('active')) {
      mainNav.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
});
