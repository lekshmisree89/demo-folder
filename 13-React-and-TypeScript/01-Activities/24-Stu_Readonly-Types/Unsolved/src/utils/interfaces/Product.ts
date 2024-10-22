export default interface Product {
  readonly id: number;
  readonly productName: string;
  readonly productDescription: string;
  readonly price: number;
  quantity: number;
  readonly tags: string[];
  purchase?(id: number): void;

  // TODO: update this interface to match the specifications listed in the README.
}

// * A `readonly` number called `id`

// * A `readonly` string called `productName`

// * A `readonly` string called `productDescription`

// * A `readonly` number called `price`

// * A number called `quantity`

// * A `readonly` array of strings called `tags`

// * An optional method called `purchase`, which accepts a number argument of `id` and doesn't return anything.
