import React from 'react'

import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import { CChartLine, CChartPolarArea } from '@coreui/react-chartjs'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Report = () => {
  const random = () => Math.round(Math.random() * 100)
  return (
    <>
      <WidgetsDropdown />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol xs={6}>
              <CCard className="mb-4">
                <CCardHeader>Polar Area Chart</CCardHeader>
                <CCardBody>
                  <CChartPolarArea
                    data={{
                      labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
                      datasets: [
                        {
                          data: [11, 16, 7, 3, 14],
                          backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
                        },
                      ],
                    }}
                  />
                </CCardBody>
              </CCard>
            </CCol>
            <CCol xs={6}>
              <CCard className="mb-4">
                <CCardHeader>Line Chart</CCardHeader>
                <CCardBody>
                  <CChartLine
                    data={{
                      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                      datasets: [
                        {
                          label: 'My First dataset',
                          backgroundColor: 'rgba(220, 220, 220, 0.2)',
                          borderColor: 'rgba(220, 220, 220, 1)',
                          pointBackgroundColor: 'rgba(220, 220, 220, 1)',
                          pointBorderColor: '#fff',
                          data: [
                            random(),
                            random(),
                            random(),
                            random(),
                            random(),
                            random(),
                            random(),
                          ],
                        },
                        {
                          label: 'My Second dataset',
                          backgroundColor: 'rgba(151, 187, 205, 0.2)',
                          borderColor: 'rgba(151, 187, 205, 1)',
                          pointBackgroundColor: 'rgba(151, 187, 205, 1)',
                          pointBorderColor: '#fff',
                          data: [
                            random(),
                            random(),
                            random(),
                            random(),
                            random(),
                            random(),
                            random(),
                          ],
                        },
                      ],
                    }}
                  />
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Report
