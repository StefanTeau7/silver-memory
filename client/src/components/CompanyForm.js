import 'font-awesome/css/font-awesome.min.css';
import React, { useState } from 'react';
import '../App.css';
import { submitCompanyData, submitFinancialData } from '../services/api';

function CompanyForm() {
  const [formData, setFormData] = useState({});
  const [currentDropdown, setCurrentDropdown] = useState(''); // 'company', 'financial' or ''

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleCompanySubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await submitCompanyData(formData);
      console.log('Server Response:', response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  const handleFinancialSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await submitFinancialData(formData);
      console.log('Server Response:', response.data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  return (
    <div className="form-container">
      <div class="center-container">
        <button className="button dropdownButton"
          onClick={() => setCurrentDropdown(currentDropdown === 'company' ? '' : 'company')}>
          Add Company Data<i className="fa fa-angle-down"></i></button>
        <button className="button dropdownButton"
          onClick={() => setCurrentDropdown(currentDropdown === 'financial' ? '' : 'financial')}>
          Add Financial Data<i className="fa fa-angle-down"></i></button>
      </div>
      {
        currentDropdown === 'company' && (
          <form onSubmit={handleCompanySubmit}>
            <section className="section">
              <h2>Company Data</h2>
              <label className="form-label" htmlFor="name">Name:</label>
              <input className="form-input" type="text" name="name" value={formData.name} onChange={handleChange} id="name" placeholder="Name" />

              <label className="form-label" htmlFor="industry">Industry(s):</label>
              <input className="form-input" type="text" name="industry" value={formData.industry} onChange={handleChange} id="industry" placeholder="Industry(s)" />

              <label className="form-label" htmlFor="businessModel">Business Model:</label>
              <input className="form-input" type="text" name="businessModel" value={formData.businessModel} onChange={handleChange} id="businessModel" placeholder="Business model(s)" />

              <label className="form-label" htmlFor="hqLocation">HQ Location:</label>
              <input className="form-input" type="text" name="hqLocation" value={formData.hqLocation} onChange={handleChange} id="hqLocation" placeholder="HQ Location" />

              <label className="form-label" htmlFor="founderQuality">Founder Quality:</label>
              <input className="form-input" type="text" name="founderQuality" value={formData.founderQuality} onChange={handleChange} id="founderQuality" placeholder="Founder Quality" />

              <label className="form-label" htmlFor="featureSet">Feature Set:</label>
              <input className="form-input" type="text" name="featureSet" value={formData.featureSet} onChange={handleChange} id="featureSet" placeholder="Feature Set" />
              <button type="submit">Submit Company Data</button>
            </section>
          </form>
        )
      }

      {
        currentDropdown === 'financial' && (
          <form onSubmit={handleFinancialSubmit}>

            <section className="section">
              <h2>Financial Data</h2>

              <label className="form-label" htmlFor="revenue">Revenue (annualized):</label>
              <input className="form-input" type="text" name="revenue" value={formData.revenue} onChange={handleChange} id="revenue" placeholder="Revenue (annualized)" />

              <label className="form-label" htmlFor="cashBurn">Cash Burn (annualized):</label>
              <input className="form-input" type="text" name="cashBurn" value={formData.cashBurn} onChange={handleChange} id="cashBurn" placeholder="Cash Burn (annualized)" />

              <label className="form-label" htmlFor="grossProfitPercentage">Gross Profit (%):</label>
              <input className="form-input" type="text" name="grossProfitPercentage" value={formData.grossProfitPercentage} onChange={handleChange} id="grossProfitPercentage" placeholder="Gross Profit (%)" />

              <label className="form-label" htmlFor="grossProfitDollar">Gross Profit ($; annualized):</label>
              <input className="form-input" type="text" name="grossProfitDollar" value={formData.grossProfitDollar} onChange={handleChange} id="grossProfitDollar" placeholder="Gross Profit ($; annualized)" />

              <label className="form-label" htmlFor="ebitda">EBITDA ($; annualized):</label>
              <input className="form-input" type="text" name="ebitda" value={formData.ebitda} onChange={handleChange} id="ebitda" placeholder="EBITDA ($; annualized)" />

              <label className="form-label" htmlFor="cashOnHand">Cash on Hand:</label>
              <input className="form-input" type="text" name="cashOnHand" value={formData.cashOnHand} onChange={handleChange} id="cashOnHand" placeholder="Cash on Hand" />

              <label className="form-label" htmlFor="cac">CAC:</label>
              <input className="form-input" type="text" name="cac" value={formData.cac} onChange={handleChange} id="cac" placeholder="CAC" />

              <label className="form-label" htmlFor="ltv">LTV:</label>
              <input className="form-input" type="text" name="ltv" value={formData.ltv} onChange={handleChange} id="ltv" placeholder="LTV" />

              <label className="form-label" htmlFor="acvArpu">ACV/ARPU:</label>
              <input className="form-input" type="text" name="acvArpu" value={formData.acvArpu} onChange={handleChange} id="acvArpu" placeholder="ACV/ARPU" />

              <label className="form-label" htmlFor="customerCount">Customer Count:</label>
              <input className="form-input" type="text" name="customerCount" value={formData.customerCount} onChange={handleChange} id="customerCount" placeholder="Customer Count" />

              <label className="form-label" htmlFor="nextEstFundraise">Next Est. Fundraise (date):</label>
              <input className="form-input" type="date" name="nextEstFundraise" value={formData.nextEstFundraise} onChange={handleChange} id="nextEstFundraise" />
              <button type="submit">Submit Financial Data</button>
            </section>
          </form>
        )
      }

    </div >
  );
}

export default CompanyForm;
