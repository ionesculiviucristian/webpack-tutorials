import { greet, GreetMessage } from "./moduleB";

greet("Hello world!");

const gm = new GreetMessage();
gm.greet();
