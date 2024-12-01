import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import App from './App';
import Notfound from './pages/Notfound';
import Login from './pages/login';
import Homepage from './pages/Homepage';
// import ContractPage from './components/contract';
import { GoogleOAuthProvider } from '@react-oauth/google';
import DashboardAdvertiser from './pages/DashboardAdvertiser';
import CampaignForm from './pages/NewCampaignsPage';
import CampaignsPageList from './pages/CampaignsPageList';
import PublisherDashboard from './pages/DashboardPublisher';
import ScriptsDisplay from './pages/ScriptsDisplay';
import AnalyticsPage from './pages/PublisherAnalytics';
import PaymentsPage from './pages/PublisherPayout';
import RequestPaymentForm from './pages/PublisherPaymentsReq';


const router = createBrowserRouter(
  
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Homepage />} />
      <Route path="login" element={<Login />} /> 
      <Route path='dashboard'>
        <Route path="advertiser" element={<DashboardAdvertiser/>}/>
        <Route path="advertiser/list" element={<CampaignsPageList/>}/>
        <Route path="advertiser/list/new" element={<CampaignForm/>}/>
        {/* publisher----------------- */}
        <Route path="publisher" element={<PublisherDashboard />}/>
        <Route path="publisher/scripts" element={<ScriptsDisplay />} />
        <Route path="publisher/analytics" element={<AnalyticsPage />} />
        <Route path="publisher/payout" element={<PaymentsPage />}/>
        <Route path="publisher/payout/request" element={<RequestPaymentForm />} />
        </Route>
      <Route path="*" element={<Notfound />} />
    </Route>
  )
);
const GOOGLE_CLIENT_ID = "129623242907-neejh1sq1no1a3stf5khu5h48mkjh67s.apps.googleusercontent.com"

// Render the router provider
createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId = {GOOGLE_CLIENT_ID}>
  <RouterProvider router={router} />
  </GoogleOAuthProvider>
);
