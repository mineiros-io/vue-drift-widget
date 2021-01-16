import { Drift } from './types'

declare global {
  interface Window {
    drift: Drift | undefined
  }
}
