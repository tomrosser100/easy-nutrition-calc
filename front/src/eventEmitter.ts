import EventEmitter from "events";
import type TypedEmitter from "typed-emitter";
import type {
  AgeRange,
  ListElement,
  Nutrient,
  OrderedContribution,
  Sex,
  StoreData,
} from "./types";
import store from "./logic/store";

type Events = {
  add: (
    data: ListElement,
    callback: (response: { status: "ok" | "failed" }) => void
  ) => void;
  edit: (
    data: ListElement,
    callback: (response: { status: "ok" | "failed" }) => void
  ) => void;
  clear: (callback: (response: { status: "ok" | "failed" }) => void) => void;
  delete: (
    id: string,
    callback: (response: { status: "ok" | "failed" }) => void
  ) => void;
  retrieve: (callback: (response: StoreData) => void) => void;
  fillEdit: (id: string, callback: (response: ListElement) => void) => void;
  fillMore: (
    nutrient: Nutrient,
    callback: (response: OrderedContribution) => void
  ) => void;
  updateSex: (
    sex: Sex,
    callback: (response: { status: "ok" | "failed" }) => void
  ) => void;
  updateAgeRange: (
    ageRange: AgeRange,
    callback: (response: { status: "ok" | "failed" }) => void
  ) => void;
};

const eventEmitter = new EventEmitter() as TypedEmitter<Events>;

eventEmitter.on("clear", async (callback) => {
  const response = await store.clear();
  callback(response);
});

eventEmitter.on("add", async (data, callback) => {
  const response = await store.add(data);
  callback(response);
});

eventEmitter.on("edit", async (data, callback) => {
  const response = await store.edit(data);
  callback(response);
});

eventEmitter.on("delete", async (id, callback) => {
  const response = await store.delete(id);
  callback(response);
});

eventEmitter.on("retrieve", async (callback) => {
  const response = await store.retrieve();
  callback(response);
});

eventEmitter.on("updateSex", async (sex, callback) => {
  const response = await store.updateSex(sex);
  callback(response);
});

eventEmitter.on("updateAgeRange", async (ageRange, callback) => {
  const response = await store.updateAgeRange(ageRange);
  callback(response);
});

export default eventEmitter;
