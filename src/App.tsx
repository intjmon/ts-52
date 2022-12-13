import "./styles.css";
import IPerson from "./components/person/IPerson";
import Person, { makePerson } from "./components/person/Person";
import Chance from "chance";
import * as R from "ramda";

const chance = new Chance();
const persons: IPerson[] = R.range(0, 2).map(
  (n: number) => new Person(chance.name(), chance.age())
);

const testMakePerson = (): void => {
  const jane: IPerson = makePerson("Jane");
  const jack: IPerson = makePerson("Jack");
  console.log(jane, jack);
};

export default function App() {
  //testMakePerson();
  console.log(persons);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
