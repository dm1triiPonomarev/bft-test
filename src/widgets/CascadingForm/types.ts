export type СountryVariant = "РФ" | "РБ";
export type CityVariant = "Москва" | "Сочи" | "Минск" | "Гомель";
export type UniversityVariant = "Технический" | "Гуманитарный";
export type LivingVariant =
  | "Общежития"
  | "Аренда"
  | "Не интересует"
  | "Общежития + Аренда";
export type FacultyVariant = "Математика" | "Физика" | "История" | "Философия";

export type FormData = {
  country: СountryVariant;
  city: CityVariant;
  universityVariant: UniversityVariant;
  livingVariant: LivingVariant;
  faculty: FacultyVariant;
};

export type FormFields = keyof FormData;

export type FieldData = {
  name: FormFields;
  value:
    | СountryVariant
    | CityVariant
    | UniversityVariant
    | LivingVariant
    | FacultyVariant
    | "";
};
