import { createEvent, createStore } from "effector";
import { IFieldData, IFormData } from "./types";

export const $formData = createStore<IFormData>({} as IFormData);
export const setFormData = createEvent<IFieldData>();

$formData.on(setFormData, (currentState, field) => {
  return { ...currentState, [field.name]: field.value };
});
