export interface Prototype<T> {
  clone(): T;
}

export class ButtonPrototype implements Prototype<ButtonPrototype> {
  constructor(
    public width: number,
    public height: number,
    public color: string,
    public label: string,

    public styleOption: { fontSize: number; border: string}
  ) {}

  public clone(): ButtonPrototype {
    const clonedStyle = { ...this.styleOption };

    return new ButtonPrototype(
      this.width,
      this.height,
      this.color,
      this.label,
      clonedStyle
    );
  }

  public showInfo(): void {
    console.log(
      `[Button] Label: "${this.label}", Color: ${this.color}, Size: ${this.width}x${this.height}, Font: ${this.styleOption.fontSize}px`
    );
  }
}

export class ShapeRegistry {
  private items: Map<string, ButtonPrototype> = new Map();

  public register(key: string, prototype: ButtonPrototype): void {
    this.items.set(key, prototype);
  }

  public get(key: string): ButtonPrototype | undefined {
    const prototype = this.items.get(key);

    return prototype ? prototype.clone() : undefined;
  }
}