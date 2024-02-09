import { useUnit } from "effector-react";
import { countriesList, defaultFormValue } from "./consts";
import "./index.css";
import { $formData, setFormFieldData } from "./store";
import { FieldData, FormFields } from "./types";

const CascadingForm = () => {
  const setFieldData = useUnit(setFormFieldData);
  const currentFormValue = useUnit($formData);

  const setCurrentFieldData = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // Очистка дочерних полей при изменении/сбросе селектора
    if (currentFormValue?.[e.target.name as FormFields]?.length > 0) {
      const formValuesArray = Object.keys(currentFormValue);
      const currentIndex = formValuesArray.findIndex(
        (item) => item === e.target.name
      );
      currentIndex > 0 && formValuesArray.splice(0, currentIndex);
      formValuesArray.forEach((item) =>
        setFieldData({ name: item, value: "" } as FieldData)
      );
    }

    setFieldData({
      name: e.target.name,
      value: e.target.value,
    } as FieldData);
  };

  const parentChecker = (name: FormFields) => {
    // Проверка, заполнены ли родительские селекторы
    const filledFieldsLength = Object.values(currentFormValue).filter(
      (fieldValue) => !!fieldValue
    ).length;
    const currentFieldIndex = Object.keys(currentFormValue).findIndex(
      (fieldName) => fieldName === name
    );
    return filledFieldsLength >= currentFieldIndex;
  };

  return (
    <form
      onClick={(e) => {
        e.preventDefault();
        console.log(currentFormValue);
      }}
    >
      <div className="wrapper">
        <label>Выбор страны </label>
        <select
          onChange={setCurrentFieldData}
          className="select"
          name="country"
          required
          value={currentFormValue.country}
        >
          <option value="">-- Выберите Страну --</option>
          {defaultFormValue.country.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>

        <label>Выбор города</label>
        <select
          onChange={setCurrentFieldData}
          disabled={!parentChecker("city")}
          className="select"
          name="city"
          required
          value={currentFormValue.city}
        >
          <option value="">-- Выберите Город --</option>
          {parentChecker("city") &&
            countriesList[currentFormValue.country].city.map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
        </select>

        <label>Вид ВУЗа</label>
        <select
          onChange={setCurrentFieldData}
          disabled={!parentChecker("universityVariant")}
          className="select"
          name="universityVariant"
          required
          value={currentFormValue.universityVariant}
        >
          <option value="">-- Выберите ВУЗ --</option>
          {parentChecker("universityVariant") &&
            countriesList[currentFormValue.country].universityVariant.map(
              (item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              )
            )}
        </select>

        <label>Вариант проживания</label>
        <select
          disabled={!parentChecker("livingVariant")}
          className="select"
          name="livingVariant"
          required
          onChange={setCurrentFieldData}
          value={currentFormValue.livingVariant}
        >
          <option value="">-- Выберите Вариант проживания --</option>
          {parentChecker("livingVariant") &&
            countriesList[currentFormValue.country].livingVariant.map(
              (item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              )
            )}
        </select>

        <label>Выбор факультета</label>
        <select
          disabled={!parentChecker("faculty")}
          className="select"
          name="faculty"
          required
          onChange={setCurrentFieldData}
          value={currentFormValue.faculty}
        >
          <option value="">-- Выберите факультет --</option>
          {parentChecker("faculty") &&
            countriesList[currentFormValue.country].faculty[
              currentFormValue.universityVariant
            ].map((item, index) => (
              <option key={index} value={item}>
                {item}
              </option>
            ))}
        </select>

        <button
          className="send-btn"
          disabled={
            //Проверка что все поля заполнены
            !!Object.values(currentFormValue).filter(
              (item) => item.length === 0
            ).length
          }
          type="submit"
        >
          Отправить
        </button>
      </div>
    </form>
  );
};

export default CascadingForm;
