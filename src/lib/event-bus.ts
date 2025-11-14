interface EventBus {
  on(event: string, callback: (data?: any) => void): void;
  emit(event: string, data?: any): void;
  off(event: string, callback: (data?: any) => void): void;
}

const eventBus: EventBus = {
  on(event, callback) {
    document.addEventListener(event, (e: any) => callback(e.detail));
  },
  emit(event, data) {
    document.dispatchEvent(new CustomEvent(event, { detail: data }));
  },
  off(event, callback) {
    document.removeEventListener(event, callback as EventListener);
  },
};

export default eventBus;
