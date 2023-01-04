import React, { useState } from 'react'

import {
  CCol,
  CLink,
  CRow,
  CWidgetStatsF,
  CButton,
  CForm,
  CFormCheck,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CInputGroup,
  CInputGroupText,
  CCardBody,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilArrowRight, cilBell, cilMoon, cilLaptop, cilSettings } from '@coreui/icons'

const Fund = () => {
  return (
    <CRow>
      <CCol xs={12} sm={6} lg={3}>
        <CWidgetStatsF
          className="mb-3"
          icon={<CIcon width={24} icon={cilSettings} size="xl" />}
          title="Wallet Balance"
          value="$1.999,50"
          color="primary"
          footer={
            <CLink
              className="font-weight-bold font-xs text-medium-emphasis"
              href="https://coreui.io/"
              rel="noopener norefferer"
              target="_blank"
            >
              Payment History
              <CIcon icon={cilArrowRight} className="float-end" width={16} />
            </CLink>
          }
        />
      </CCol>
      <CCol xs={12} sm={6} lg={3}>
        <CWidgetStatsF
          className="mb-3"
          icon={<CIcon width={24} icon={cilLaptop} size="xl" />}
          title="Pending Payment"
          value="$1.999,50"
          color="info"
          footer={
            <CLink
              className="font-weight-bold font-xs text-medium-emphasis"
              href="https://coreui.io/"
              rel="noopener norefferer"
              target="_blank"
            >
              Payment History
              <CIcon icon={cilArrowRight} className="float-end" width={16} />
            </CLink>
          }
        />
      </CCol>
      <CCol xs={12} sm={6} lg={3}>
        <CWidgetStatsF
          className="mb-3"
          icon={<CIcon width={24} icon={cilMoon} size="xl" />}
          title="Revenue"
          value="$1.999,50"
          color="warning"
          footer={
            <CLink
              className="font-weight-bold font-xs text-medium-emphasis"
              href="https://coreui.io/"
              rel="noopener norefferer"
              target="_blank"
            >
              Payment History
              <CIcon icon={cilArrowRight} className="float-end" width={16} />
            </CLink>
          }
        />
      </CCol>
      <CCol xs={12} sm={6} lg={3}>
        <CWidgetStatsF
          className="mb-3"
          icon={<CIcon width={24} icon={cilBell} size="xl" />}
          title="Loss"
          value="$1.999,50"
          color="danger"
          footer={
            <CLink
              className="font-weight-bold font-xs text-medium-emphasis"
              href="https://coreui.io/"
              rel="noopener norefferer"
              target="_blank"
            >
              Payment History
              <CIcon icon={cilArrowRight} className="float-end" width={16} />
            </CLink>
          }
        />
      </CCol>
      <CCardBody>{Pay()}</CCardBody>
    </CRow>
  )
}

const Pay = () => {
  const [validated, setValidated] = useState(false)
  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }
  return (
    <CForm
      className="row g-3 needs-validation"
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >
      <h3>Fund Your Wallet</h3>
      <CCol md={4}>
        <CFormLabel htmlFor="validationCustom01">Email</CFormLabel>
        <CFormInput type="text" id="validationCustom01" defaultValue="Mark" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationCustom02">Email</CFormLabel>
        <CFormInput type="text" id="validationCustom02" defaultValue="Otto" required />
        <CFormFeedback valid>Looks good!</CFormFeedback>
      </CCol>
      <CCol md={4}>
        <CFormLabel htmlFor="validationCustomUsername">Username</CFormLabel>
        <CInputGroup className="has-validation">
          <CInputGroupText id="inputGroupPrepend">@</CInputGroupText>
          <CFormInput
            type="text"
            id="validationCustomUsername"
            defaultValue=""
            aria-describedby="inputGroupPrepend"
            required
          />
          <CFormFeedback invalid>Please choose a username.</CFormFeedback>
        </CInputGroup>
      </CCol>
      <CCol md={6}>
        <CFormLabel htmlFor="validationCustom03">City</CFormLabel>
        <CFormInput type="text" id="validationCustom03" required />
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="validationCustom04">City</CFormLabel>
        <CFormSelect id="validationCustom04">
          <option disabled>Choose...</option>
          <option>...</option>
        </CFormSelect>
        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
      </CCol>
      <CCol md={3}>
        <CFormLabel htmlFor="validationCustom05">City</CFormLabel>
        <CFormInput type="text" id="validationCustom05" required />
        <CFormFeedback invalid>Please provide a valid zip.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CFormCheck
          type="checkbox"
          id="invalidCheck"
          label="Agree to terms and conditions"
          required
        />
        <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
      </CCol>
      <CCol xs={12}>
        <CButton color="success" type="submit">
          Pay
        </CButton>
      </CCol>
    </CForm>
  )
}

export default Fund
