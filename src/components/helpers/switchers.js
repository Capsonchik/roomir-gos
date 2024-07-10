import {
  QUESTION_BIOLOGY,
  QUESTION_PSY,
  QUESTION_PSY_BIOLOGY,
  QUESTION_PSY_SOCIAL, QUESTION_SOCIAL, QUESTION_SOCIO_BIOLOGY
} from "../consts/questions/questionsCategories";

export const categorySwitcher = (selectedItem) => {
  switch (selectedItem) {
    case 'БИОЛОГИЧЕСКИЕ':
      return QUESTION_BIOLOGY.map(item => ({ label: item, value: item }));
    case 'ПСИХО-БИОЛОГИЧЕСКИЕ':
      return QUESTION_PSY_BIOLOGY.map(item => ({ label: item, value: item }));
    case 'ПСИХОЛОГИЧЕСКИИЕ':
      return QUESTION_PSY.map(item => ({ label: item, value: item }));
    case 'ПСИХО-СОЦИАЛЬНЫЕ':
      return QUESTION_PSY_SOCIAL.map(item => ({ label: item, value: item }));
    case 'СОЦИАЛЬНЫЕ':
      return QUESTION_SOCIAL.map(item => ({ label: item, value: item }));
    case 'СОЦИО-БИОЛОГИЧЕСКИЕ':
      return QUESTION_SOCIO_BIOLOGY.map(item => ({ label: item, value: item }));
    default:
      return [];
  }
}