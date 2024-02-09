const techFaculties = ["Математика", "Физика"];
const humanitarianFaculties = ["История", "Философия"];

const facultyList = {
  Технический: techFaculties,
  Гуманитарный: humanitarianFaculties,
};

export const defaultFormValue = {
  country: ["РФ", "РБ"],
};

export const russianFormValues = {
  city: ["Москва", "Сочи"],
  universityVariant: ["Технический", "Гуманитарный"],
  livingVariant: ["Общежития", "Аренда", "Не интересует", "Общежития + Аренда"],
  faculty: facultyList,
};

export const belarusFormValues = {
  city: ["Минск", "Гомель"],
  universityVariant: ["Технический", "Гуманитарный"],
  livingVariant: ["Общежития", "Не интересует"],
  faculty: facultyList,
};

export const countriesList = {
  РФ: russianFormValues,
  РБ: belarusFormValues,
};
