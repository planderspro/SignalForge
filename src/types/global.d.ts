/**
 * Global type declarations for SignalForge
 */

declare global {
  interface Window {
    webkitAudioContext?: typeof AudioContext
  }
}

export {}