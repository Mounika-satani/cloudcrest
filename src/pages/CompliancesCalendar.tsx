import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar as CalendarIcon, FileText, ArrowRight, ChevronRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Calendar } from '@/components/ui/calendar';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

const complianceData: Record<string, { date: string; day: number; title: string; description: string }[]> = {
  'April 2025': [
    { date: '01-Apr', day: 1, title: 'Trade License Renewal (First 3 Months Delay)', description: '25% penalty on the trade fee for renewal applications submitted between April 1st and June 30th.' },
    { date: '07-Apr', day: 7, title: 'ECB-2 Return', description: 'Monthly return on External Commercial Borrowing transactions (March data)' },
    { date: '10-Apr', day: 10, title: 'GSTR-7 / GSTR-8', description: 'TDS Return & E-Commerce Operator Statement (March data)' },
    { date: '10-Apr', day: 10, title: 'Professional Tax', description: 'Monthly payment of Professional Tax (March)' },
    { date: '11-Apr', day: 11, title: 'GSTR-1 (Monthly)', description: 'Details of Outward Supplies (March data)' },
    { date: '13-Apr', day: 13, title: 'GSTR-1 (Quarterly – Q4)', description: 'Quarterly Outward Supplies return (Jan-Mar)' },
    { date: '15-Apr', day: 15, title: 'ECR – EPF / ESI', description: 'Monthly PF & ESI challan-cum-return (March contributions)' },
    { date: '18-Apr', day: 18, title: 'CMP-08', description: 'Quarterly Return under GST Composition Scheme (Q4: Jan–Mar)' },
    { date: '20-Apr', day: 20, title: 'GSTR-3B (Monthly)', description: 'Monthly GST Return for March data' },
    { date: '22-Apr', day: 22, title: 'GSTR-3B (Quarterly – QRMP)', description: 'Quarterly GSTR-3B for Q4 (Jan–Mar) under QRMP Scheme (category 1states)' },
    { date: '30-Apr', day: 30, title: 'MSME-1', description: 'Half-yearly return for outstanding payments to micro & small vendors (Oct–Mar)' },
    { date: '30-Apr', day: 30, title: 'Annual Return – EPF (Exempted)', description: 'Filing of Annual Return of Exempted Establishment under EPF' },
    { date: '30-Apr', day: 30, title: 'ER-1 (Employment Exchange)', description: 'Quarterly Return (Q4: Jan–Mar) – Compulsory Notification of Vacancies Act' },
    { date: '30-Apr', day: 30, title: 'TDS Monthly Deposit', description: 'TDS deducted in March (non-govt deductors)' },
  ],
  'May 2025': [
    { date: '07-May', day: 7, title: 'TDS Monthly Deposit', description: 'TDS deducted in March (non-govt deductors)' },
    { date: '07-May', day: 7, title: 'ECB-2 Return', description: 'Monthly return on External Commercial Borrowing transactions (April data)' },
    { date: '10-May', day: 10, title: 'GSTR-7 / GSTR-8', description: 'TDS Return & E-Commerce Operator Statement (April data)' },
    { date: '10-May', day: 10, title: 'Professional Tax', description: 'Monthly payment of Professional Tax (April)' },
    { date: '11-May', day: 11, title: 'GSTR-1 (Monthly)', description: 'Details of Outward Supplies (April data)' },
    { date: '12-May', day: 12, title: 'ESI Return of Contribution', description: 'Half-Yearly ESI Contribution Return (Oct–Mar period)' },
    { date: '15-May', day: 15, title: 'ECR – EPF / ESI', description: 'Monthly PF & ESI challan-cum-return (April contributions)' },
    { date: '20-May', day: 20, title: 'GSTR-3B (Monthly)', description: 'Monthly GST Return for April data' },
    { date: '30-May', day: 30, title: 'PAS-6', description: 'Reconciliation of Share Capital Audit Report – Half-Yearly (Oct–Mar period)' },
    { date: '30-May', day: 30, title: 'LLP-11', description: 'Annual Return of LLP' },
    { date: '30-May', day: 30, title: 'Form GST ITC-03', description: 'Declaration for reversal of Input Tax Credit (ITC) on stock, semi-finished, and finished goods held on the day of switching.' },
    { date: '31-May', day: 31, title: 'Form 170 (61A)', description: 'Statement of Specified Financial Transactions (Income Tax)' },
    { date: '31-May', day: 31, title: 'Form 113 (10BD)', description: 'Statement of Donations received by Trust/Society registered u/s 80G' },
    { date: '31-May', day: 31, title: 'Form 114 (10BE)', description: 'Donation Certificate issued to donors by Trust/Society (80G)' },
    { date: '31-May', day: 31, title: 'TDS Return – Form 138 {Form 24Q} /140 {Form 26Q} /144 {Form 27Q}', description: 'Quarterly TDS Return for Q4 (Jan–Mar)' },
    { date: '31-May', day: 31, title: 'Form 61A (SFT)', description: 'Annual Statement of Specified Financial Transactions (High-value cash, property, etc.)' },
    { date: '31-May', day: 31, title: 'Form 61A (SFT - Securities)', description: 'Half-yearly reporting of listed securities and mutual fund transactions - For Period October to March' },
    { date: '31-May', day: 31, title: 'Form 61B', description: 'Statement for FATCA/CRS reportable accounts (Financial Institutions)' },
  ],
  'June 2025': [
    { date: '07-Jun', day: 7, title: 'TDS Monthly Deposit', description: 'TDS deducted in March (non-govt deductors)' },
    { date: '07-Jun', day: 7, title: 'ECB-2 Return', description: 'Monthly return on External Commercial Borrowing transactions (May data)' },
    { date: '10-Jun', day: 10, title: 'GSTR-7 / GSTR-8', description: 'TDS Return & E-Commerce Operator Statement (May data)' },
    { date: '10-Jun', day: 10, title: 'Professional Tax', description: 'Monthly payment of Professional Tax (May)' },
    { date: '11-Jun', day: 11, title: 'GSTR-1 (Monthly)', description: 'Details of Outward Supplies (May data)' },
    { date: '15-Jun', day: 15, title: 'Form 131 (16A)', description: 'TDS Certificate for Non-Salary payments (Q4: Jan–Mar)' },
    { date: '15-Jun', day: 15, title: 'Form 130 (16)', description: 'TDS Certificate for Salary (Annual – FY 2024-25)' },
    { date: '15-Jun', day: 15, title: 'Advance Tax – Q1', description: 'First instalment of Corporate Advance Tax for FY 2025-26' },
    { date: '15-Jun', day: 15, title: 'ECR – EPF / ESI', description: 'Monthly PF & ESI challan-cum-return (May contributions)' },
    { date: '20-Jun', day: 20, title: 'GSTR-3B (Monthly)', description: 'Monthly GST Return for May data' },
    { date: '30-Jun', day: 30, title: 'DIR-3 KYC', description: 'KYC of Directors with MCA' },
    { date: '30-Jun', day: 30, title: 'DPT-3', description: 'Annual return of deposits / outstanding loans filed with ROC' },
    { date: '30-Jun', day: 30, title: 'Professional Tax (Annual)', description: 'Annual Professional Tax return filing' },
    { date: '30-Jun', day: 30, title: 'GSTR-4', description: 'Annual Return under Composition Scheme (GST).' },
    { date: '30-Jun', day: 30, title: 'Annual Performance Report (APR)', description: 'Annual Progress Report for working EOU/STP/EHTP units, covering export performance, NFE earning, etc.' },
  ],
  'July 2025': [
    { date: '01-Jul', day: 1, title: 'Trade License Renewal (Delayed First 3 Months)', description: '50% penalty on the trade fee for renewal applications submitted from July 1st onwards.' },
    { date: '07-Jul', day: 7, title: 'TDS Monthly Deposit', description: 'TDS deducted in March (non-govt deductor’s)' },
    { date: '07-Jul', day: 7, title: 'ECB-2 Return', description: 'Monthly return on External Commercial Borrowing transactions (June data)' },
    { date: '10-Jul', day: 10, title: 'GSTR-7 / GSTR-8', description: 'TDS Return & E-Commerce Operator Statement (June data)' },
    { date: '10-Jul', day: 10, title: 'Professional Tax', description: 'Monthly payment of Professional Tax (June)' },
    { date: '11-Jul', day: 11, title: 'GSTR-1 (Monthly)', description: 'Details of Outward Supplies (June data)' },
    { date: '13-Jul', day: 13, title: 'GSTR-1 (Quarterly – Q1)', description: 'Quarterly Outward Supplies return (Apr–Jun)' },
    { date: '15-Jul', day: 15, title: 'FLA Return', description: 'FEMA: Annual return of Foreign Liabilities & Assets' },
    { date: '15-Jul', day: 15, title: 'ECR – EPF / ESI', description: 'Monthly PF & ESI challan-cum-return (June contributions)' },
    { date: '18-Jul', day: 18, title: 'CMP-08( Composition Scheme – Q1)', description: 'Quarterly Composition Scheme Supplies return (Apr–Jun)' },
    { date: '20-Jul', day: 20, title: 'GSTR-3B (Monthly)', description: 'Monthly GST Return for June data' },
    { date: '22-Jul', day: 22, title: 'GSTR-3B (Quarterly – QRMP)', description: 'Quarterly GSTR-3B for Q1 (Apr–Jun) under QRMP (Cat-1)' },
    { date: '30-Jul', day: 30, title: 'ER-1 (Employment Exchange)', description: 'Quarterly Return Q1 (Apr–Jun) – Notification of Vacancies' },
    { date: '30-Jul', day: 30, title: 'CLRA / Inter-State Migrant', description: 'Half-Yearly Return under Contract Labour (Apr–Sep)' },
    { date: '31-Jul', day: 31, title: 'ITR-1 & ITR-2', description: 'Income Tax Return filing for Individuals (non-audit)' },
    { date: '31-Jul', day: 31, title: 'TDS Return – Form 138 {Form 24Q} /140 {Form 26Q} /144 {Form 27Q}', description: 'Quarterly TDS Return for Q1 (Apr–Jun)' },
  ],
  'August 2025': [
    { date: '07-Aug', day: 7, title: 'TDS Monthly Deposit', description: 'TDS deducted in March (non-govt deductors)' },
    { date: '07-Aug', day: 7, title: 'ECB-2 Return', description: 'Monthly return on External Commercial Borrowing transactions (July data)' },
    { date: '10-Aug', day: 10, title: 'GSTR-7 / GSTR-8', description: 'TDS Return & E-Commerce Operator Statement (July data)' },
    { date: '10-Aug', day: 10, title: 'Professional Tax', description: 'Monthly payment of Professional Tax (July)' },
    { date: '11-Aug', day: 11, title: 'GSTR-1 (Monthly)', description: 'Details of Outward Supplies (July data)' },
    { date: '15-Aug', day: 15, title: 'Form 131 (16A)', description: 'TDS Certificate for Non-Salary payments (Q1: Apr–Jun)' },
    { date: '15-Aug', day: 15, title: 'ECR – EPF / ESI', description: 'Monthly PF & ESI challan-cum-return (July contributions)' },
    { date: '20-Aug', day: 20, title: 'GSTR-3B (Monthly)', description: 'Monthly GST Return for July data' },
    { date: '31-Aug', day: 31, title: 'ITR-3 & ITR-4 (non-Audit)', description: 'Income Tax Return for business/profession (non-audit cases)' },
  ],
  'September 2025': [
    { date: '07-Sep', day: 7, title: 'TDS Monthly Deposit', description: 'TDS deducted in March (non-govt deductors)' },
    { date: '07-Sep', day: 7, title: 'ECB-2 Return', description: 'Monthly return on External Commercial Borrowing transactions (August data)' },
    { date: '10-Sep', day: 10, title: 'GSTR-7 / GSTR-8', description: 'TDS Return & E-Commerce Operator Statement (August data)' },
    { date: '10-Sep', day: 10, title: 'Professional Tax', description: 'Monthly payment of Professional Tax (August)' },
    { date: '11-Sep', day: 11, title: 'GSTR-1 (Monthly)', description: 'Details of Outward Supplies (August data)' },
    { date: '15-Sep', day: 15, title: 'Advance Tax – Q2', description: 'Second instalment of Corporate Advance Tax for FY 2025-26' },
    { date: '15-Sep', day: 15, title: 'ECR – EPF / ESI', description: 'Monthly PF & ESI challan-cum-return (August contributions)' },
    { date: '20-Sep', day: 20, title: 'GSTR-3B (Monthly)', description: 'Monthly GST Return for August data' },
    { date: '30-Sep', day: 30, title: 'Audit Report – Form 112', description: 'Charitable/Religious Trust Audit Report' },
    { date: '30-Sep', day: 30, title: 'Form 26 (3CB/3CD)', description: 'Tax Audit Report (Companies – non-transfer pricing cases)' },
    { date: '30-Sep', day: 30, title: 'AGM (Last Date)', description: 'Annual General Meeting to be held (last date as per Companies Act)' },
  ],
  'October 2025': [
    { date: '07-Oct', day: 7, title: 'TDS Monthly Deposit', description: 'TDS deducted in March (non-govt deductors)' },
    { date: '07-Oct', day: 7, title: 'ECB-2 Return', description: 'Monthly return on External Commercial Borrowing transactions (September data)' },
    { date: '10-Oct', day: 10, title: 'GSTR-7 / GSTR-8', description: 'TDS Return & E-Commerce Operator Statement (September data)' },
    { date: '10-Oct', day: 10, title: 'Professional Tax', description: 'Monthly payment of Professional Tax (September)' },
    { date: '11-Oct', day: 11, title: 'GSTR-1 (Monthly)', description: 'Details of Outward Supplies (September data)' },
    { date: '13-Oct', day: 13, title: 'GSTR-1 (Quarterly – Q2)', description: 'Quarterly Outward Supplies return (July-Sep)' },
    { date: '15-Oct', day: 15, title: 'ECR – EPF / ESI', description: 'Monthly PF & ESI challan-cum-return (September contributions)' },
    { date: '18-Oct', day: 18, title: 'CMP-08', description: 'Quarterly Return under GST Composition Scheme (Q2: Jul–Sep)' },
    { date: '20-Oct', day: 20, title: 'GSTR-3B (Monthly)', description: 'Monthly GST Return for September data' },
    { date: '22-Oct', day: 22, title: 'GSTR-3B (Quarterly – QRMP)', description: 'Quarterly GSTR-3B for Q2 (Jul–Sep) under QRMP (Cat-1)' },
    { date: '30-Oct', day: 30, title: 'AOC-4 / CFS / XBRL', description: 'Filing of Financial Statements with ROC (within 30 days of AGM)' },
    { date: '30-Oct', day: 30, title: 'Form MR-3', description: 'Secretarial Audit Report submitted along with Board Report' },
    { date: '30-Oct', day: 30, title: 'LLP-8', description: 'Statement of Accounts and Solvency of LLP' },
    { date: '30-Oct', day: 30, title: 'ER-1 (Employment Exchange)', description: 'Quarterly Return Q2 (Jul–Sep) – Notification of Vacancies' },
    { date: '31-Oct', day: 31, title: 'Form No. 48 (3CEB)', description: 'Transfer Pricing Audit Report (Foreign Transactions)' },
    { date: '31-Oct', day: 31, title: 'Form 26 (3CB/3CD) – TP', description: 'Tax Audit if transfer pricing applicable' },
    { date: '31-Oct', day: 31, title: 'ITR-6 / ITR-7', description: 'Income Tax Return for Companies / Trusts (Audit cases)' },
    { date: '31-Oct', day: 31, title: 'TDS Return – Form 138 {Form 24Q} /140 {Form 26Q} /144 {Form 27Q}', description: 'Quarterly TDS Return for Q2 (Jul–Sep)' },
    { date: '31-Oct', day: 31, title: 'MSME-1', description: 'Half-yearly return for outstanding payments to micro & small vendors (Apr–Sep)' },
  ],
  'November 2025': [
    { date: '07-Nov', day: 7, title: 'TDS Monthly Deposit', description: 'TDS deducted in March (non-govt deductors)' },
    { date: '07-Nov', day: 7, title: 'ECB-2 Return', description: 'Monthly return on External Commercial Borrowing transactions (October data)' },
    { date: '10-Nov', day: 10, title: 'GSTR-7 / GSTR-8', description: 'TDS Return & E-Commerce Operator Statement (October data)' },
    { date: '10-Nov', day: 10, title: 'Professional Tax', description: 'Monthly payment of Professional Tax (October)' },
    { date: '11-Nov', day: 11, title: 'GSTR-1 (Monthly)', description: 'Details of Outward Supplies (October data)' },
    { date: '12-Nov', day: 12, title: 'ESI Return of Contribution', description: 'Half-Yearly ESI Contribution Return (Apr–Sep period)' },
    { date: '15-Nov', day: 15, title: 'Form 131 (16A)', description: 'TDS Certificate for Non-Salary payments (Q2: Jul–Sep)' },
    { date: '15-Nov', day: 15, title: 'ECR – EPF / ESI', description: 'Monthly PF & ESI challan-cum-return (October contributions)' },
    { date: '20-Nov', day: 20, title: 'GSTR-3B (Monthly)', description: 'Monthly GST Return for October data' },
    { date: '29-Nov', day: 29, title: 'MGT-7 / 7A / MGT-8', description: 'Annual Return of Company / CS Certification' },
    { date: '29-Nov', day: 29, title: 'PAS-6', description: 'Reconciliation of Share Capital Audit Report – Half-Yearly (Apr–Sep period)' },
    { date: '30-Nov', day: 30, title: 'ITR – Transfer Pricing', description: 'Income Tax Return if Transfer Pricing applies' },
  ],
  'December 2025': [
    { date: '01-Dec', day: 1, title: 'Labor License', description: 'Annual Fee payment without Penalty' },
    { date: '07-Dec', day: 7, title: 'TDS Monthly Deposit', description: 'TDS deducted in March (non-govt deductors)' },
    { date: '07-Dec', day: 7, title: 'ECB-2 Return', description: 'Monthly return on External Commercial Borrowing transactions (November data)' },
    { date: '10-Dec', day: 10, title: 'GSTR-7 / GSTR-8', description: 'TDS Return & E-Commerce Operator Statement (November data)' },
    { date: '10-Dec', day: 10, title: 'Professional Tax', description: 'Monthly payment of Professional Tax (November)' },
    { date: '11-Dec', day: 11, title: 'GSTR-1 (Monthly)', description: 'Details of Outward Supplies (November data)' },
    { date: '15-Dec', day: 15, title: 'Advance Tax – Q3', description: 'Third instalment of Corporate Advance Tax for FY 2025-26' },
    { date: '15-Dec', day: 15, title: 'ECR – EPF / ESI', description: 'Monthly PF & ESI challan-cum-return (November contributions)' },
    { date: '20-Dec', day: 20, title: 'GSTR-3B (Monthly)', description: 'Monthly GST Return for November data' },
    { date: '31-Dec', day: 31, title: 'GSTR-9 & GSTR-9C', description: 'GST Annual Return & Audit for FY 2025-2026' },
    { date: '31-Dec', day: 31, title: 'APR (FEMA)', description: 'Annual Performance Report for Overseas Direct Investment (ODI)' },
    { date: '31-Dec', day: 31, title: 'FCRA – Form FC-4', description: 'Annual Return for Trust/Society receiving foreign contributions' },
    { date: '31-Dec', day: 31, title: 'Labour Welfare Fund', description: 'Deduction and payment of LWF contribution' },
    { date: '31-Dec', day: 31, title: 'Shop & Establishment Act', description: 'Annual Report under Shop and Establishment Act' },
    { date: '31-Dec', day: 31, title: 'National & Festival Holidays', description: 'Display of holiday list for following year' },
    { date: '31-Dec', day: 31, title: 'Labor License Penalty', description: 'Annual Fee payment with 25% Penalty' },
  ],
  'January 2026': [
    { date: '07-Jan', day: 7, title: 'TDS Monthly Deposit', description: 'TDS deducted in March (non-govt deductors)' },
    { date: '07-Jan', day: 7, title: 'ECB-2 Return', description: 'Monthly return on External Commercial Borrowing transactions (December data)' },
    { date: '10-Jan', day: 10, title: 'GSTR-7 / GSTR-8', description: 'TDS Return & E-Commerce Operator Statement (December data)' },
    { date: '10-Jan', day: 10, title: 'Professional Tax', description: 'Monthly payment of Professional Tax (December)' },
    { date: '11-Jan', day: 11, title: 'GSTR-1 (Monthly)', description: 'Details of Outward Supplies (December data)' },
    { date: '13-Jan', day: 13, title: 'GSTR-1 (Quarterly – Q3)', description: 'Quarterly Outward Supplies return (Oct-Dec)' },
    { date: '15-Jan', day: 15, title: 'ECR – EPF / ESI', description: 'Monthly PF & ESI challan-cum-return (December contributions)' },
    { date: '18-Jan', day: 18, title: 'CMP-08', description: 'Quarterly Return under GST Composition Scheme (Q3: Oct–Dec)' },
    { date: '20-Jan', day: 20, title: 'GSTR-3B (Monthly)', description: 'Monthly GST Return for December data' },
    { date: '22-Jan', day: 22, title: 'GSTR-3B (Quarterly – QRMP)', description: 'Quarterly GSTR-3B for Q3 (Oct–Dec) under QRMP (Cat-1)' },
    { date: '30-Jan', day: 30, title: 'ER-1 (Employment Exchange)', description: 'Quarterly Return Q3 (Oct–Dec) – Notification of Vacancies' },
    { date: '30-Jan', day: 30, title: 'CLRA / Inter-State Migrant', description: 'Half-Yearly Return (Oct–Mar period)' },
    { date: '31-Jan', day: 31, title: 'TDS Return – Form 138 {Form 24Q} /140 {Form 26Q} /144 {Form 27Q}', description: 'Quarterly TDS Return for Q3 (Oct–Dec)' },
    { date: '31-Jan', day: 31, title: 'Minimum Wages Annual Return', description: 'Annual return (AP, TS, CG)' },
    { date: '31-Jan', day: 31, title: 'National & Festival Holidays', description: 'Annual return under Act' },
    { date: '31-Jan', day: 31, title: 'Sexual Harassment (POSH)', description: 'Annual Report of Internal Complaints Committee (ICC)' },
    { date: '31-Jan', day: 31, title: 'Labour Welfare Fund', description: 'Filing of LWF Statement with authorities' },
    { date: '31-Jan', day: 31, title: 'Form 61A (SFT - Securities)', description: 'Half-yearly reporting of listed securities and mutual fund transactions' },
  ],
  'February 2026': [
    { date: '01-Feb', day: 1, title: 'Payment of Bonus Act', description: 'Annual Return filing under Payment of Bonus Act' },
    { date: '01-Feb', day: 1, title: 'Payment of Wages (KA / HP)', description: 'Annual Return under Payment of Wages Act (KA/HP)' },
    { date: '01-Feb', day: 1, title: 'Minimum Wages – Rest', description: 'Annual Return for other states' },
    { date: '07-Feb', day: 7, title: 'TDS Monthly Deposit', description: 'TDS deducted in March (non-govt deductors)' },
    { date: '07-Feb', day: 7, title: 'ECB-2 Return', description: 'Monthly return on External Commercial Borrowing transactions (January data)' },
    { date: '10-Feb', day: 10, title: 'GSTR-7 / GSTR-8', description: 'TDS Return & E-Commerce Operator Statement (January data)' },
    { date: '10-Feb', day: 10, title: 'Professional Tax', description: 'Monthly payment of Professional Tax (January)' },
    { date: '11-Feb', day: 11, title: 'GSTR-1 (Monthly)', description: 'Details of Outward Supplies (January data)' },
    { date: '15-Feb', day: 15, title: 'Form 131 (16A)', description: 'TDS Certificate for Non-Salary payments (Q3: Oct–Dec)' },
    { date: '15-Feb', day: 15, title: 'CLRA Annual Return', description: 'Annual Return under Contract Labour Act' },
    { date: '15-Feb', day: 15, title: 'Inter-State Migrant', description: 'Annual Return under Inter-State Migrant Workman Act' },
    { date: '15-Feb', day: 15, title: 'ECR – EPF / ESI', description: 'Monthly PF & ESI challan-cum-return (January contributions)' },
    { date: '20-Feb', day: 20, title: 'GSTR-3B (Monthly)', description: 'Monthly GST Return for January data' },
  ],
  'March 2026': [
    { date: '07-Mar', day: 7, title: 'ECB-2 Return', description: 'Monthly return on External Commercial Borrowing transactions (February data)' },
    { date: '07-Mar', day: 7, title: 'TDS Monthly Deposit', description: 'TDS deposit for February' },
    { date: '10-Mar', day: 10, title: 'GSTR-7 / GSTR-8', description: 'TDS Return & E-Commerce Operator Statement (February data)' },
    { date: '10-Mar', day: 10, title: 'Professional Tax', description: 'Monthly payment of Professional Tax (February)' },
    { date: '11-Mar', day: 11, title: 'GSTR-1 (Monthly)', description: 'Details of Outward Supplies (February data)' },
    { date: '15-Mar', day: 15, title: 'Advance Tax – Q4 Final', description: 'Final instalment of Corporate Advance Tax for FY 2025-26' },
    { date: '15-Mar', day: 15, title: 'ECR – EPF / ESI', description: 'Monthly PF & ESI challan-cum-return (February contributions)' },
    { date: '20-Mar', day: 20, title: 'GSTR-3B (Monthly)', description: 'Monthly GST Return for February data' },
    { date: '31-Mar', day: 31, title: 'DI Reporting (Annual)', description: 'FEMA: Annual Downstream Investment confirmation' },
    { date: '31-Mar', day: 31, title: 'Trade License Renewal', description: 'Annual renewal of the license to avoid penalties and operate legally. (Apply 1st week to 1st month prior)' },
    { date: '31-Mar', day: 31, title: 'Form GST RFD-11 (LUT)', description: 'Filing of Letter of Undertaking to export goods or services without payment of IGST for the next financial year (FY 2026-27).' },
    { date: '31-Mar', day: 31, title: 'Form GST CMP-02', description: 'Intimation by an existing Regular Taxpayer to opt for the Composition Scheme or Composition to Regular Taxpayer for the next financial year (FY 2026-27).' },
  ],
};

