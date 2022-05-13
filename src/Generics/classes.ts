class BasicPriceClass<PriceType> {
  constructor(public price: PriceType) {
    this.price = price;
  }

  public getPrice():PriceType {
    return this.price;
  }
}

let myGenericInstance = new BasicPriceClass<string>('500');

