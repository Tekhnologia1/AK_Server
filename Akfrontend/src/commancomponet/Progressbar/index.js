import React from "react";
import './steps.css';

const StepProgressBar = ({
    steps
}) => {

    const isStepCompleted = (step) => {
        return step.delivery_status == 1;
    }

    const getStepClassNames = (index) => {
        let result = "stepProgressBar__step";
        if (isStepCompleted(index)) {
            result += " stepProgressBar__step--completed";
        }
        return result;
    };

    return (
        <div className="mt-3">
            {steps && <ol className="stepProgressBar pb-3">
                {steps.map((step, index) => (
                    <li key={step.id} className={getStepClassNames(step)}>
                        {index > 0 && <div className="stepProgressBar__step__line"></div>}
                        <button
                            className="stepProgressBar__step__button"
                            type="button"
                        >
                            <span className={`stepProgressBar__step__button__indicator ${isStepCompleted(step) && 'bg-success'}`}>
                                {isStepCompleted(step) && (
                                    <svg
                                        className="stepProgressBar__step__button__indicator__icon-completed"
                                        width="10"
                                        height="7"
                                        viewBox="0 0 12 9"
                                        fill="currentColor"
                                    >
                                        <path d="M1.05025 3.70714C1.44077 3.31661 2.07394 3.31661 2.46446 3.70714L5.29289 6.53556C5.68341 6.92609 5.68341 7.55925 5.29289 7.94978C4.90236 8.3403 4.2692 8.3403 3.87867 7.94978L1.05025 5.12135C0.659724 4.73083 0.659724 4.09766 1.05025 3.70714Z" />
                                        <path d="M10.9498 0.878709C11.3403 1.26923 11.3403 1.9024 10.9498 2.29292L5.29289 7.94978C4.90236 8.3403 4.2692 8.3403 3.87867 7.94978C3.48815 7.55925 3.48816 6.92609 3.87869 6.53556L9.53554 0.878709C9.92606 0.488184 10.5592 0.488184 10.9498 0.878709Z" />
                                    </svg>
                                )}
                            </span>
                            <div className="d-flex align-items-center gap-2 stepProgressBar__step__button__label">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.99935 1.39578C8.96141 1.37166 8.91898 1.35547 8.87462 1.34817C8.83026 1.34087 8.78489 1.34263 8.74122 1.35332C8.69755 1.36402 8.6565 1.38343 8.62054 1.41041C8.58457 1.43738 8.55443 1.47135 8.53193 1.51027C8.50944 1.54919 8.49504 1.59226 8.48962 1.63689C8.4842 1.68152 8.48786 1.72678 8.50039 1.76996C8.51292 1.81313 8.53405 1.85333 8.56251 1.88813C8.59097 1.92293 8.62618 1.95161 8.66602 1.97244L10.666 3.12911V8.87578L8.66602 10.0324C8.58977 10.0764 8.53401 10.1488 8.51091 10.2337C8.4878 10.3186 8.49922 10.4092 8.54268 10.4858C8.56446 10.524 8.59358 10.5575 8.62836 10.5844C8.66314 10.6113 8.7029 10.631 8.74535 10.6425C8.7878 10.6539 8.83209 10.6569 8.87568 10.6512C8.91928 10.6454 8.9613 10.6312 8.99935 10.6091L11.3327 9.25911V2.74578L8.99935 1.39578ZM3.22602 9.96911L1.33268 8.87578V3.12911L3.22602 2.03578C3.26585 2.01494 3.30106 1.98626 3.32952 1.95146C3.35799 1.91666 3.37912 1.87647 3.39164 1.83329C3.40417 1.79011 3.40783 1.74485 3.40241 1.70022C3.39699 1.65559 3.3826 1.61252 3.3601 1.5736C3.3376 1.53468 3.30746 1.50071 3.27149 1.47374C3.23553 1.44677 3.19448 1.42735 3.15081 1.41665C3.10715 1.40596 3.06177 1.40421 3.01741 1.4115C2.97305 1.4188 2.93062 1.43499 2.89268 1.45911L0.666016 2.74578V9.25911L2.89268 10.5458C2.93073 10.5678 2.97276 10.5821 3.01635 10.5878C3.05994 10.5936 3.10424 10.5906 3.14668 10.5792C3.18913 10.5677 3.22889 10.5479 3.26367 10.521C3.29845 10.4942 3.32757 10.4606 3.34935 10.4224C3.39281 10.3459 3.40423 10.2553 3.38112 10.1704C3.35802 10.0854 3.30226 10.0131 3.22602 9.96911Z" fill="black" />
                                    <path d="M3.33398 4.0026V8.0026C3.33398 8.17942 3.40422 8.34898 3.52925 8.47401C3.65427 8.59903 3.82384 8.66927 4.00065 8.66927H8.00065C8.17746 8.66927 8.34703 8.59903 8.47206 8.47401C8.59708 8.34898 8.66732 8.17942 8.66732 8.0026V4.0026C8.66732 3.82579 8.59708 3.65622 8.47206 3.5312C8.34703 3.40618 8.17746 3.33594 8.00065 3.33594H4.00065C3.82384 3.33594 3.65427 3.40618 3.52925 3.5312C3.40422 3.65622 3.33398 3.82579 3.33398 4.0026ZM5.66732 4.0026V5.66927H4.00065V4.0026H5.66732ZM4.00065 6.33594H5.66732V8.0026H4.00065V6.33594ZM6.33398 8.0026V6.33594H8.00065V8.0026H6.33398ZM8.00065 5.66927H6.33398V4.0026H8.00065V5.66927Z" fill="black" />
                                </svg>
                                <span className="cafe_name">
                                    {step.cafe_name}
                                </span>
                            </div>
                            <div className="d-flex align-items-center gap-2 stepProgressBar__step__button__label">
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.99991 1.49949C5.60208 1.49949 5.22055 1.65753 4.93925 1.93883C4.65794 2.22014 4.49991 2.60167 4.49991 2.99949C4.49991 3.39732 4.65794 3.77885 4.93925 4.06015C5.22055 4.34146 5.60208 4.49949 5.99991 4.49949C6.39773 4.49949 6.77926 4.34146 7.06057 4.06015C7.34187 3.77885 7.49991 3.39732 7.49991 2.99949C7.49991 2.60167 7.34187 2.22014 7.06057 1.93883C6.77926 1.65753 6.39773 1.49949 5.99991 1.49949ZM3.49991 2.99949C3.5 2.52648 3.63429 2.06319 3.88717 1.66345C4.14006 1.26371 4.50116 0.943914 4.92854 0.741204C5.35591 0.538494 5.83203 0.461191 6.30159 0.518271C6.77115 0.575351 7.21488 0.764473 7.58124 1.06367C7.94761 1.36287 8.22157 1.75987 8.37132 2.20855C8.52107 2.65724 8.54045 3.1392 8.42722 3.59846C8.31399 4.05772 8.07278 4.47544 7.73163 4.80309C7.39047 5.13074 6.96336 5.35489 6.49991 5.44949V8.49949H5.49991V5.44949C4.93522 5.33423 4.42771 5.0274 4.06325 4.58094C3.6988 4.13449 3.49979 3.57582 3.49991 2.99949ZM1.55241 5.49949H3.99991V6.49949H2.44741L2.05841 9.99949H9.94141L9.55241 6.49949H7.99991V5.49949H10.4474L11.0584 10.9995H0.941406L1.55241 5.49949Z" fill="#64707D" />
                                </svg>
                                <span className="cafe_address">
                                    {step.address}
                                </span>
                            </div>
                            <div className="gap-2">
                                <span className="order_number">{step.order_number}</span>
                            </div>
                        </button>
                    </li>
                ))}
            </ol>}
        </div>
    );
};

export default StepProgressBar;