import React from "react";

const CBSEDisclosure = () => {
  return (
    <section className="bg-white py-10 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-600">📜 CBSE Disclosure</h2>
        <p className="text-gray-600 mt-3">
          As a CBSE-affiliated school, we adhere to the highest standards of education set by the Central Board of Secondary Education (CBSE).
        </p>

        <div className="mt-6 text-left">
          <h3 className="text-2xl font-semibold text-blue-500">📘 Academic Curriculum</h3>
          <p className="text-gray-700 mt-2">
            Our school follows the **NCERT-prescribed syllabus** and ensures a balanced approach between theoretical knowledge and practical application.
          </p>
        </div>

        <div className="mt-6 text-left">
          <h3 className="text-2xl font-semibold text-blue-500">📝 Examination & Assessment</h3>
          <p className="text-gray-700 mt-2">
            We conduct **Continuous and Comprehensive Evaluation (CCE)** as per CBSE guidelines, focusing on both **scholastic and co-scholastic development**.
          </p>
        </div>

        <div className="mt-6 text-left">
          <h3 className="text-2xl font-semibold text-blue-500">🎓 Admission & Eligibility</h3>
          <p className="text-gray-700 mt-2">
            Admissions are conducted as per CBSE norms, ensuring equal opportunity for all students. Age and eligibility criteria are followed strictly as per CBSE policies.
          </p>
        </div>

        <div className="mt-6 text-left">
          <h3 className="text-2xl font-semibold text-blue-500">📜 Policies & Guidelines</h3>
          <p className="text-gray-700 mt-2">
            We ensure strict compliance with CBSE regulations regarding **student safety, anti-bullying measures, discipline policies, and academic integrity**.
          </p>
        </div>

        <div className="mt-6 text-left">
          <h3 className="text-2xl font-semibold text-blue-500">📢 Contact for Queries</h3>
          <p className="text-gray-700 mt-2">
            For more details about CBSE policies, curriculum, and academic guidelines, please refer to the <a href="https://www.cbse.gov.in" target="_blank" rel="noopener noreferrer" className="text-blue-500 font-semibold">CBSE official website</a> or contact our administration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CBSEDisclosure;
