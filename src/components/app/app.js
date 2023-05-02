import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../empoyees-list/empoyees-list';
import EmpoyeesAddForm from '../empoyees-add-form/empoyees-add-form';

import './app.css'; // Webpack будет импортировать этот файл в общий файл со стилями

function App() {
  return (
    <div className='app'>
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeesList/>
      <EmpoyeesAddForm/>
    </div>
  );
}

export default App;