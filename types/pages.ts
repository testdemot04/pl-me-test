import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { PageNavigations } from '../pages/PageNavigations';
import { EmployeesPage } from '../pages/peopleInfo/EmployeesPage';
import { LeavePage} from '../pages/myInfo/LeavePage';

export type Pages = {
  loginPage: LoginPage;
  homePage: HomePage;
  employeesPage: EmployeesPage;
  pageNavigations:PageNavigations;
  leavePage:LeavePage
};
