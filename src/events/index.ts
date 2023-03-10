
import { NetworkChangeHandler } from './NetworkChangeHandler'

export function attachGlobalEvents() {
  (new NetworkChangeHandler).registerEvents()
}