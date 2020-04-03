class ElectronWindow {
  constructor() {
    this.maximised = true;
  }

  isMaximized() {
    return this.maximised;
  }

  unmaximize() {
    this.maximised = false;
  }

  maximize() {
    this.maximised = true;
  }
  
  minimize() {}
  isMaximizable() {}
  isFocused() { return true }
  addListener() {}
  removeListener() {}
  on() {}
  close() {}
  getBounds() {
    return {
      x: null,
      y: null
    }
  }
  setBounds() {}
}
const electronWindow = new ElectronWindow();

class Screen {
  getDisplayNearestPoint() {
    return {
      workArea: null
    }
  }
}
const electronScreen = new Screen();

class Remote {
  getCurrentWindow() {
    return electronWindow
  }
}
const electronRemote = new Remote();

module.exports = {
  window: electronWindow,
  remote: electronRemote,
  screen: electronScreen,
}
