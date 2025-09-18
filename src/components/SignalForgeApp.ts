import { LitElement, html, css } from 'lit'
import { property } from 'lit/decorators.js'

/**
 * Main SignalForge Application Component
 *
 * This is the root component that orchestrates the entire DSP application.
 * It manages the overall layout and coordinates between different subsystems.
 */
export class SignalForgeApp extends LitElement {
  @property({ type: Boolean })
  audioContextReady = false

  @property({ type: String })
  currentView = 'node-editor'

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100vh;
      background: var(--bg-primary, #1a1a1a);
      color: var(--text-primary, #ffffff);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    }

    .app-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 24px;
      background: var(--bg-secondary, #2a2a2a);
      border-bottom: 1px solid var(--border-color, #404040);
      flex-shrink: 0;
    }

    .app-title {
      font-size: 20px;
      font-weight: 600;
      color: var(--accent-color, #00bcd4);
    }

    .app-controls {
      display: flex;
      gap: 12px;
      align-items: center;
    }

    .main-content {
      flex: 1;
      display: flex;
      overflow: hidden;
    }

    .welcome-screen {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 2rem;
      text-align: center;
    }

    .welcome-title {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      background: linear-gradient(45deg, #00bcd4, #4caf50);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .welcome-subtitle {
      font-size: 1.2rem;
      opacity: 0.8;
      margin-bottom: 2rem;
    }

    .start-button {
      padding: 12px 24px;
      background: var(--accent-color, #00bcd4);
      color: white;
      border: none;
      border-radius: 6px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.2s;
    }

    .start-button:hover {
      background: var(--accent-hover, #00acc1);
    }

    .status-indicator {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
    }

    .status-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--status-color, #f44336);
    }

    .status-dot.ready {
      background: var(--success-color, #4caf50);
    }
  `

  async firstUpdated() {
    await this.initializeAudioContext()
  }

  private async initializeAudioContext() {
    try {
      // Create audio context (will be used by the audio engine)
      const AudioContextClass = window.AudioContext || window.webkitAudioContext
      if (!AudioContextClass) {
        throw new Error('Web Audio API not supported')
      }

      this.audioContextReady = true
      console.log('Audio context ready for SignalForge')
    } catch (error) {
      console.error('Failed to initialize audio context:', error)
    }
  }

  private handleStartApplication() {
    if (!this.audioContextReady) {
      console.warn('Audio context not ready')
      return
    }

    this.currentView = 'node-editor'
    console.log('Starting SignalForge node editor')
  }

  render() {
    return html`
      <div class="app-header">
        <div class="app-title">SignalForge</div>
        <div class="app-controls">
          <div class="status-indicator">
            <div class="status-dot ${this.audioContextReady ? 'ready' : ''}"></div>
            <span>Audio ${this.audioContextReady ? 'Ready' : 'Initializing'}</span>
          </div>
        </div>
      </div>

      <div class="main-content">
        ${this.currentView === 'welcome' || !this.audioContextReady ? this.renderWelcomeScreen() : this.renderNodeEditor()}
      </div>
    `
  }

  private renderWelcomeScreen() {
    return html`
      <div class="welcome-screen">
        <h1 class="welcome-title">SignalForge</h1>
        <p class="welcome-subtitle">
          Web-based Digital Signal Processing Application
        </p>
        <p style="margin-bottom: 2rem; opacity: 0.7;">
          Create and manipulate audio signals through an intuitive visual node editor interface.
        </p>
        <button
          class="start-button"
          @click=${this.handleStartApplication}
          ?disabled=${!this.audioContextReady}
        >
          ${this.audioContextReady ? 'Start Creating' : 'Initializing...'}
        </button>
      </div>
    `
  }

  private renderNodeEditor() {
    return html`
      <div style="flex: 1; display: flex; align-items: center; justify-content: center;">
        <div style="text-align: center;">
          <h2>Node Editor</h2>
          <p style="opacity: 0.7; margin-top: 1rem;">
            Node editor interface will be implemented here
          </p>
        </div>
      </div>
    `
  }
}