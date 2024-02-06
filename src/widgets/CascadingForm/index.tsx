import { useUnit } from "effector-react";
import { countriesList, defaultFormValue } from "./consts";
import "./index.css";
import { $formData, setFormFieldData } from "./store";
import { FieldData } from "./types";

const CascadingForm = () => {
  const setFieldData = useUnit(setFormFieldData);
  const currentFormValue = useUnit($formData);

  const setCurrentFieldData = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFieldData({
      name: e.target.name,
      value: e.target.value,
    } as FieldData);
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
        >
          <option value="">-- Выберите Страну --</option>
          {defaultFormValue.country.map((item) => (
            <option value={item}>{item}</option>
          ))}
        </select>

        <label>Выбор города</label>
        <select
          onChange={setCurrentFieldData}
          disabled={!currentFormValue.country}
          className="select"
          name="city"
          required
        >
          <option value="">-- Выберите Город --</option>
          {currentFormValue.country &&
            countriesList[currentFormValue.country].city.map((item) => (
              <option value={item}>{item}</option>
            ))}
        </select>

        <label>Вид ВУЗа</label>
        <select
          onChange={setCurrentFieldData}
          disabled={!currentFormValue.city}
          className="select"
          name="universityVariant"
          required
        >
          <option value="">-- Выберите ВУЗ --</option>
          {currentFormValue.country &&
            countriesList[currentFormValue.country].universityVariant.map(
              (item) => <option value={item}>{item}</option>
            )}
        </select>

        <label>Вариант проживания</label>
        <select
          disabled={!currentFormValue.universityVariant}
          className="select"
          name="livingVariant"
          required
          onChange={setCurrentFieldData}
        >
          <option value="">-- Выберите Вариант проживания --</option>
          {currentFormValue.country &&
            countriesList[currentFormValue.country].livingVariant.map(
              (item) => <option value={item}>{item}</option>
            )}
        </select>

        <button
          className="send-btn"
          disabled={!currentFormValue.livingVariant}
          type="submit"
        >
          Отправить
        </button>
      </div>
    </form>
  );
};

export default CascadingForm;
