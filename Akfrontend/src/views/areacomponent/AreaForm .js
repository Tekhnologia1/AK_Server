// src/components/AreaForm.js
import React from 'react';
import InputBox from '../../commancomponet/InputBox';
import SelectBox from '../../commancomponet/SelectBox';
import CommanButton from '../../commancomponet/CommanButton';

const AreaForm = ({ formData, formErrors, transformedCities, onChange, onSubmit, buttonLabel }) => {
  return (
    <form onSubmit={onSubmit}>
      <InputBox
        label="Area Name"
        name="areaName"
        value={formData.areaName}
        onChange={onChange}
        placeholder="Enter area Name"
      />
      {formErrors.areaName && <p className="text-danger">{formErrors.areaName}</p>}

      <InputBox
        label="Area Details / Address"
        name="areaDetails"
        value={formData.areaDetails}
        onChange={onChange}
        placeholder="Enter Area Details / Address"
      />
      {formErrors.areaDetails && <p className="text-danger">{formErrors.areaDetails}</p>}

      <SelectBox
        label="City"
        options={transformedCities}
        value={formData.selectedCity}
        onChange={onChange}
        name="selectedCity"
        defaultValue=""
      />
      {formErrors.selectedCity && <p className="text-danger">{formErrors.selectedCity}</p>}

      <div className="d-flex justify-content-center pt-3">
        <CommanButton
          label={buttonLabel}
          variant="#7B3F0080"
          className="mb-3 ps-4 pe-4"
          style={{ borderRadius: "5px" }}
          onClick={onSubmit}
        />
      </div>
      
    </form>
  );
};

export default AreaForm;
