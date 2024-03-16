import React from 'react'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const Education = () => {
  return (
    <div className='h-full w-full'>
        <p className='text-center px-8 py-5 text-3xl tracking-widest mt-3'>Explore Health Care Educational Content and Laws</p>

        <div className='flex items-center justify-around w-full mt-6'>

          <div className=" group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-3xl shadow-2xl">
            <div className="w-[500px] h-[400px]">
              <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhbHRoY2FyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=400&q=60" alt="blog" />
            </div>

            {/* on hover color */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

            {/* on hover text */}
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="text-3xl font-bold text-white">Health Care Blogs</h1>

              <p className="my-6 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Explore a wealth of informative articles on health and wellness, medical breakthroughs, patient stories, and expert insights. Discover how to lead a healthier life, stay informed about the latest healthcare trends, and gain valuable knowledge to make informed decisions about your well-being.</p>

              <Link to="/blog"><Button variant="contained">Explore</Button></Link>
            </div>

          </div>

          <div className=" group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded-3xl shadow-2xl">
            <div className="w-[500px] h-[400px]">
              <img className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-125" src="https://interestedvideos.com/wp-content/uploads/2023/06/healthcare-5K1LG-1536x864.jpg" alt="blog" />
            </div>

            {/* on hover color */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>

            {/* on hover text */}
            <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
              <h1 className="text-3xl font-bold text-white">Health Care Videos</h1>

              <p className="my-6 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Dive into a world of educational and informative videos on various aspects of healthcare. From understanding medical conditions to practical health tips and inspiring patient stories, our videos are here to empower you with knowledge and support your journey towards better health.</p>

              <Link to="/edvideo"><Button variant="contained">Explore</Button></Link>
            </div>

          </div>

        </div>


        {/* Law accordion */}
        <div className='px-20 py-5 mb-10'>
          <p className='text-center px-8 py-5 text-3xl tracking-widest shadow-2xl my-3'>Basic and Required Laws Related to Organ Transplant</p>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className='shadow-2xl my-2'
            >
              <Typography ><span className='font-bold text-xl'>**ORGAN DONATION PROCESS**</span></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              ·  Hospital Organ Donation Registry (HODR) coordinates the process of cadaver organ donation i.e. organ donation after death and transplantation.<br /><br />

              ·  There are two ways to donate organs:<br /><br />

              ·  By pledging for organ donation when a person is alive<br /><br />

              ·  By consent of family after death.<br /><br />

              ·  During lifetime, a person can pledge for organ donation by filling up a donor form in the presence of two witnesses, one of who shall be a near relative.<br /><br />

              ·  The donor form is absolutely free of cost.<br /><br />

              ·  As mentioned earlier, you need to fill up the donor form and get it signed by two witnesses one of whom shall be a near relative and send the same to HODR<br /><br />

              ·  After receiving the filled in form, HODR provides the donor with an organ donor card bearing registration number on it.<br /><br />

              ·  It is suggested to keep the donor card in your pocket and share your decision with your near and dear ones.<br /><br />

              ·  If a person expires without registration, the family members can donate his/her organs. For this they need to sign a consent form, which is provided at that time.<br /><br />

              ·  Once, the relatives give a written consent, organs are harvested within a few hours.<br /><br />

              ·  The family of the donor does not face any difficulty or extra burden upon them.<br /><br />

              ·  The transplant coordination team carries out the entire process till the relatives receive the body of the deceased.<br /><br />

              ·  The deceased body is given back to the family in a dignified way.<br /><br />

              ·  There is no disfigurement. The body can be viewed as in any case of death and funeral arrangements need not be delayed. <br /><br />
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className='shadow-2xl my-2'
            >
              <Typography ><span className='font-normal text-lg'>Laws and Rules Governing Organ Transplantation in India</span></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              The primary legislation related to organ donation and transplantation in India, Transplantation of Human Organs Act, was passed in 1994 and is aimed at regulation of removal, storage and transplantation of human organs for therapeutic purposes and for prevention of commercial dealings in human organs.<br /><br />

              In India, matters related to health are governed by each state. The Act was initiated at the request of Maharashtra, Himachal Pradesh and Goa (who therefore adopted it by default) and was subsequently adopted by all states except Andhra Pradesh and Jammu & Kashmir. <br /><br />
              
              Despite a regulatory framework, cases of commercial dealings in human organs were reported in the media. An amendment to the act was proposed by the states of Goa, Himachal Pradesh and West Bengal in 2009 to address inadequacies in the efficacy, relevance and impact of the Act. <br /><br />
              
              The amendment to the Act was passed by the parliament in 2011, and the rules were notified in 2014. The same is adopted by the proposing states and union territories by default and may be adopted by other states by passing a resolution.<br /><br />
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className='shadow-2xl my-2'
            >
              <Typography ><span className='font-normal text-lg'>The Main Provisions Of The Act (including the amendments and rules of 2014) are as follows:</span></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              A. Brain death identified as a form of death. Process and criteria for brain death certification defined (Form 10 )<br /><br />

              B. Allows transplantation of human organs and tissues from living donors and cadavers (after cardiac or brain death)<br /><br />

              C. Regulatory and advisory bodies for monitoring transplantation activity and their constitution defined.<br /><br />

              (i) Appropriate Authority (AA): inspects and grants registration to hospitals for transplantation enforces required standards for hospitals, conducts regular inspections to examine the quality of transplantations. It may conduct investigations into complaints regarding breach of provisions of the Act, and has the powers of a civil court to summon any person, request documents and issue search warrants.<br /><br />

              (ii)  Advisory Committee: consisting of experts in the domain who shall advise the appropriate authority.<br /><br />

              (iii) Authorization Committee (AC): regulates living donor transplantation by reviewing each case to ensure that the living donor is not exploited for monetary considerations and to prevent commercial dealings in transplantation. Proceedings to be video recorded and decisions notified within 24 hours. Appeals against their decision may be made to the state or central government.<br /><br />

              (iv) Medical board (Brain Death Committee): Panel of doctors responsible for brain death certification. In case of non-availability of neurologist or neurosurgeon, any surgeon, physician, anaesthetist or intensivist, nominated by medical administrator in-charge of the hospital may certify brain death.<br /><br />

              D. Living donors are classified as either a near relative or a non-related donor.<br /><br />

              (i) A near-relative (spouse, children, grandchildren, siblings, parents and grandparents) needs permission of the doctor in-charge of the transplant center to donate his organ.<br /><br />

              (ii) A non-related donor needs permission of an Authorization Committee established by the state to donate his organs.<br /><br />

              E. Swap Transplantation: When a near relative living donor is medically incompatible with the recipient, the pair is permitted to do a swap transplant with another related unmatched donor/recipient pair.<br /><br />

              F. Authorization for organ donation after brain death<br /><br />

              (i) May be given before death by the person himself/herself or<br /><br />

              (ii) By the person in legal possession of the body. A doctor shall ask the patient or relative of every person admitted to the ICU whether any prior authorization had been made. If not, the patient or his near relative should be made aware of the option to authorize such donation.<br /><br />

              (iii) Authorization process for organ or tissue donation from unclaimed bodies outlined.<br /><br />

              G. Organ retrieval permitted from any hospital with ICU facility once registered with the appropriate authority. Any hospital having Intensive Care Unit (ICU) facilities along with manpower, infrastructure and equipment as required to diagnose and maintain the brain-stem dead person and to retrieve and transport organs and tissues including the facility for their temporary storage, can register as a retrieval center.<br /><br />

              H. Cost of donor management, retrieval, transportation and preservation to be borne by the recipient, institution, government, NGO or society, and not by the donor family.<br /><br />

              I. Procedure for organ donation in medico-legal cases defined to avoid jeopardizing determination of the cause of death and delay in retrieval of organs.<br /><br />

              J. Manpower and Facilities required for registration of a hospital as a transplant center outlined.<br /><br />

              K. Infrastructure, equipment requirements and guidelines and standard operating procedures for tissue banks outlined.<br /><br />

              L. Qualifications of transplant surgeons, cornea and tissue retrieval technicians defined.<br /><br />

              M. Appointment of transplant coordinators (with defined qualifications) made mandatory in all transplant centers.<br /><br />

              N. Non-governmental organisations, registered societies and trusts working in the field of organ or tissue removal, storage or transplantation will require registration.<br /><br />

              O. The central government to establish a National Human Organs and Tissues Removal and Storage Network i.e. NOTTO (National Organ & Tissue Transplant Organisation), ROTTO (Regional Organ & Tissue Transplant Organisation) and SOTTO (State Organ & Tissue Transplant Organisation). Website www.notto.nic.in. Manner of establishing National or Regional or State Human Organs and Tissues Removal and Storage Networks and their functions clearly stated.<br /><br />

              P. The central government shall maintain a registry of the donors and recipients of human organs and tissues.<br /><br />

              Q. Penalties for removal of organ without authority, making or receiving payment for supplying human organs or contravening any other provisions of the Act have been made very stringent in order to serve as a deterrent for such activities.<br /><br />
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className='shadow-2xl my-2'
            >
              <Typography ><span className='font-normal text-lg'>The various forms outlined in the rules are as follows:</span></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Form 1: Near-relative consent<br /><br />
              Form 2: Spouse consent<br /><br />
              Form 3: Other than near-relative donor consent<br /><br />
              Form 4: Psychiatrist evaluation of the donor<br /><br />
              Form 5: HLA DNA profiling report<br /><br />
              Form 7: Self consent for deceased donation<br /><br />
              Form 8: Consent for organ donation from family (also applicable for minors)<br /><br />
              Form 9: Consent for organ donation from unclaimed bodies<br /><br />
              Form 10: Brain death declaration form<br /><br />
              Form 11: Joint transplant application by donor / recipient<br /><br />
              Form 12: Registration of hospital for organ transplantation<br /><br />
              Form 13: Registration of hospital for organ retrieval<br /><br />
              Form 16: Grant of registration<br /><br />
              Form 17: Renewal of registration<br /><br />
              Form 18: Decision by hospital authorization committee<br /><br />
              Form 19: Decision by district authorization committee<br /><br />
              Form 20: Verification of Domicile for non near-relative<br /><br />
              Form 21: Letter from Embassy<br /><br />
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className='shadow-2xl my-2'
            >
              <Typography ><span className='font-normal text-lg'>How is Organ Donation Regulated in India?</span></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              In India, Transplantation of Human Organs Act, 1994 provides various regulations for the removal
              of human organs and its storage. <br /><br />

              It also regulates the transplantation of human organs for therapeutic purposes and for the prevention of commercial dealings in human organs.<br /><br />

              In February 2023, the Ministry of Health and Family Welfare notified National Organ Transplantation Guidelines, allowing those above 65 years of age to receive an organ for transplantation from deceased donors.<br /><br />

              The guidelines have removed the age limit for organ recipients, eliminated the domicile requirement abolished registration fees previously charged by certain states like Gujarat, Telangana, Maharashtra, and Kerala.<br /><br />
              </Typography>
            </AccordionDetails>
          </Accordion>

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
              className='shadow-2xl my-2'
            >
              <Typography ><span className='font-normal text-lg'>What are the Ethical Concerns Related to Organ Donation and Transplantation?</span></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              Living Persons:<br /> <br/>

                Violates the Traditional Rule of Medicine:<br /> <br/>

                Kidney donors are known to live healthy lives. However, studies in the European Union
                and China have shown that a third of them are vulnerable to urinary and chest
                infections, which violates the first traditional rule of medicine, primum non nocere
                (above all, do no harm).<br /> <br/>

                One person becomes a patient to benefit another person who is already a patient.
                Donation is Prone to Trafficking:<br /> <br/>

                Organ donation is susceptible to trafficking when there is illegal and unethical activity
                involved in the acquisition, transportation, or transplantation of organs.<br /> <br/>

                In its 1991 document "Guiding Principles on Human Organ Transplantation," the World
                Health Organisation (WHO) expresses concern over "the rise of commercial traffic in
                human organs, particularly from living donors who are unrelated to recipients."<br /> <br/>

                Emotional Coercion:<br /> <br/>
                
                The relationship between the donor and recipient influences the donor's motivation for
                organ donation. Living related donors are genetically related to the recipient and often feel
                obligated due to family ties and emotional bonds.<br /> <br/>

                Ethical concerns include the potential for undue influence, emotional pressure, and
                coercion.<br /> <br/>

              Deceased Person:<br /> <br/>

                Consent and Autonomy:<br /> <br/>

                It is important to determine whether the person had expressed their consent or refusal for
                organ donation while they were alive.
                <br /> <br/>

                If the person's wishes are unknown, it can be ethically challenging to make decisions on
                their behalf.<br /> <br/>


                Allocation and Fairness:<br /> <br/>

                Determining how organs are allocated fairly and equitably is an ongoing ethical
                concern.<br /> <br/>

                Ethical concerns can emerge when there are disparities in access to transplantation
                based on factors such as wealth, social status, or geographical location.<br /> <br/>

                Transparency and Public Trust:<br /> <br/>

                The ethical concerns related to disclosure of information, the handling of organ
                procurement and transplantation procedures, and the management of organ donation
                registries are important considerations.<br /> <br/>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>


    </div>
  )
}

export default Education