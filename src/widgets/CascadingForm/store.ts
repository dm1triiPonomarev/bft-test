import { createEvent, createStore } from "effector";
import { FieldData, FormData } from "./types";

export const $formData = createStore<FormData>({} as FormData);
export const setFormFieldData = createEvent<FieldData>();

$formData.on(setFormFieldData, (currentState, field) => {
  return { ...currentState, [field.name]: field.value };
});
