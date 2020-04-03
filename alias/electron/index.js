class ElectronWindow {
  maximised = true;

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
  addListener() {}
  close() {}
}
const electronWindow = new ElectronWindow();

class Remote {
  getCurrentWindow() {
    return electronWindow
  }
}
const electronRemote = new Remote();

module.exports = {
  window: electronWindow,
  remote: electronRemote
}
