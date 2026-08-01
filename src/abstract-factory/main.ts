import { GUIFactory, WindowsFactory, MacFactory, Button, Checkbox } from "./abstract-factory";

class Application {
  private button: Button;
  private checkbox: Checkbox;

  constructor(factory: GUIFactory) {
    this.button = factory.createButton();
    this.checkbox = factory.createCheckbox();
  }

  public renderUI(): void {
    this.button.render();
    this.checkbox.render();
    this.button.onClick(() => console.log('ボタンが押されました'));
  }
}

console.log('=== Windows環境でアプリを起動 ===');
const windowsApp = new Application(new WindowsFactory());
windowsApp.renderUI();

console.log('\n=== Mac環境でアプリを起動 ===');
const macApp = new Application(new MacFactory());
macApp.renderUI();