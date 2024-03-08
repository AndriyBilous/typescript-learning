class Typescript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`;
  }
}

// class Car {
//   readonly model: string;
//   readonly numberOfWheels: number = 4;

//   constructor(theModel: string) {
//     this.model = theModel;
//   }
// }

class Car {
  readonly numberOfWheels: number = 4;
  constructor(readonly model: string) {
    this.model = model;
  }
}

// ----

class Animal {
  protected voice: string = "";
  public color: string = "black";

  private go() {
    console.log("go");
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
}

const cat = new Cat();
cat.setVoice("Meaw");
console.log(cat.color);
// cat.voice - wouldn`t work because of protected attribute, but we have it in Cat class and can change it by using private method `setVoice`
// cat.go() - wouldn`t work because of private attribute it can be used only in Animal class

// ----

abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render(): void {
    console.log("Component on render");
  }

  info(): string {
    return "This is info";
  }
}
