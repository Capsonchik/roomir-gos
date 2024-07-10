import styles from './styles.module.scss';
import {ConsumerActivityIndex} from "../charts/ConsumerActivityIndex";
import {Button, ButtonToolbar, SelectPicker, TagPicker} from "rsuite";
import {useState} from "react";
import {categorySwitcher} from "../helpers/switchers";
import {BarChart} from "../charts/BarChart";
import {QuestionPieChart} from "../charts/questionPieChart";

export const SocialSphere = () => {
  const data = ['БИОЛОГИЧЕСКИЕ', 'ПСИХО-БИОЛОГИЧЕСКИЕ', 'ПСИХОЛОГИЧЕСКИИЕ', 'ПСИХО-СОЦИАЛЬНЫЕ', 'СОЦИАЛЬНЫЕ', 'СОЦИО-БИОЛОГИЧЕСКИЕ'].map(
    item => ({ label: item, value: item })
  );

  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null)

  const handleSelectChange = (value) => {
    setSelectedItem(value);
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  }

  return (
    <div className={styles.container}>
      {/* График скрыт для необходимо перенести на другую страницу */}
      {/*<ConsumerActivityIndex/>*/}
      <div className={styles.categoties}>
        <SelectPicker onChange={handleSelectChange} placeholder={'Сфера'} data={data} style={{ width: 300 }} />
        <SelectPicker
          disabled={!selectedItem}
          onChange={handleCategoryChange}
          placeholder={'Категория вопроса'}
          data={categorySwitcher(selectedItem)}
          style={{ width: 300 }}
        />
        <SelectPicker
          disabled={!selectedCategory}
          onChange={handleSelectChange}
          placeholder={'Вопрос'}
          data={categorySwitcher(selectedCategory)}
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