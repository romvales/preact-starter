
export class NetworkChangeHandler {
  private register = {
    offline: this.offlineEventHandler,
    online: this.onlineEventHandler,
  }

  constructor() {

  }

  registerEvents() {
    for (const [event, handler] of Object.entries(this.register))
      window.addEventListener(event, handler)
  }

  private offlineEventHandler() {
    
  }

  private onlineEventHandler() {
    
  }

}