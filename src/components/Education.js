import React from 'react'

const Education = () => {
    return (
        <div>
            <div id="education" className="education">
            <h1 className="education-h1"> Education</h1>
            <details  open>
            <summary>Bachelors Of Engineering</summary>
            <div className="faq__content">
            <p> The National Institute Of Engineering(2014-2018) </p>
            <p> Vishweshwarayya Technological University</p>
            </div>
            </details>
            <details open>
            <summary>Secondary High School</summary>
            <div className="faq__content">
            <p> VishwaChetana Vidyaniketana Residential Pre University College (2012-2014) </p>
            </div>
            </details>
            <details open>
            <summary>High School</summary>
            <div className="faq__content">
            <p> M.S.V.Public School CBSE(2011-2012) </p>
            </div>
            </details>
            </div>
        </div>
    )
}

export default Education
