function load(selector: string, callback: () => void): void {
  if (document.body.classList.contains(selector)) {
    callback();
  }
}

export default load;
