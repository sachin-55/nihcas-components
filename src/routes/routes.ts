// eslint-disable-next-line simple-import-sort/imports
import escConstants from '../constants';
import { NoLayout, PrivateLayout } from '../layouts';
import {
  AddPrinter,
  BrowseJobs,
  BrowseJobsDetails,
  CreateJobs,
  CreateNewJobs,
  CreateProposal,
  Dashboard,
  DownloadTemplate,
  ForgetPassword,
  JobDetails,
  Jobs,
  Login,
  Logout,
  Message,
  MyJobs,
  NotFound404,
  OnBoarding,
  Printer,
  Proposals,
  Schedule,
  Settings,
  Test,
  VerificationCode,
  ViewBuildingDetails,
  ViewCreatedJobs,
  ViewMyJobs,
} from '../pages';
import Register from '../pages/Auth/Register';
import Building from '../pages/Building';
import AddBuilding from '../pages/Building/AddBuilding';
import ClientContract from '../pages/ClientContract';
import ClientContractDetails from '../pages/ClientContract/ContractDetails';
import CompletePDF from '../pages/CompletePDF';
import Contract from '../pages/Contract';
import ContractDetails from '../pages/Contract/ContractDetails';
import DownloadSymbols from '../pages/DownloadSymbols';
import ViewTemplateDetails from '../pages/DownloadTemplate/ViewTemplateDetails';
import PrinterHistory from '../pages/History';
import Notifications from '../pages/Notifications';
import PrinterClientList from '../pages/PrinterClient';
import PrinterJob from '../pages/PrinterJobs';
import PrinterJobDetails from '../pages/PrinterJobs/PrinterJobDetails';
import JobProposals from '../pages/Proposals/JobProposal';
import ProposalForTechnician from '../pages/Proposals/ViewProposal/ProposalForTechnician';
import Reviews from '../pages/Reviews';
import ViewReviews from '../pages/Reviews/ViewReviews';
import {
  ADD_BUILDING_ROUTE,
  ADD_JOBS_ROUTE,
  ADD_PRINTER_ROUTE,
  BROWSE_JOBS_ROUTE,
  BUILDING_ROUTE,
  COMPLETE_PDF_ROUTE,
  CONTRACT_DETAILS_ROUTE,
  CONTRACT_DETAIL_ROUTE_CLIENT,
  CONTRACT_ROUTE,
  CONTRACT_ROUTE_CLIENT,
  CREATE_JOBS_ROUTE,
  CREATE_JOB_PROPOSAL_ROUTE,
  DASHBOARD_ROUTE,
  DOWNLOAD_SYMBOLS_ROUTE,
  DOWNLOAD_TEMPLATE_ROUTE,
  FORGOT_ROUTE,
  HOME_ROUTE,
  JOBS_DETAILS_ROUTE,
  JOBS_ROUTE,
  LOGIN_ROUTE,
  LOG_OUT_ROUTE,
  MESSAGE_ROUTE,
  MY_JOBS_ROUTE,
  NOT_FOUND_ROUTE,
  ONBOARDING_CURRENT_STEP_ROUTE,
  ONBOARDING_ROUTE,
  PRINTER_ROUTE,
  PROPOSAL_ROUTE,
  REGISTER_ROUTE,
  REVIEW_ROUTE_ADMIN,
  SCHEDULE_ROUTE,
  SETTING_ROUTE,
  TEST_ROUTE,
  VERIFICATION_ROUTE,
  VIEW_BROWSE_JOBS_ROUTE,
  VIEW_BUILDING_ROUTE,
  VIEW_JOBS_ROUTE,
  VIEW_MY_JOBS_ROUTE,
  VIEW_MY_NOTIFICATIONS,
  VIEW_PARTICULAR_JOB_PROPOSAL_ROUTE,
  VIEW_PRINTER_CLIENTS_ROUTE,
  VIEW_PRINTER_HISTORY_ROUTE,
  VIEW_PRINTER_JOBS_DETAILS_ROUTE,
  VIEW_PRINTER_JOBS_ROUTE,
  VIEW_PROPOSAL_ROUTE,
  VIEW_REVIEW_JOB_DETAIL_ROUTE,
  VIEW_TEMPLATE_ROUTE,
} from './routePaths';

