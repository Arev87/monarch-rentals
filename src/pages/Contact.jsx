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

  return (
    <main className="title_header">
      <section className="contact_card center">
        <h3 className="center">CONTACT US</h3>
        
        <form className="contact_form" onSubmit={handleSubmit}>
          <div className="form_list">
            <div className="form_layout">
              <input 
                name="FirstName" 
                type="text" 
                placeholder="FIRST NAME*" 
                value={formData.FirstName}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form_layout">
              <input 
                name="LastName" 
                type="text" 
                placeholder="LAST NAME*" 
                value={formData.LastName}
                onChange={handleChange}
                required 
              />
            </div>
          </div>
          
          <div className="form_list">
            <div className="form_layout">
              <input 
                name="Email" 
                type="email" 
                placeholder="EMAIL*" 
                value={formData.Email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="form_layout">
              <input 
                name="Phone" 
                type="text" 
                placeholder="PHONE NUMBER" 
                value={formData.Phone}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form_list">
            <div className="select_form">
              <CustomSelect 
                name="bedroom"
                placeholder="BEDROOMS"
                options={bedroomOptions}
                value={formData.bedroom}
                onChange={handleChange}
              />
            </div>

            <div className="select_form">
              <CustomSelect 
                name="priceTo"
                placeholder="MAX. BUDGET"
                options={budgetOptions}
                value={formData.priceTo}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="form_list">
            <div className="select_form">
              <CustomSelect 
                name="retx_referrer_id_ptr"
                placeholder="HOW DID YOU HEAR ABOUT US?*"
                options={referrerOptions}
                value={formData.retx_referrer_id_ptr}
                onChange={handleChange}
              />
            </div>
            <div className="select_form">
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
                className="br_firm" 
                type="text" 
                placeholder="BROKERAGE FIRM" 
                value={formData.cust_broker_company}
                onChange={handleChange}
                style={{ width: '100%', marginBottom: '1.146vw' }}
            />
          )}

          <div className="submit_btn">
            <button type="submit" className="submit">SUBMIT</button>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Contact;
