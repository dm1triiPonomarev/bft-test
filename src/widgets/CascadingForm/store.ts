import { createEvent, createStore } from "effector";
import { FieldData, FormData } from "./types";

const defaultStateValue = {
  country: "",
  city: "",
  universityVariant: "",
  livingVariant: "",
  faculty: "",
};

export const $formData = createStore<FormData>(defaultStateValue as FormData);
export const setFormFieldData = createEvent<FieldData>();

$formData.on(setFormFieldData, (currentState, field) => {
  return { ...currentState, [field.name]: field.value };
});