const { admin, client, printer, technician } = escConstants.USER_ROLES;
const routes: IRoutes[] = [
  {
    id: 1111111,
    path: TEST_ROUTE,
    component: Test,
    layout: NoLayout,
    isProtected: false,
  },
  {
    id: 1,
    path: NOT_FOUND_ROUTE,
    component: NotFound404,
    layout: NoLayout,
    isProtected: false,
  },
  {
    id: 50,
    path: DASHBOARD_ROUTE,
    component: Dashboard,
    layout: PrivateLayout,
    isProtected: true,
    allowTo: [client, technician, admin, printer],
  },
  {
    id: 100,
    path: BUILDING_ROUTE,
    component: Building,
    layout: PrivateLayout,
    isProtected: true,
    allowTo: [client, technician, admin],
    children: [
      {
        component: AddBuilding,
        path: ADD_BUILDING_ROUTE,
        id: 101,
      },
      {
        component: ViewBuildingDetails,
        path: VIEW_BUILDING_ROUTE,
        id: 102,
      },
    ],
  },
  {
    id: 200,
    path: HOME_ROUTE,
    component: Login,
    layout: NoLayout,
    isProtected: false,
    redirectToOnAuth: DASHBOARD_ROUTE,
  },
  {
    id: 300,
    path: LOGIN_ROUTE,
    component: Login,
    layout: NoLayout,
    isProtected: false,
    redirectToOnAuth: DASHBOARD_ROUTE,
  },

  {
    id: 400,
    path: ONBOARDING_ROUTE,
    component: OnBoarding,
    layout: NoLayout,
    isProtected: true,
    children: [
      {
        id: 401,
        path: ONBOARDING_CURRENT_STEP_ROUTE,
        component: OnBoarding,
      },
    ],
  },

  {
    id: 999999,
    path: LOG_OUT_ROUTE,
    component: Logout,
    layout: NoLayout,
    isProtected: false,
  },
  {
    id: 500,
    path: REGISTER_ROUTE,
    component: Register,
    layout: NoLayout,
    isProtected: false,
    redirectToOnAuth: DASHBOARD_ROUTE,
  },
  {
    id: 600,
    path: FORGOT_ROUTE,
    component: ForgetPassword,
    layout: NoLayout,
    isProtected: false,
    redirectToOnAuth: DASHBOARD_ROUTE,
  },
  {
    id: 700,
    path: VERIFICATION_ROUTE,
    component: VerificationCode,
    layout: NoLayout,
    isProtected: true,
  },
  {
    id: 800,
    path: PRINTER_ROUTE,
    component: Printer,
    layout: PrivateLayout,
    isProtected: true,
    allowTo: [client],
    children: [
      {
        component: AddPrinter,
        path: ADD_PRINTER_ROUTE,
        id: 801,
      },
    ],
  },
  {
    id: 810,
    path: VIEW_PRINTER_CLIENTS_ROUTE,
    component: PrinterClientList,
    layout: PrivateLayout,
    isProtected: true,
    allowTo: [printer],
  },
  {
    id: 820,
    path: VIEW_PRINTER_JOBS_ROUTE,
    component: PrinterJob,
    layout: PrivateLayout,
    isProtected: true,
    allowTo: [printer],
    children: [
      {
        id: 830,
        path: VIEW_PRINTER_JOBS_DETAILS_ROUTE,
        component: PrinterJobDetails,
      },
    ],
  },
  {
    id: 840,
    path: VIEW_PRINTER_HISTORY_ROUTE,
    component: PrinterHistory,
    layout: PrivateLayout,
    isProtected: true,
    allowTo: [printer],
  },
  {
    id: 900,
    path: CREATE_JOBS_ROUTE,
    component: CreateJobs,
    layout: PrivateLayout,
    isProtected: true,
    allowTo: [client],
    children: [
      {
        component: CreateNewJobs,
        path: ADD_JOBS_ROUTE,
        id: 901,
      },
      {
        component: ViewCreatedJobs,
        path: VIEW_JOBS_ROUTE,
        id: 902,
      },
    ],
  },

  {
    id: 1000,
    path: MY_JOBS_ROUTE,
    component: MyJobs,
    layout: PrivateLayout,
    isProtected: true,
    allowTo: [client],
    children: [
      {
        component: ViewMyJobs,
        path: VIEW_MY_JOBS_ROUTE,
        id: 1001,
      },
    ],
  },
  {
    id: 1200,
    path: MESSAGE_ROUTE,
    component: Message,
    layout: PrivateLayout,
    isProtected: true,
    allowTo: [client, technician, 'printer'],
    extraInfo: {
      noPadding: true,
    },
  },
  {
    id: 1300,
    path: PROPOSAL_ROUTE,
    component: Proposals,
    layout: PrivateLayout,
    isProtected: true,
    allowTo: [client],
    children: [
      {
        component: JobProposals,
        path: VIEW_PROPOSAL_ROUTE,
        id: 1301,
        children: [
          {
            component: ProposalForTechnician,
            path: VIEW_PARTICULAR_JOB_PROPOSAL_ROUTE,
            id: 1315,
          },
        ],
      },
    ],
  },
  {
    id: 1400,
    path: SETTING_ROUTE,
    component: Settings,
    layout: PrivateLayout,
    isProtected: true,
    allowTo: [client, technician],
  },
  {
    id: 1500,
    path: BROWSE_JOBS_ROUTE,
    component: BrowseJobs,
    layout: PrivateLayout,
    isProtected: true,
    allowTo: [technician, 'printer'],
    children: [
      {
        component: BrowseJobsDetails,
        path: VIEW_BROWSE_JOBS_ROUTE,
        id: 1501,
        children: [
          {
            id: 15011,
            path: CREATE_JOB_PROPOSAL_ROUTE,
            component: CreateProposal,
          },
        ],
      },
    ],
  },
  {
    id: 1600,
    path: JOBS_ROUTE,
    component: Jobs,
    layout: PrivateLayout,
    isProtected: true,
    allowTo: [technician, printer],
    children: [
      {
        id: 1601,
        path: JOBS_DETAILS_ROUTE,
        component: JobDetails,
      },
    ],
  },
  {
    id: 1700,
    path: CONTRACT_ROUTE,
    component: Contract,
    layout: PrivateLayout,
    isProtected: true,
    allowTo: [technician, client],
    children: [
      {
        id: 1701,
        path: CONTRACT_DETAILS_ROUTE,
        component: ContractDetails,
      },
    ],
  },
  {
    id: 1800,
    path: SCHEDULE_ROUTE,
    component: Schedule,
    layout: PrivateLayout,
    isProtected: true,
    allowTo: [technician],
  },
  {
    id: 1401,
    path: VIEW_MY_NOTIFICATIONS,
    component: Notifications,
    layout: PrivateLayout,
    isProtected: true,
  },
  {
    id: 1801,
    path: DOWNLOAD_SYMBOLS_ROUTE,
    component: DownloadSymbols,
    layout: PrivateLayout,
    isProtected: true,
    allowTo: [technician],
  },
  {
    id: 1802,
    path: COMPLETE_PDF_ROUTE,
    component: CompletePDF,
    layout: PrivateLayout,
    isProtected: true,
    allowTo: [technician],
  },
  {
    id: 1900,
    path: DOWNLOAD_TEMPLATE_ROUTE,
    component: DownloadTemplate,
    layout: PrivateLayout,
    isProtected: true,
    allowTo: [technician],
  },
  {
    id: 1901,
    path: VIEW_TEMPLATE_ROUTE,
    component: ViewTemplateDetails,
    layout: PrivateLayout,
    isProtected: true,
    allowTo: [technician],
  },
  {
    id: 2000,
    path: CONTRACT_ROUTE_CLIENT,
    component: ClientContract,
    layout: PrivateLayout,
    isProtected: true,
    allowTo: [client],
    children: [
      {
        id: 2001,
        path: CONTRACT_DETAIL_ROUTE_CLIENT,
        component: ClientContractDetails,
      },
    ],
  },
  {
    id: 2002,
    path: REVIEW_ROUTE_ADMIN,
    component: Reviews,
    layout: PrivateLayout,
    isProtected: true,
    allowTo: [admin],
    children: [
      {
        id: 2003,
        path: VIEW_REVIEW_JOB_DETAIL_ROUTE,
        component: ViewReviews,
      },
    ],
  },
];
export default routes;

export interface IRoutes {
  id: number;
  path: string;
  component: React.FC;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  layout: React.FC<React.PropsWithChildren<{ extraInfo?: any }>>;
  isProtected?: boolean;
  redirectToOnAuth?: string;
  role?: string[];
  restrictTo?: string[];
  allowTo?: string[];
  children?: Array<IChildren>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extraInfo?: any;
}

export interface IChildren {
  id: number;
  path: string;
  component: React.FC;
  children?: Array<IChildren>;
}
