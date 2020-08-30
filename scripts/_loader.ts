interface Parameters {
  bodyClass: string;
  callback: () => void;
}

function load(bodyClass, callback): void {
  if (bodyHasClass(bodyClass)) {
    callback(bodyClass);
  }
}

const bodyHasClass = (selector: string): boolean => {
  return document.body.classList.contains(selector);
};

export default load;
