import MeetingsStore from "./MeetingsStore";
import FaqStore from "./FaqStore";

class RootStore {
  meetingsStore: MeetingsStore;
  faqStore: FaqStore;

  constructor() {
    this.meetingsStore = new MeetingsStore(this);
    this.faqStore = new FaqStore(this);
  }
}

let store: RootStore | null = null;

export function initRootStore() {
  if (store === null) {
    store = new RootStore();
  }
  return store;
}

export default RootStore;
