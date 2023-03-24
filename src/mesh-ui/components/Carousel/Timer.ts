export class Timer {
  callback: any;

  delay: number;

  timerId: any;

  constructor(callback: any, delay: number) {
    this.callback = callback;
    this.delay = delay;
  }

  pause() {
    clearInterval(this.timerId);
  }

  resume() {
    clearInterval(this.timerId);
    this.timerId = setInterval(this.callback, this.delay);
  }

  start() {
    this.resume();
  }
}
