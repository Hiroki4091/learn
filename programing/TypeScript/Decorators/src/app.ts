function Logger(logString: string) {
  console.log("LOGGER ファクトリ");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplete(template: string, hookId: string) {
  console.log("TEMPLATE ファクトリ");
  // _ : 引数は受け取るが、必要がないということを伝える
  return function (constructor: any) {
    console.log("テンプレートを表示");
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector("h1")!.textContent = p.name;
    }
  };
}

// デコレータはクラスが定義されたときに実行される
// デコレータファクトリを使用することで、デコレータの内部で行うことをカスタマイズすることができる
// 1つのクラスに複数のデコレータを設定できる
// デコレータが実行される順番は下から上に向かって実行される(デコレータ関数が実行される順序)
// デコレータファクトリは順番に実行される
@Logger("ログ出力中 - Person")
@WithTemplete("<h1>Personオブジェクト</h1>", "app")
class Person {
  name = "John";

  constructor() {
    console.log("Personオブジェクトを作成中...");
  }
}

const pers = new Person();

console.log(pers);

// ---

function Log(target: any, propertyName: string | Symbol) {
  console.log("Property デコレータ");
  console.log(target, propertyName);
}

class Product {
  @Log
  title: string;
  private _price: number;

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error("不正な価格です。0以下は設定できません");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  getPriceWithTax(tax: number) {
    return this._price * (1 + tax);
  }
}