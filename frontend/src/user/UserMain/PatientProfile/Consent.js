import React from 'react'
import Button from '@mui/material/Button'

const Consent = () => {
  return (
    <div>
      <p className='px-14'>IntelliHealth Organ Donor Information Sharing Consent Agreement<br/><br/>

      This Organ Donor Information Sharing Consent Agreement ("Consent Agreement") is entered into between IntelliHealth ("Platform" or "We") and the organ donor ("Donor" or "User"). This Consent Agreement governs the sharing of Donor's organ donation information on the IntelliHealth platform.<br/><br/>

      1. Purpose of Information Sharing<br/><br/>

      The purpose of sharing organ donation information on the IntelliHealth platform is to:<br/><br/>

      Raise awareness about organ donation.
      Facilitate potential matches between organ donors and recipients.
      Support and promote the cause of organ transplantation and donation.
      2. Privacy and Confidentiality<br/><br/>

      Organ donor information provided for organ donation purposes, including but not limited to name, contact details, organ(s) available for donation, medical history related to organ donation, and any other relevant information, will be treated with the utmost confidentiality. Information will only be shared with individuals or organizations directly involved in organ donation and transplantation processes.<br/><br/>

      3. Duration of Consent<br/><br/>

      This Consent Agreement remains valid until the User chooses to revoke it. Users reserve the right to withdraw their consent at any time by notifying IntelliHealth. Any information shared before the revocation will remain subject to the terms of this Consent Agreement.<br/><br/>

      4. Revoking Consent<br/><br/>

      In the event that a User decides to revoke consent, they must provide written notice to IntelliHealth. Following the revocation, the User's organ donation information will no longer be shared on the platform.<br/><br/>

      5. Agreement<br/><br/>

      Users acknowledge that they have read and understood the terms and conditions outlined in this Consent Agreement and agree to abide by them. Users provide consent voluntarily and without coercion.<br/><br/>

      6. Contact Information<br/><br/>

      IntelliHealth may contact Users at the following address or email for matters related to consent:<br/><br/>

      Address: 1234 Random Street, Mumbai, India<br/>
      Email: contact@intellihealth.org<br/>
      Phone: +91-123-456-7890<br/><br/>

      7. Governing Law<br/><br/>

      This Consent Agreement shall be governed by and construed in accordance with the laws of Mumbai, India. Any disputes arising from or related to this Agreement shall be subject to the exclusive jurisdiction of the courts in Mumbai.<br/><br/></p>
      
      
      <div className='w-full flex items-center justify-center mt-10 mb-10'>  
            <Button style={{paddingLeft:"36px", paddingRight:"36px", paddingTop:"12px", paddingBottom:"12px"}}
            className=' text-white text-xl font-bold flex items-center justify-center gap-5  group ' variant='contained'>

            Agree to Terms and Conditions

            </Button>
      </div>

    </div>
  )
}

export default Consent