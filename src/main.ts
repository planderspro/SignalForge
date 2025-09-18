/**
 * SignalForge - Web-based Digital Signal Processing Application
 * Main entry point
 */

import { SignalForgeApp } from './components/SignalForgeApp.js'

// Register the main application component
customElements.define('signalforge-app', SignalForgeApp)

// Initialize the application
function init() {
  const appContainer = document.getElementById('app')
  if (!appContainer) {
    throw new Error('App container not found')
  }

  // Clear loading state
  appContainer.innerHTML = ''

  // Create and mount the main application
  const app = document.createElement('signalforge-app')
  appContainer.appendChild(app)

  console.log('SignalForge initialized successfully')
}

// Wait for DOM to be ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init)
} else {
  init()
}

// Check for Web Audio API support
if (!window.AudioContext && !window.webkitAudioContext) {
  console.error('Web Audio API is not supported in this browser')
  const appContainer = document.getElementById('app')
  if (appContainer) {
    appContainer.innerHTML = `
      <div style="padding: 2rem; text-align: center;">
        <h1>Browser Not Supported</h1>
        <p>SignalForge requires a modern browser with Web Audio API support.</p>
        <p>Please use Chrome, Firefox, Safari, or Edge.</p>
      </div>
    `
  }
}