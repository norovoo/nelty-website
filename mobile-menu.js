/**
 * @file mobile-menu.js
 * @description Manages the mobile navigation menu functionality, providing a responsive
 * hamburger menu for smaller screens. Includes accessibility features and touch interaction.
 * 
 * Features:
 * - Hamburger menu toggle
 * - Click outside to close
 * - Escape key support
 * - ARIA attributes for accessibility
 * - Touch-friendly interactions
 * 
 * @requires DOM elements with IDs:
 * - menuToggle: The hamburger menu button
 * - mainNav: The main navigation container
 * 
 * @example
 * // HTML Structure
 * <button id="menuToggle" aria-expanded="false">
 *   <span class="menu-icon"></span>
 * </button>
 * <nav id="mainNav">
 *   <ul>...</ul>
 * </nav>
 */

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  // Exit if required elements are not found
  if (!menuToggle || !mainNav) {
    console.warn('Mobile menu elements not found. Check if IDs "menuToggle" and "mainNav" exist.');
    return;
  }

  /**
   * Handles the menu toggle button click event
   * Toggles the menu visibility and updates ARIA attributes
   * @listens click
   */
  menuToggle.addEventListener('click', function() {
    mainNav.classList.toggle('active');
    const isExpanded = mainNav.classList.contains('active');
    menuToggle.setAttribute('aria-expanded', isExpanded);
  });

  /**
   * Handles clicks outside the navigation menu
   * Closes the menu when clicking anywhere outside nav or toggle button
   * @param {MouseEvent} event - The click event object
   * @listens click
   */
  document.addEventListener('click', function(event) {
    const isClickInsideNav = mainNav.contains(event.target);
    const isClickOnToggle = menuToggle.contains(event.target);

    if (!isClickInsideNav && !isClickOnToggle && mainNav.classList.contains('active')) {
      mainNav.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });

  /**
   * Handles keyboard events for menu accessibility
   * Closes the menu when the Escape key is pressed
   * @param {KeyboardEvent} event - The keyboard event object
   * @listens keydown
   */
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' && mainNav.classList.contains('active')) {
      mainNav.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
});
