import React, { useCallback } from 'react';
import "survey-core/defaultV2.min.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";

const EmployeeForm = () => {

  const formStructure = {
    elements: [
      {
        type: "panel", 
        name: "surveyPanel",
        elements: [
          {
            type: "panel", 
            name: "namePanel",
            elements: [
              {
                name: "FirstName",
                title: "First Name:",
                type: "text",
                isRequired: true,
              },
              {
                name: "LastName",
                title: "Last Name:",
                type: "text",
                isRequired: true,
              },
            ],
          },
          {
            type: "date",
            title: "Date of Birth",
            name: "dateOfBirth",
            isRequired: true,
          },
          {
            type: "dropdown",
            title: "Country",
            name: "country",
            isRequired: true,
            choices: ["India", "United States", "United Kingdom"],
          },
          {
            type: "radiogroup",
            title: "Gender",
            name: "gender",
            isRequired: true,
            choices: ["Male", "Female", "Other"],
            colCount: 3,
          },
          {
            type: "text",
            title: "Profession",
            name: "profession",
            isRequired: true,
          },
          {
            type: "email",
            title: "Email",
            name: "email",
            isRequired: true,
          },
          {
            type: "text",
            title: "Mobile Number",
            name: "mobileNumber",
            isRequired: true,
          },
        ],
      },
    ],
  };

  const survey = new Model(formStructure);
  survey.focusFirstQuestionAutomatic = false;

  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    alert(results);
  }, []);

  survey.onComplete.add(alertResults);

  return (
    <div>
      <Survey model={survey} />
    </div>
  );
}

export default EmployeeForm;
