import React from 'react';

import { UserRolesType } from '../../@types';
import escConstants from '../../constants';
import {
  BROWSE_JOBS_ROUTE,
  BUILDING_ROUTE,
  COMPLETE_PDF_ROUTE,
  CONTRACT_ROUTE,
  CONTRACT_ROUTE_CLIENT,
  CREATE_JOBS_ROUTE,
  DASHBOARD_ROUTE,
  DOWNLOAD_SYMBOLS_ROUTE,
  DOWNLOAD_TEMPLATE_ROUTE,
  JOBS_ROUTE,
  MESSAGE_ROUTE,
  MY_JOBS_ROUTE,
  PRINTER_ROUTE,
  PROPOSAL_ROUTE,
  REVIEW_ROUTE_ADMIN,
  SCHEDULE_ROUTE,
  SETTING_ROUTE,
  VIEW_PRINTER_CLIENTS_ROUTE,
  VIEW_PRINTER_HISTORY_ROUTE,
  VIEW_PRINTER_JOBS_ROUTE,
} from '../../routes/routePaths';
import {
  BrowseSVG,
  BuildingSVG,
  ClientSVG,
  ContractSVG,
  CountrySetupSVG,
  CreateJobsSVG,
  DashboardSVG,
  DownloadSVG,
  HistorySVG,
  InvoicesSVG,
  JobsSVG,
  MessageSVG,
  PaymentSVG,
  PdfSVG,
  PrinterSVG,
  ProposalSVG,
  RulesSVG,
  ScheduleSVG,
  SettingSVG,
  SymbolsSVG,
  TemplateSVG,
} from './icons';

const userRoles = escConstants.USER_ROLES;

