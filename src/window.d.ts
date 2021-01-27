import { Drift } from './drift'

declare global {
  interface Window {
    drift?: Drift
  }
}
