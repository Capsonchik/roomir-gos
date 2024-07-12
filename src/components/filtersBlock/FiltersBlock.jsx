import {Dropdown} from "rsuite";
import styles from './styles.module.scss';
import {useState} from "react";
import {REGION, AGE, GENDER, INCOME, SEGMENT, POLITIC, FAMILY, YEAR} from "../consts/filterConsts";
import {useDispatch} from "react-redux";
import {setMockParam, setYear} from "../../store/mainSlice";
import {useLocation} from "react-router-dom";

export const FiltersBlock = () => {
  const dispatch = useDispatch();
  const [region, setRegion] = useState("Москва")
  const [gender, setGender] = useState("Все")
  const [age, setAge] = useState("Все")
  const [income, setIncome] = useState("Все")
  const [famaly, setFamaly] = useState("Все")
  const [politic, setPolitic] = useState("Все")
  const [segment, setSegment] = useState("Все")
  const [currentYear, setCurrentYear] = useState('2024')

  const location = useLocation();

  const handleSetRegion = (value) => {
    setRegion(value)
    dispatch(setMockParam(value))
    dispatch(setRegion(value))
  }

  const handleSetGender = (value) => {
    setGender(value)
    dispatch(setMockParam(value))
  }

  const handleSetAge = (value) => {
    setAge(value)
    dispatch(setMockParam(value))
  }

  const handleSetIncome = (value) => {
    setIncome(value)
    dispatch(setMockParam(value))
  }

  const handleSetFamily = (value) => {
    setFamaly(value)
    dispatch(setMockParam(value))
  }

  const handleSetInpolitic = (value) => {
    setPolitic(value)
    dispatch(setMockParam(value))
  }

  const handleSetSegment = (value) => {
    setSegment(value)
    dispatch(setMockParam(value))
  }

  const handleSetYear = (value) => {
    setCurrentYear(value)
    dispatch(setYear(+value))
    dispatch(setMockParam(value))
  }

  return (
    <div className={styles.filterBlock}>
      {location.pathname === '/'
        ? (
          <Dropdown title={`Регион: ${region}`}>
            <div style={{width: 'auto', height: 400, overflow: "auto"}}>
              {REGION.map(region =>
                <Dropdown.Item onClick={() => handleSetRegion(region)}>{region}</Dropdown.Item>)}
            </div>
          </Dropdown>
        )
        : null
      }
      <Dropdown title={`Пол: ${gender}`}>
        {GENDER.map(gender =>
          <Dropdown.Item onClick={() => handleSetGender(gender)}>{gender}</Dropdown.Item>)}
      </Dropdown>
      <Dropdown title={`Возраст: ${age}`}>
        {AGE.map(age =>
          <Dropdown.Item onClick={() => handleSetAge(age)}>{age}</Dropdown.Item>)}
      </Dropdown>
      <Dropdown title={`Доход: ${income}`}>
        {INCOME.map(income =>
          <Dropdown.Item onClick={() => handleSetIncome(income)}>{income}</Dropdown.Item>)}
      </Dropdown>
      <Dropdown title={`Семья: ${famaly}`}>
        {FAMILY.map(region =>
          <Dropdown.Item onClick={() => handleSetFamily(region)}>{region}</Dropdown.Item>)}
      </Dropdown>
      <Dropdown title={`Политика: ${politic}`}>
        {POLITIC.map(user =>
          <Dropdown.Item onClick={() => handleSetInpolitic(user)}>{user}</Dropdown.Item>)}
      </Dropdown>
      <Dropdown title={`Сегмент: ${segment}`}>
        {SEGMENT.map(region =>
          <Dropdown.Item onClick={() => handleSetSegment(region)}>{region}</Dropdown.Item>)}
      </Dropdown>
      {location.pathname === '/'
        ? null
        : (
          <Dropdown title={`Год: ${currentYear}`}>
            {YEAR.map(region =>
              <Dropdown.Item onClick={() => handleSetYear(region)}>{region}</Dropdown.Item>)}
          </Dropdown>
        )
      }
    </div>
  );
};