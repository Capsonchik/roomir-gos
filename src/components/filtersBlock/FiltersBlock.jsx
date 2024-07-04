import {Dropdown} from "rsuite";
import styles from './styles.module.scss';
import {useState} from "react";
import {REGION, AGE, GENDER, INCOME, SEGMENT, POLITIC, FAMILY} from "../consts/filterConsts";

export const FiltersBlock = () => {
  const [region, setRegion] = useState("Москва")
  const [gender, setGender] = useState("Все")
  const [age, setAge] = useState("Все")
  const [income, setIncome] = useState("Все")
  const [famaly, setFamaly] = useState("Все")
  const [politic, setPolitic] = useState("Все")
  const [segment, setSegment] = useState("Все")

  return (
    <div className={styles.filterBlock}>
      <Dropdown title={`Регион: ${region}`}>
        {REGION.map(region =>
          <Dropdown.Item onClick={() => setRegion(region)}>{region}</Dropdown.Item>)}
      </Dropdown>
      <Dropdown title={`Пол: ${gender}`}>
        {GENDER.map(region =>
          <Dropdown.Item onClick={() => setGender(region)}>{region}</Dropdown.Item>)}
      </Dropdown>
      <Dropdown title={`Возраст: ${age}`}>
        {AGE.map(region =>
          <Dropdown.Item onClick={() => setAge(region)}>{region}</Dropdown.Item>)}
      </Dropdown>
      <Dropdown title={`Доход: ${income}`}>
        {INCOME.map(region =>
          <Dropdown.Item onClick={() => setIncome(region)}>{region}</Dropdown.Item>)}
      </Dropdown>
      <Dropdown title={`Семья: ${famaly}`}>
        {FAMILY.map(region =>
          <Dropdown.Item onClick={() => setFamaly(region)}>{region}</Dropdown.Item>)}
      </Dropdown>
      <Dropdown title={`Политика: ${politic}`}>
        {POLITIC.map(region =>
          <Dropdown.Item onClick={() => setPolitic(region)}>{region}</Dropdown.Item>)}
      </Dropdown>
      <Dropdown title={`Сегмент: ${segment}`}>
        {SEGMENT.map(region =>
          <Dropdown.Item onClick={() => setSegment(region)}>{region}</Dropdown.Item>)}
      </Dropdown>
    </div>
  );
};