const menuList: MenuType = [
  {
    icon: DashboardSVG,
    key: 'dashboard',
    label: 'Dashboard',
    path: DASHBOARD_ROUTE,
    allowedRoles: [
      userRoles.client,
      userRoles.technician,
      userRoles.printer,
      userRoles.admin,
    ],
    order: {
      ADMIN: 1,
      CLIENT: 1,
      PRINTER: 1,
      TECHNICIAN: 1,
    },
  },
  {
    icon: BuildingSVG,
    key: 'building',
    label: 'Building',
    path: BUILDING_ROUTE,
    allowedRoles: [userRoles.client],
    order: {
      CLIENT: 2,
      TECHNICIAN: 0,
      PRINTER: 0,
      ADMIN: 0,
    },
  },
  {
    icon: PrinterSVG,
    key: 'printer',
    label: 'Printer',
    path: PRINTER_ROUTE,
    allowedRoles: [userRoles.client],
    order: {
      CLIENT: 3,
      TECHNICIAN: 0,
      PRINTER: 0,
      ADMIN: 0,
    },
  },
  {
    icon: CreateJobsSVG,
    key: 'create-jobs',
    label: 'Create Jobs',
    path: CREATE_JOBS_ROUTE,
    allowedRoles: [userRoles.client],
    order: {
      CLIENT: 4,
      TECHNICIAN: 0,
      PRINTER: 0,
      ADMIN: 0,
    },
  },
  {
    icon: JobsSVG,
    key: 'my-jobd',
    label: 'My Jobs',
    path: MY_JOBS_ROUTE,
    allowedRoles: [userRoles.client],
    order: {
      CLIENT: 5,
      TECHNICIAN: 0,
      PRINTER: 0,
      ADMIN: 0,
    },
  },
  {
    icon: MessageSVG,
    key: 'message',
    label: 'Message',
    path: MESSAGE_ROUTE,
    allowedRoles: [userRoles.client, userRoles.technician, userRoles.printer],
    order: {
      CLIENT: 6,
      TECHNICIAN: 6,
      PRINTER: 4,
      ADMIN: 0,
    },
  },
  {
    icon: ProposalSVG,
    key: 'proposal',
    label: 'Proposals',
    path: PROPOSAL_ROUTE,
    allowedRoles: [userRoles.client],
    order: {
      CLIENT: 7,
      TECHNICIAN: 0,
      PRINTER: 0,
      ADMIN: 0,
    },
  },
  {
    icon: PaymentSVG,
    key: 'payment',
    label: 'Payment',
    path: '',
    allowedRoles: [userRoles.client],
    order: {
      CLIENT: 8,
      TECHNICIAN: 0,
      PRINTER: 0,
      ADMIN: 0,
    },
  },

  {
    icon: SettingSVG,
    key: 'setting',
    label: 'Setting',
    path: SETTING_ROUTE,
    allowedRoles: [
      userRoles.client,
      userRoles.technician,
      userRoles.printer,
      userRoles.admin,
    ],
    order: {
      CLIENT: 9,
      TECHNICIAN: 10,
      PRINTER: 6,
      ADMIN: 7,
    },
    children: [
      {
        allowedRoles: [userRoles.admin],
        icon: RulesSVG,
        key: 'rules',
        label: 'Rules',
        path: '',
      },
      {
        allowedRoles: [userRoles.admin],
        icon: CountrySetupSVG,
        key: 'country-setup',
        label: 'CountrySetup',
        path: '',
      },
      {
        allowedRoles: [userRoles.admin],
        icon: InvoicesSVG,
        key: 'invoices',
        label: 'Invoices',
        path: '',
      },
    ],
  },
  {
    icon: BrowseSVG,
    key: 'browse-jobs',
    label: 'Browse Jobs',
    path: BROWSE_JOBS_ROUTE,
    allowedRoles: [userRoles.technician],
    order: {
      CLIENT: 0,
      TECHNICIAN: 2,
      PRINTER: 0,
      ADMIN: 0,
    },
  },
  {
    icon: JobsSVG,
    key: 'jobs',
    label: 'Jobs',
    path: JOBS_ROUTE,
    allowedRoles: [userRoles.technician],
    order: {
      CLIENT: 0,
      TECHNICIAN: 3,
      PRINTER: 0,
      ADMIN: 0,
    },
  },
  {
    icon: JobsSVG,
    key: 'jobs',
    label: 'Jobs',
    path: VIEW_PRINTER_JOBS_ROUTE,
    allowedRoles: [userRoles.printer],
    order: {
      CLIENT: 0,
      TECHNICIAN: 0,
      PRINTER: 2,
      ADMIN: 0,
    },
  },
  {
    icon: ScheduleSVG,
    key: 'schedule',
    label: 'Schedule',
    path: SCHEDULE_ROUTE,
    allowedRoles: [userRoles.technician],
    order: {
      CLIENT: 0,
      TECHNICIAN: 4,
      PRINTER: 0,
      ADMIN: 0,
    },
  },
  {
    icon: ContractSVG,
    key: 'contract',
    label: 'Contract',
    path: CONTRACT_ROUTE,
    allowedRoles: [userRoles.technician],
    order: {
      CLIENT: 7,
      TECHNICIAN: 5,
      PRINTER: 0,
      ADMIN: 0,
    },
  },
  {
    icon: PdfSVG,
    key: 'complete-pdf',
    label: 'Complete PDF',
    path: COMPLETE_PDF_ROUTE,
    allowedRoles: [userRoles.technician],
    order: {
      CLIENT: 0,
      TECHNICIAN: 7,
      PRINTER: 0,
      ADMIN: 0,
    },
  },
  {
    icon: DownloadSVG,
    key: 'download-symbols',
    label: 'Download Symbols',
    path: DOWNLOAD_SYMBOLS_ROUTE,
    allowedRoles: [userRoles.technician],
    order: {
      CLIENT: 0,
      TECHNICIAN: 8,
      PRINTER: 0,
      ADMIN: 0,
    },
  },
  {
    icon: ClientSVG,
    key: 'clients',
    label: 'Clients',
    path: VIEW_PRINTER_CLIENTS_ROUTE,
    allowedRoles: [userRoles.printer, userRoles.admin],
    order: {
      CLIENT: 0,
      TECHNICIAN: 0,
      PRINTER: 3,
      ADMIN: 3,
    },
  },
  {
    icon: HistorySVG,
    key: 'history',
    label: 'History',
    path: VIEW_PRINTER_HISTORY_ROUTE,
    allowedRoles: [userRoles.printer],
    order: {
      CLIENT: 0,
      TECHNICIAN: 0,
      PRINTER: 5,
      ADMIN: 0,
    },
  },
  {
    icon: ClientSVG,
    key: 'users',
    label: 'Users',
    path: '',
    allowedRoles: [userRoles.admin],
    order: {
      CLIENT: 0,
      TECHNICIAN: 0,
      PRINTER: 0,
      ADMIN: 2,
    },
  },
  {
    icon: PrinterSVG,
    key: 'printers',
    label: 'Printers',
    path: '',
    allowedRoles: [userRoles.admin],
    order: {
      CLIENT: 0,
      TECHNICIAN: 0,
      PRINTER: 0,
      ADMIN: 4,
    },
  },
  {
    icon: TemplateSVG,
    key: 'template-files',
    label: 'Template Files',
    path: '',
    allowedRoles: [userRoles.admin],
    order: {
      CLIENT: 0,
      TECHNICIAN: 0,
      PRINTER: 0,
      ADMIN: 5,
    },
  },
  {
    icon: SymbolsSVG,
    key: 'symbols-and-shapes',
    label: 'Symbols and Shapes',
    path: '',
    allowedRoles: [userRoles.admin],
    order: {
      CLIENT: 0,
      TECHNICIAN: 0,
      PRINTER: 0,
      ADMIN: 6,
    },
  },
  {
    icon: DownloadSVG,
    key: 'download-template',
    label: 'Download Template',
    path: DOWNLOAD_TEMPLATE_ROUTE,
    allowedRoles: [userRoles.technician],
    order: {
      CLIENT: 0,
      TECHNICIAN: 9,
      PRINTER: 0,
      ADMIN: 0,
    },
  },
  {
    icon: ContractSVG,
    key: 'contract',
    label: 'Contract',
    path: CONTRACT_ROUTE_CLIENT,
    allowedRoles: [userRoles.client],
    order: {
      CLIENT: 7,
      TECHNICIAN: 0,
      PRINTER: 0,
      ADMIN: 0,
    },
  },
  {
    icon: ContractSVG,
    key: 'reviews',
    label: 'Reviews',
    path: REVIEW_ROUTE_ADMIN,
    allowedRoles: [userRoles.admin],
    order: {
      CLIENT: 0,
      TECHNICIAN: 0,
      PRINTER: 0,
      ADMIN: 6,
    },
  },
];

export default menuList;

export const getFilteredMenu = (role: UserRolesType) => {
  return menuList
    .filter((x) => x.allowedRoles.includes(role))
    .map((k) => {
      if (Array.isArray(k?.children)) {
        k.children = k.children?.filter((c) => c.allowedRoles.includes(role));
      }
      return k;
    })
    .sort((a, b) => a.order[role] - b.order[role]);
};

type MenuType = Array<MenuItemType>;

export type MenuItemType = {
  key: string;
  label: string;
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  path: string;
  allowedRoles: UserRolesType[];
  order: Record<UserRolesType, number>;
  children?: Omit<MenuItemType, 'order' | 'children'>[];
};
