class Modal {
  constructor(options) {
    this.title = options.title || "标题";
    this.content = options.content || "内容";
    this.onConfirm = options.onConfirm;
    this.onCancel = options.onCancel;
    this.init();
    this.event();
  }
  init() {
    this.panel = document.createElement("div");
    this.panel.className = "modal";
    document.body.appendChild(this.panel);
    const title = document.createElement("p");
    this.titleEle = title;
    title.innerHTML = this.title;
    this.panel.appendChild(title);
    const content = document.createElement("p");
    content.innerHTML = this.content;
    this.panel.appendChild(content);
    const confirmButton = document.createElement("button");
    this.confirmButton = confirmButton;
    confirmButton.className = "button confirm-button";
    confirmButton.innerHTML = "确定";
    this.panel.appendChild(confirmButton);
    const cancelButton = document.createElement("button");
    this.cancelButton = cancelButton;
    cancelButton.className = "button cancel-button";
    cancelButton.innerHTML = "取消";
    this.panel.appendChild(cancelButton);
  }
  event() {
    this.confirmButton.addEventListener("click", () => {
      this.onConfirm();
      this.hide();
    });
    this.cancelButton.addEventListener("click", () => {
      this.onCancel();
      this.hide();
    });
  }
  hide() {
    this.panel.style.display = "none";
  }
  show() {
    this.panel.style.display = "block";
  }
}
class ContentOnlyModal extends Modal {
  init() {
    super.init();
    this.titleEle.parentNode.removeChild(this.titleEle);
  }
}

class XModal extends Modal {
  init() {
    super.init();
    const x = document.createElement("span");
    this.x = x;
    x.innerHTML = "X";
    x.className = "close";
    this.panel.appendChild(x);
  }
  event() {
    super.event();
    this.x.addEventListener("click", () => {
      this.onCancel();
      this.hide();
    });
  }
}
