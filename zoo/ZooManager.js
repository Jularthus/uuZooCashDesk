class ZooManager {
  constructor() {
    if (ZooManager.instance) {
      return ZooManager.instance;
    }

    ZooManager.instance = this;
  }

  static getInstance() {
    if (!ZooManager.instance) {
      ZooManager.instance = new ZooManager();
    }

    return ZooManager.instance;
  }
}
