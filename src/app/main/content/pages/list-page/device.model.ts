export class Device {
  id: number;
  title: string;
  active: boolean;
  constructor(device?: { title: string; completed: boolean; id: number }) {
    device || {};
    this.id = device?.id || -1;
    this.title = device?.title || '';
    this.active = device?.completed || false;
  }
}
