import React, { useState } from 'react';
import css from '../style/CreateForm.module.css';

const CreateForm = () => {

    const country = ['SELECT', 'India', 'China', 'Japan', 'USA'];

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        dob: '',
        email: '',
        gender: '',
        profession: '',
        phone: '',
        selectedCountry: 'SELECT',
    });

    const [formError, setFormError] = useState({});

    const handleInputChange=(e)=>{
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }
     
    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};
        
        if (!formData.firstName) {
            errors.firstName = 'First Name is required';
        }
        if (!formData.lastName) {
            errors.lastName = 'Last Name is required';
        }
        if (!formData.dob) {
            errors.dob = 'Date of Birth is required';
        }
        if (!formData.email) {
            errors.email = 'Email is required';
        }
        if (!formData.profession) {
            errors.profession = 'Profession is required';
        }
        if (!formData.phone) {
            errors.phone = 'Phone is required';
        }
        if (formData.phone.length !== 10) {
            errors.phone = 'Phone number must be 10 digits';
        }
        if (formData.selectedCountry === 'SELECT') {
            errors.selectedCountry = 'Please select a country';
        }
        
        if (Object.keys(errors).length > 0) {
            setFormError(errors);
        } else {
            alert(`Form submitted successfully:
            First Name: ${formData.firstName}
            Last Name: ${formData.lastName}
            Date of Birth: ${formData.dob}
            Email: ${formData.email}
            Gender: ${formData.gender}
            Profession: ${formData.profession}
            Phone: ${formData.phone}
            Country: ${formData.selectedCountry}`);
        }
    };

    const handleReset = () => {
        setFormData({
            firstName: '',
            lastName: '',
            dob: '',
            email: '',
            gender: '',
            profession: '',
            phone: '',
            selectedCountry: 'SELECT',
        });
        setFormError({});
    };
    
  return (
    <>
        <div className="container bg-light mt-2">
            <h1 className="text-center mt-2">Validation's_Form</h1>
            
            <form action="#" method="post" class="mt-4" onSubmit={handleSubmit}>

            <div className="form-row mt-3">
                <div className="col">
                    <label className={css.required}>First Name : </label>
                    <input 
                        type="text" 
                        className={`form-control ${formError.firstName ? 'is-invalid' : ''}`} 
                        name="firstName" 
                        placeholder="Enter first_Name" 
                        value={formData.firstName} 
                        onChange={handleInputChange} />
                        {formError.firstName && (
                                <div className="invalid-feedback">{formError.firstName}</div>
                            )}
                </div>
                <div className="col">
                    <label className={css.required}>Last Name : </label>
                    <input 
                        type="text" 
                        className={`form-control ${formError.lastName ? 'is-invalid' : ''}`}  
                        name="lastName" 
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter last_Name"/>
                        {formError.lastName && (
                            <div className='invalid-feedback'>{formError.lastName}</div>
                        )}
                </div>
            </div>
            <div className="form-row mt-3">
                <div className="col">
                    <label className={css.required}>DoB : </label>
                    <input 
                        type="date" 
                        className={`form-control ${formError.dob ? 'is-invalid' : ''}`} 
                        name="dob"
                        value={formData.dob}
                        onChange={handleInputChange}
                        />
                        {formError.dob && (
                            <div className='invalid-feedback'>{formError.dob}</div>
                        )}
                </div>
                <div className="col">
                    <label className={css.required}>Email : </label>
                    <input 
                        type="email"
                        className={`form-control ${formError.email ? 'is-invalid' : ''}`}  
                        name="email" 
                        value={formData.email}    
                        placeholder="Enter Email"
                        onChange={handleInputChange} 
                        />
                        {formError.email && (
                            <div className='invalid-feedback'>{formError.email}</div>
                        )}
                </div>
            </div>
            <div className="form-row mt-3">
                <label className={css.required}>Gender :</label>
                <div>
                    <input
                        type="radio"
                        className={`ml-3 mr-2 ${formError.gender ? 'is-invalid' : ''}`}
                        name="gender"
                        value="Male"
                        checked={formData.gender === 'Male'}
                        onChange={handleInputChange}
                    />
                    Male
                    <input
                        type="radio"
                        className={`ml-4 mr-2 ${formError.gender ? 'is-invalid' : ''}`}
                        name="gender"
                        value="Female"
                        checked={formData.gender === 'Female'}
                        onChange={handleInputChange}
                    />
                    Female
                    <input
                        type="radio"
                        className={`ml-4 mr-2 ${formError.gender ? 'is-invalid' : ''}`}
                        name="gender"
                        value="Other"
                        checked={formData.gender === 'Other'}
                        onChange={handleInputChange}
                    />
                    Other
                </div>
                {formError.gender && (
                    <div className="invalid-feedback">{formError.gender}</div>
                )}
            </div>
            <div className="form-row mt-3">
                <div className="col">
                    <label className={css.required}>Profession : </label>
                    <input 
                        type="text" 
                        className={`form-control ${formError.profession ? 'is-invalid' : ''}`}   
                        name="profession" 
                        value={formData.profession}
                        placeholder="Enter Profession" 
                        onChange={handleInputChange}
                        />
                        {formError.profession && (
                            <div className='invalid-feedback'>{formError.profession}</div>
                        )}
                </div>
                <div className="col">
                    <label className={css.required}>Phone : </label>
                    <input 
                    type="text" 
                    className={`form-control ${formError.phone ? 'is-invalid' : ''}`}   
                    name="phone" 
                    value={formData.phone}
                    placeholder="Enter Phone" 
                    onChange={handleInputChange}
                    />
                    {formError.phone && (
                            <div className='invalid-feedback'>{formError.phone}</div>
                        )}
                </div>
            </div>

            <div className="form-row mt-3">
                <label className={css.required}>Country :</label>
                <select
                    className={`form-control ${formError.selectedCountry ? 'is-invalid' : ''}`}
                    name="selectedCountry"
                    value={formData.selectedCountry}
                    onChange={handleInputChange}
                >
                    {country.map((con) => (
                        <option className={css.con} key={con} value={con}>
                            {con}
                        </option>
                    ))}
                </select>
                {formError.selectedCountry && (
                    <div className="invalid-feedback">{formError.selectedCountry}</div>
                )}
            </div>

            <div className="d-flex justify-content-between mt-4">
                <button type="reset" className="btn btn-dark mr-3" onClick={handleReset}>Reset</button>
                <button type="submit" className="btn btn-primary">Register</button>
            </div>
            </form>
        </div>
    </>
  )
}

export default CreateForm
