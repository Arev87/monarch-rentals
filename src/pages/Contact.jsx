import { useState } from 'react'
import CustomSelect from '../components/CustomSelect'

const initialState = {
  FirstName: '',
  LastName: '',
  Email: '',
  Phone: '',
  bedroom: '',
  priceTo: '',
  retx_referrer_id_ptr: '',
  cust_is_broker: '',
  cust_broker_company: ''
};

function Contact() {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    alert('Thank you! Your inquiry has been received.');
    // Ֆորմայի մաքրում
    setFormData(initialState);
  };

  const bedroomOptions = [
    { value: '1', label: '1 Bedroom' },
    { value: '2', label: '2 Bedrooms' }
  ];

  const budgetOptions = [
    { value: '3000', label: '$2500 - $3000' },
    { value: '3500', label: '$3000 - $3500' },
    { value: '4000', label: '$3500 - $4000' },
    { value: '4500', label: '$4000 - $4500' }
  ];

  const referrerOptions = [
    { value: '153', label: 'Building signage' },
    { value: '150', label: 'E-blast' },
    { value: '176', label: 'MNS web site' },
    { value: '130', label: 'Google' },
    { value: '131', label: 'Streeteasy' },
    { value: '187', label: 'Zillow' },
    { value: '194', label: 'Facebook' },
    { value: '195', label: 'Instagram' },
    { value: '152', label: 'Broker' },
    { value: '151', label: 'Word of mouth' },
    { value: '99', label: 'Other' }
  ];

  const brokerOptions = [
    { value: 'Yes', label: 'Yes' },
    { value: 'No', label: 'No' }
  ];

  const inputClass = "bg-transparent uppercase w-full border-0 border-b border-accent text-primary-dark font-book rounded-0 h-[2.135vw] text-[1.6rem] placeholder:text-primary-dark placeholder:text-[1.6rem] md:h-[11vw] md:mb-[3vw]";

  return (
    <main className="relative pt-[6.25vw] md:pt-[42vw]">
      <section className="w-[40%] mx-auto flex flex-col justify-center text-center h-[calc(100vh-6.25vw)] md:w-[87%] md:h-auto md:p-[8.2vw_0_17.6vw] md:text-left">
        <h3 className="text-accent text-[4.8rem] leading-[5.76rem] tracking-[0.0576px] pb-[4.167vw] text-center md:text-left md:pb-[6.1vw] md:text-[3.2rem] md:leading-[4.2rem] md:tracking-[0.8px]">CONTACT US</h3>
        
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between md:flex-col">
            <div className="w-[45%] mb-[1.146vw] md:w-full md:mb-[3vw]">
              <input 
                name="FirstName" 
                type="text" 
                placeholder="FIRST NAME*" 
                className={inputClass}
                value={formData.FirstName}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="w-[45%] mb-[1.146vw] md:w-full md:mb-[3vw]">
              <input 
                name="LastName" 
                type="text" 
                placeholder="LAST NAME*" 
                className={inputClass}
                value={formData.LastName}
                onChange={handleChange}
                required 
              />
            </div>
          </div>
          
          <div className="flex justify-between md:flex-col">
            <div className="w-[45%] mb-[1.146vw] md:w-full md:mb-[3vw]">
              <input 
                name="Email" 
                type="email" 
                placeholder="EMAIL*" 
                className={inputClass}
                value={formData.Email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="w-[45%] mb-[1.146vw] md:w-full md:mb-[3vw]">
              <input 
                name="Phone" 
                type="text" 
                placeholder="PHONE NUMBER" 
                className={inputClass}
                value={formData.Phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex justify-between md:flex-col">
            <div className="w-[45%] mb-[1.146vw] md:w-full md:mb-[3vw]">
              <CustomSelect 
                name="bedroom"
                placeholder="BEDROOMS"
                options={bedroomOptions}
                value={formData.bedroom}
                onChange={handleChange}
              />
            </div>

            <div className="w-[45%] mb-[1.146vw] md:w-full md:mb-[3vw]">
              <CustomSelect 
                name="priceTo"
                placeholder="MAX. BUDGET"
                options={budgetOptions}
                value={formData.priceTo}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex justify-between md:flex-col">
            <div className="w-[45%] mb-[1.146vw] md:w-full md:mb-[3vw]">
              <CustomSelect 
                name="retx_referrer_id_ptr"
                placeholder="HOW DID YOU HEAR ABOUT US?*"
                options={referrerOptions}
                value={formData.retx_referrer_id_ptr}
                onChange={handleChange}
              />
            </div>
            <div className="w-[45%] mb-[1.146vw] md:w-full md:mb-[3vw]">
              <CustomSelect 
                name="cust_is_broker"
                placeholder="ARE YOU A BROKER?"
                options={brokerOptions}
                value={formData.cust_is_broker}
                onChange={handleChange}
              />
            </div>
          </div>

          {formData.cust_is_broker === 'Yes' && (
            <input 
                name="cust_broker_company" 
                className={`${inputClass} !mb-[1.146vw]`}
                type="text" 
                placeholder="BROKERAGE FIRM" 
                value={formData.cust_broker_company}
                onChange={handleChange}
            />
          )}

          <div className="mt-[1.854vw] mx-auto text-center md:mt-[14vw]">
            <button type="submit" className="font-medium uppercase text-primary-dark text-[2.1rem] tracking-[1.05px] leading-[2.52rem] h-[3.021vw] px-[2.24vw] bg-transparent border border-accent rounded-0 transition-all duration-300 hover:bg-accent md:h-[14.8vw] md:px-[10.7vw]">SUBMIT</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Contact;