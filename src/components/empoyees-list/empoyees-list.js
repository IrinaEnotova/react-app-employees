import EmployeesListItem from '../empoyees-list-item/empoyees-list-item';
import './empoyees-list.css'
const EmployeesList = () => {
  return (
    <ul className="app-list list-group">
      <EmployeesListItem/>
      <EmployeesListItem/>
      <EmployeesListItem/>
    </ul>
  );
}

export default EmployeesList;