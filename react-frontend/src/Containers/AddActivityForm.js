import React from 'react';
import PropTypes from 'prop-types';
import '../Style/formAddActivity.css';
import '../Style/style.css';

const AddActivityForm = (props) => (
    <form className={props.showForm ? "shown" : "hidden"} onSubmit={props.handleSubmit}>
        <label><br/>
            Descriere:<br/>
            <input type="text" className="nameInput" name="name" defaultValue="" onChange={props.handleChange}/>
            <br/>
        </label>
        <label><br/>
            Data inceput:<br/>
            <input type="date" placeholder="dd/mm/yyyy" className="startDateInput" name="start_date" defaultValue="" onChange={props.handleChange}/>
            <br/>
        </label>
        <label><br/>
            Data sfarsit:<br/>
            <input type="date" placeholder="dd/mm/yyyy" className="endDateInput" name="end_date" defaultValue="" onChange={props.handleChange}/>
            <br/>
        </label>
        <label><br/>
            <input type="submit" className="btnSubmit" value="Adauga"/>
        </label>
    </form>
);

AddActivityForm.propTypes = {
    showForm: PropTypes.any,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
};

export default AddActivityForm;
