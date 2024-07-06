import {Dropdown} from "rsuite";
export const MapDropDown = () => {


  return (
    <Dropdown style={{width: '100%'}} title="Категория: Чай черный - цена за 1кг.">
      <Dropdown.Item>New File</Dropdown.Item>
      <Dropdown.Item>New File with Current Profile</Dropdown.Item>
      <Dropdown.Item>Download As...</Dropdown.Item>
      <Dropdown.Item>Export PDF</Dropdown.Item>
      <Dropdown.Item>Export HTML</Dropdown.Item>
      <Dropdown.Item>Settings</Dropdown.Item>
      <Dropdown.Item>About</Dropdown.Item>
    </Dropdown>
  );
};