const months = [
  'April 2025', 'May 2025', 'June 2025', 'July 2025', 'August 2025',
  'September 2025', 'October 2025', 'November 2025', 'December 2025',
  'January 2026', 'February 2026', 'March 2026'
];

const CALENDAR_URL = "https://cloudcrest-enterprise.vercel.app/compliance-calendar.ics";
const GOOGLE_CAL_URL = `https://calendar.google.com/calendar/render?cid=${CALENDAR_URL}`;
const OUTLOOK_OFFICE_URL = `https://outlook.office.com/calendar/0/addcalendar?url=${CALENDAR_URL}&name=India%20Compliance%20Calendar`;
const OUTLOOK_LIVE_URL = `https://outlook.live.com/calendar/0/addcalendar?url=${CALENDAR_URL}&name=India%20Compliance%20Calendar`;
const WEBCAL_URL = `webcal://cloudcrest-enterprise.vercel.app/compliance-calendar.ics`;

const handleExport = () => {
  const link = document.createElement('a');
  link.href = '/compliance-calendar.ics';
  link.download = 'compliance-calendar.ics';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const CompliancesCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState('April 2025');
  const monthDate = new Date(selectedMonth);
  const events = complianceData[selectedMonth] || [];
  const importantDates = events.map(e => new Date(monthDate.getFullYear(), monthDate.getMonth(), e.day));

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <section className="relative pt-32 pb-12 md:pt-40 md:pb-16" style={{ background: 'var(--gradient-hero)' }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`, backgroundSize: '40px 40px' }} />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-xs font-bold mb-4 backdrop-blur-md border border-accent/20 font-display tracking-widest"
          >
            <CalendarIcon className="w-4 h-4 inline mr-2" />
            UPCOMING DEADLINES
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-5xl font-bold text-white"
          >
            COMPLIANCE CALENDAR – INDIA (FY 2025-26)
          </motion.h1>
        </div>
      </section>

      {/* 3-Column Layout Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-2 max-w-[1400px]">
          <div className="grid lg:grid-cols-12 gap-8 items-start">

            {/* COLUMN 1: LEFT - Month Selector */}
            <aside className="lg:col-span-2 hidden lg:block sticky top-28">
              <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
                <h3 className="text-xs font-bold text-slate-400 mb-4 px-2 uppercase tracking-widest flex items-center gap-2 font-display">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  Timeline
                </h3>
                <div className="space-y-1">
                  {months.map((month) => (
                    <button
                      key={month}
                      onClick={() => setSelectedMonth(month)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-all duration-200 flex items-center justify-between group font-display ${selectedMonth === month
                        ? 'bg-accent text-white shadow-md shadow-accent/20'
                        : 'text-slate-500 hover:bg-slate-50 hover:text-accent border border-transparent'
                        }`}
                    >
                      {month.split(' ')[0]}
                      {selectedMonth === month && <ChevronRight className="w-3 h-3" />}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* COLUMN 2: MIDDLE - Primary Data Cards */}
            <main className="lg:col-span-7 col-span-12 space-y-4">
              {/* Mobile Month Filter (Simple Select/Tabs) */}
              <div className="lg:hidden flex overflow-x-auto no-scrollbar gap-2 mb-6 pb-2 px-2">
                {months.map((month) => (
                  <button
                    key={month}
                    onClick={() => setSelectedMonth(month)}
                    className={`flex-shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all font-display ${selectedMonth === month ? 'bg-accent text-white' : 'bg-white border border-slate-200 text-slate-500'
                      }`}
                  >
                    {month.split(' ')[0]}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                <AnimatePresence mode="popLayout">
                  {events.length > 0 ? (
                    events.map((event, index) => (
                      <motion.div
                        key={`${selectedMonth}-${event.title}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-100 hover:border-accent/30 hover:shadow-xl transition-all duration-300 relative group overflow-hidden"
                      >
                        {/* THE EXACT CARD STYLE FROM PIC */}
                        <div className="w-16 h-16 rounded-xl bg-[#0F172A] flex items-center justify-center flex-shrink-0 text-white z-10 transition-transform group-hover:scale-105 font-display">
                          <div className="text-center">
                            <span className="text-[10px] font-bold text-white/50 block uppercase leading-none mb-1 tracking-wider">{selectedMonth.split(' ')[0]}</span>
                            <span className="text-2xl font-black block leading-none">{event.day}</span>
                          </div>
                        </div>
                        <div className="flex-1 z-10">
                          <div className="flex items-center gap-2 mb-1">
                            <FileText className="w-4 h-4 text-accent" />
                            <h4 className="font-bold text-[#0F172A] text-lg leading-tight font-display">{event.title}</h4>
                          </div>
                          <p className="text-slate-500 text-sm leading-relaxed">{event.description}</p>
                        </div>
                        <div className="absolute right-0 top-0 h-full w-1 bg-accent transform translate-x-1 group-hover:translate-x-0 transition-transform duration-300" />
                      </motion.div>
                    ))
                  ) : (
                    <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-slate-200">
                      <CalendarIcon className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                      <p className="text-slate-400 font-medium">No deadlines for this month.</p>
                    </div>
                  )}
                </AnimatePresence>
              </div>

              {/* Consultation Link */}
              <div className="text-center mt-12 bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                <p className="text-slate-500 mb-6 font-medium">
                  Facing complexity in filings? Let our legal experts handle it for you.
                </p>
                <Link to="/contact-us">
                  <Button variant="accent" size="lg" className="rounded-full px-8 shadow-lg shadow-accent/20 font-display">
                    Get Expert Assistance <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </main>

            {/* COLUMN 3: RIGHT - Small Calendar Card */}
            <aside className="lg:col-span-3 col-span-12 sticky top-28 space-y-6">
              {/* Subscribe Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="accent"
                    className="w-full justify-between h-14 rounded-xl text-base font-bold shadow-lg shadow-accent/20 group hover:scale-[1.02] transition-all font-display"
                  >
                    Subscribe to calendar
                    <ChevronDown className="w-5 h-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-[var(--radix-dropdown-menu-trigger-width)] bg-white rounded-2xl border border-slate-100 p-2 shadow-2xl z-50 animate-in fade-in zoom-in-95 duration-200"
                  align="start"
                >
                  <DropdownMenuItem
                    className="py-3 px-4 rounded-xl focus:bg-slate-50 cursor-pointer text-slate-700 font-semibold transition-colors"
                    onClick={() => window.open(GOOGLE_CAL_URL, '_blank')}
                  >
                    Google Calendar
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="py-3 px-4 rounded-xl focus:bg-slate-50 cursor-pointer text-slate-700 font-semibold transition-colors"
                    onClick={() => window.open(WEBCAL_URL, '_blank')}
                  >
                    iCalendar
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="py-3 px-4 rounded-xl focus:bg-slate-50 cursor-pointer text-slate-700 font-semibold transition-colors"
                    onClick={() => window.open(OUTLOOK_OFFICE_URL, '_blank')}
                  >
                    Outlook 365
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="py-3 px-4 rounded-xl focus:bg-slate-50 cursor-pointer text-slate-700 font-semibold transition-colors"
                    onClick={() => window.open(OUTLOOK_LIVE_URL, '_blank')}
                  >
                    Outlook Live
                  </DropdownMenuItem>
                  <div className="h-px bg-slate-100 my-1 mx-2" />
                  <DropdownMenuItem
                    className="py-3 px-4 rounded-xl focus:bg-slate-50 cursor-pointer text-slate-700 font-semibold transition-colors"
                    onClick={handleExport}
                  >
                    Export .ics File
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="py-3 px-4 rounded-xl focus:bg-slate-50 cursor-pointer text-slate-700 font-semibold transition-colors"
                    onClick={handleExport}
                  >
                    Export Outlook .ics File
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-[2rem] border border-slate-200 p-6 shadow-xl"
              >
                <div className="flex items-center justify-between mb-4 px-2">
                  <h3 className="font-bold text-[#0F172A] text-sm flex items-center gap-2 font-display">
                    <CalendarIcon className="w-4 h-4 text-accent" />
                    {selectedMonth}
                  </h3>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <div className="w-2 h-2 rounded-full bg-slate-100" />
                  </div>
                </div>

                <Calendar
                  mode="single"
                  month={monthDate}
                  disableNavigation
                  modifiers={{
                    important: importantDates
                  }}
                  modifiersClassNames={{
                    important: "!bg-accent !text-white !rounded-full font-bold shadow-md shadow-accent/30"
                  }}
                  className="w-full"
                  classNames={{
                    months: "w-full",
                    month: "w-full space-y-4",
                    caption: "hidden",
                    table: "w-full border-separate border-spacing-y-1",
                    head_row: "flex w-full",
                    head_cell: "text-slate-400 w-full font-bold text-[0.7rem] uppercase tracking-wider",
                    row: "flex w-full mt-1",
                    cell: "h-8 w-full text-center text-xs p-0 relative",
                    day: "h-8 w-full p-0 font-semibold text-slate-600 hover:bg-accent/10 rounded-lg transition-all",
                  }}
                />

                <div className="mt-6 pt-6 border-t border-slate-100 space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-bold text-xs">{events.length}</span>
                    </div>
                    <p className="text-xs font-bold text-slate-500">Deadlines this month</p>
                  </div>
                </div>
              </motion.div>
            </aside>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CompliancesCalendar;
