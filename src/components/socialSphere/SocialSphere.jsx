import styles from './styles.module.scss';
import mockData from '../../mockData/static-levels-id-order3.json'
import {Button, ButtonToolbar, SelectPicker} from "rsuite";
import {useEffect, useState} from "react";
import {categorySwitcher} from "../helpers/switchers";
import {BarChart} from "../charts/BarChart";
import {QuestionPieChart} from "../charts/questionPieChart";
import {findObjectByTitle, findQuestionsByName} from "../helpers/finders";
import {useDispatch, useSelector} from "react-redux";
import {
  selectCurrentQuestionCategories,
  selectCurrentQuestionCategory,
  selectCurrentQuestions
} from "../../store/selectors";
import {setCurrentQuestionCategories, setCurrentQuestionCategory, setCurrentQuestions} from "../../store/mainSlice";

export const SocialSphere = () => {
  const dispatch = useDispatch()
  const [selectedItem, setSelectedItem] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const currentCategory = useSelector(selectCurrentQuestionCategory);
  const currentCategories = useSelector(selectCurrentQuestionCategories);
  const currentQuestions = useSelector(selectCurrentQuestions);
  const [test, setTest] = useState()
  const [questions, setQuestions] = useState()
  const title = mockData.map(el =>  el.title );

  const data = title.map(
    item => ({ label: item, value: item })
  );

  useEffect(() => {
    if(currentCategories) {
      const a =  currentCategories.map(item => ({ label: item.name, value: item.name }))
      setTest(a)
    }
  }, [currentCategories, currentCategories]);

  // useEffect(() => {
  //   if(currentQuestions) {
  //     const questions = currentQuestions.map(item => ({ label: item.question.name, value: item.question.name }))
  //     setQuestions(questions)
  //     console.log(questions)
  //   }
  // }, [currentQuestions]);

  useEffect(() => {
    if (currentQuestions) {
      const questions = currentQuestions.map(item => ({ label: item.question.name, value: item.question.name }));
      setQuestions(questions);
      console.log(questions);
    }
  }, [currentQuestions]);



  const handleSelectChange = (value) => {
    const category = findObjectByTitle(value)
    dispatch(setCurrentQuestionCategory(value))
    dispatch(setCurrentQuestionCategories(category))
    setSelectedItem(value);
  };

  const handleCategoryChange = (value) => {
    const questions = findQuestionsByName(value, currentCategories)
    console.log(questions)
    dispatch(setCurrentQuestions(questions))
    setSelectedCategory(value);
  }
  return (
    <div className={styles.container}>
      <div className={styles.categoties}>
        <SelectPicker
          onChange={handleSelectChange}
          placeholder={'Сфера'}
          data={data}
          style={{ width: 300 }}
        />
        <SelectPicker
          disabled={!selectedItem}
          onChange={handleCategoryChange}
          placeholder={'Категория вопроса'}
          data={test}
          style={{ width: 300 }}
        />
        <SelectPicker
          disabled={!selectedCategory}
          // onChange={handleSelectChange}
          placeholder={'Вопрос'}
          data={questions}
          style={{ width: 300 }}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.questions}>
          <ButtonToolbar>
            <Button appearance="default">ВСЯ РОССИЯ</Button>
            <Button appearance="default">ФЕДЕРАЛЬНЫЙ ОКРУГ</Button>
            <Button appearance="default">ГОРОД</Button>
          </ButtonToolbar>
          <div className={styles.questionBlock}>
            <span>Вопрос: </span>
            <span>Употребляете ли вы протеин ?</span>
          </div>
          <div className={styles.pieChart}>
            <QuestionPieChart/>
          </div>
        </div>
        <div className={styles.bars}>
          <div className={styles.barItem}>
            <p>Москва</p>
            <div className={styles.barChart}>
              <BarChart values={[50, 50]}/>
            </div>
          </div>
          <div className={styles.barItem}>
            <p>Курган</p>
            <div className={styles.barChart}>
              <BarChart values={[55, 45]}/>
            </div>
          </div>
          <div className={styles.barItem}>
            <p>Питер</p>
            <div className={styles.barChart}>
              <BarChart values={[10, 90]}/>
            </div>
          </div>
          <div className={styles.barItem}>
            <p>Калуга</p>
            <div className={styles.barChart}>
              <BarChart values={[27, 73]}/>
            </div>
          </div>
          {/*<BarChart/>*/}
        </div>
      </div>
    </div>
  );
};