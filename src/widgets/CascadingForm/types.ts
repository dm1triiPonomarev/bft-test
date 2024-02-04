export type IСountry = "РФ" | "РБ";
export type ICity = "Москва" | "Сочи" | "Минск" | "Гомель";
export type IUniversityVariant = "Технический" | "Гуманитарный";
export type ILivingVariant =
  | "Общежития"
  | "Аренда"
  | "Не интересует"
  | "Общежития + Аренда";
export type IFormFields =
  | "country"
  | "city"
  | "universityVariant"
  | "livingVariant";

export type IFormData = {
  country: IСountry;
  city: ICity;
  universityVariant: IUniversityVariant;
  livingVariant: ILivingVariant;
};

export type IFieldData = {
  name: IFormFields;
  value: IСountry | ICity | IUniversityVariant | ILivingVariant;
};
