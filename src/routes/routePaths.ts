/**
 * 1. use kebab case for route names ie: user-profile
 * 2. use descriptive names
 * 3. avoid special characters
 * 4. use route constants
 * 5. Avoid Overusing Abbreviations: like /user to /usr
 */

export const TEST_ROUTE = '/test';
export const HOME_ROUTE = '/';
export const LOGIN_ROUTE = '/login';
export const REGISTER_ROUTE = '/register';
export const DASHBOARD_ROUTE = '/dashboard';
export const PROFILE_ROUTE = '/profile';
export const ONBOARDING_ROUTE = '/onboarding';
export const FORGOT_ROUTE = '/forget-password';
export const NOT_FOUND_ROUTE = '*';
export const LOG_OUT_ROUTE = '/logout';
export const VERIFICATION_ROUTE = '/verification-code';
export const BUILDING_ROUTE = '/buildings';
export const ADD_BUILDING_ROUTE = 'add';
export const VIEW_BUILDING_ROUTE = ':buildingId';
export const PRINTER_ROUTE = '/printer';
export const ADD_PRINTER_ROUTE = 'add-printer';
export const VIEW_PRINTER_JOBS_ROUTE = '/printer-jobs';
export const VIEW_PRINTER_JOBS_DETAILS_ROUTE = '/printer-jobs/:jobId';
export const VIEW_PRINTER_CLIENTS_ROUTE = '/printer-clients';
export const VIEW_PRINTER_HISTORY_ROUTE = '/printer-history';
export const CREATE_JOBS_ROUTE = '/create-jobs';
export const ADD_JOBS_ROUTE = ':jobFor';
export const VIEW_JOBS_ROUTE = 'details/:jobFor/:jobId';
export const ONBOARDING_CURRENT_STEP_ROUTE = ':onboardingCurrentStep';
export const MY_JOBS_ROUTE = '/my-jobs';
export const VIEW_MY_NOTIFICATIONS = '/notifications';

export const VIEW_MY_JOBS_ROUTE = ':myJobProposalId';

export const MESSAGE_ROUTE = '/message';
export const PROPOSAL_ROUTE = '/proposals';
export const VIEW_PROPOSAL_ROUTE = ':proposalId/';
export const VIEW_PARTICULAR_JOB_PROPOSAL_ROUTE = ':individualProposalId';
export const SETTING_ROUTE = '/settings';
export const BROWSE_JOBS_ROUTE = '/browse-jobs';
export const VIEW_BROWSE_JOBS_ROUTE = ':jobId';
export const CREATE_JOB_PROPOSAL_ROUTE = 'create-proposal';
export const JOBS_ROUTE = '/jobs';
export const JOBS_DETAILS_ROUTE = 'details/:jobId';
export const CONTRACT_ROUTE = '/contract';
export const CONTRACT_DETAILS_ROUTE = ':contractId';
export const SCHEDULE_ROUTE = '/schedule';
export const DOWNLOAD_SYMBOLS_ROUTE = '/downloads-symbols';
export const DOWNLOAD_TEMPLATE_ROUTE = '/downloads-template';
export const VIEW_TEMPLATE_ROUTE = '/downloads-template/:templateId';
export const COMPLETE_PDF_ROUTE = '/completepdf';
export const CONTRACT_ROUTE_CLIENT = '/contractclient';
export const CONTRACT_DETAIL_ROUTE_CLIENT = ':clientContractId';
export const REVIEW_ROUTE_ADMIN = '/reviews';
export const VIEW_REVIEW_JOB_DETAIL_ROUTE = '/reviews/:jobId';
