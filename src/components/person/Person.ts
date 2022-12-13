import IPerson from "./IPerson";

const MAX_AGE = 100;

export default class Person implements IPerson {
  constructor(public name: string, public age: number) {}
}

function makeRandomNumber(max: number = MAX_AGE): number {
  return Math.ceil(Math.random() * max);
}

export const makePerson = (name: string, age: number = makeRandomNumber()) => ({
  name,
  age
});
