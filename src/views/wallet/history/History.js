import React from 'react'

import {
  CCard,
  CCardBody,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
} from '@coreui/icons'

const History = () => {
  const tableExample = [
    {
      user: {
        name: '$1.999,50',
        new: true,
        registered: 'Identity Verification',
      },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 50,
        period: 'Identity Verification',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
      activity: '10 sec ago',
    },
    {
      user: {
        name: '$749.00',
        new: false,
        registered: 'Credit Score Check',
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: 'Credit Score Check',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      user: { name: '$839.86', new: true, registered: 'Credit Score Check' },
      country: { name: 'India', flag: cifIn },
      usage: {
        value: 74,
        period: 'Credit Score Check',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      user: { name: '$1,900.67', new: true, registered: 'Identity Verification' },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 98,
        period: 'Identity Verification',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      user: {
        name: '$200.00',
        new: true,
        registered: 'Identity Verification',
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: 'Identity Verification',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      user: {
        name: '$730.90',
        new: true,
        registered: 'Identity Verification',
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: 'Identity Verification',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcAmex },
      activity: 'Last week',
    },
  ]
  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <h3>Payment History</h3>
          <CTable align="middle" className="mb-0 border" hover responsive>
            <CTableHead color="light">
              <CTableRow>
                <CTableHeaderCell>Amount</CTableHeaderCell>

                <CTableHeaderCell className="text-center">Payment Method</CTableHeaderCell>
                <CTableHeaderCell>Date</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {tableExample.map((item, index) => (
                <CTableRow v-for="item in tableItems" key={index}>
                  <CTableDataCell>
                    <div>{item.user.name}</div>
                    <div className="small text-medium-emphasis">
                      <span>{item.user.new ? 'Credit' : 'Debit'}</span> | Category:{' '}
                      {item.user.registered}
                    </div>
                  </CTableDataCell>

                  <CTableDataCell className="text-center">
                    <CIcon size="xl" icon={item.payment.icon} />
                  </CTableDataCell>
                  <CTableDataCell>
                    <div className="small text-medium-emphasis">Last login</div>
                    <strong>{item.activity}</strong>
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
          <CRow></CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default History
