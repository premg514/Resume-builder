import React from 'react';
import { jsPDF } from 'jspdf';

const ResumePreview = ({ resumeData }) => {
  const isFormComplete = () => {
    return (
      resumeData.personalInfo.fullName &&
      resumeData.personalInfo.jobTitle &&
      resumeData.personalInfo.phone &&
      resumeData.personalInfo.email &&
      resumeData.professionalSummary &&
      resumeData.workExperience.company &&
      resumeData.workExperience.jobTitle &&
      resumeData.workExperience.startDate &&
      resumeData.workExperience.endDate &&
      resumeData.workExperience.responsibilities &&
      resumeData.education.degree &&
      resumeData.education.institution &&
      resumeData.education.graduationDate &&
      resumeData.education.location &&
      resumeData.skills.technical &&
      resumeData.skills.soft
    );
  };

  const downloadPDF = () => {
    if (!isFormComplete()) {
      alert("Please fill out all required fields before downloading.");
      return; // Exit if the form is incomplete
    }

    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.text("Resume", 10, 10);

    const leftMargin = 10; // Fixed left margin for all text
    const titleOffset = 20; // Vertical offset for section titles
    const contentOffset = 30; // Vertical offset for content

    // Personal Information
    doc.setFontSize(16);
    doc.text("Personal Information", leftMargin, titleOffset);
    doc.setFontSize(12);
    const personalInfo = [
      `Name: ${resumeData.personalInfo.fullName}`,
      `Job Title: ${resumeData.personalInfo.jobTitle}`,
      `Phone: ${resumeData.personalInfo.phone}`,
      `Email: ${resumeData.personalInfo.email}`,
      `LinkedIn: ${resumeData.personalInfo.linkedin || 'N/A'}`,
      `Website: ${resumeData.personalInfo.website || 'N/A'}`,
    ];
    personalInfo.forEach((info, index) => {
      doc.text(info, leftMargin, contentOffset + (index * 5));
    });

    // Professional Summary
    doc.setFontSize(16);
    doc.text("Professional Summary", leftMargin, contentOffset + (personalInfo.length * 5) + 15);
    doc.setFontSize(12);
    doc.text(resumeData.professionalSummary || 'N/A', leftMargin, contentOffset + (personalInfo.length * 5) + 20 + 10);

    // Work Experience
    doc.setFontSize(16);
    doc.text("Work Experience", leftMargin, contentOffset + (personalInfo.length * 5) + 40);
    doc.setFontSize(12);
    const workExperience = [
      `Company: ${resumeData.workExperience.company}`,
      `Job Title: ${resumeData.workExperience.jobTitle}`,
      `Start Date: ${resumeData.workExperience.startDate}`,
      `End Date: ${resumeData.workExperience.endDate}`,
      `Responsibilities: ${resumeData.workExperience.responsibilities}`
    ];
    workExperience.forEach((exp, index) => {
      doc.text(exp, leftMargin, contentOffset + (personalInfo.length * 5) + 45 + (index * 5));
    });

    // Education
    doc.setFontSize(16);
    doc.text("Education", leftMargin, contentOffset + (personalInfo.length * 5) + (workExperience.length * 5) + 70);
    doc.setFontSize(12);
    const education = [
      `Degree: ${resumeData.education.degree}`,
      `Institution: ${resumeData.education.institution}`,
      `Graduation Date: ${resumeData.education.graduationDate}`,
      `Location: ${resumeData.education.location}`
    ];
    education.forEach((edu, index) => {
      doc.text(edu, leftMargin, contentOffset + (personalInfo.length * 5) + (workExperience.length * 5) + 75 + (index * 5));
    });

    // Skills
    doc.setFontSize(16);
    doc.text("Skills", leftMargin, contentOffset + (personalInfo.length * 5) + (workExperience.length * 5) + (education.length * 5) + 100);
    doc.setFontSize(12);
    doc.text(`Technical Skills: ${resumeData.skills.technical}`, leftMargin, contentOffset + (personalInfo.length * 5) + (workExperience.length * 5) + (education.length * 5) + 105);
    doc.text(`Soft Skills: ${resumeData.skills.soft}`, leftMargin, contentOffset + (personalInfo.length * 5) + (workExperience.length * 5) + (education.length * 5) + 110);

    // Certifications
    doc.setFontSize(16);
    doc.text("Certifications", leftMargin, contentOffset + (personalInfo.length * 5) + (workExperience.length * 5) + (education.length * 5) + 130);
    doc.setFontSize(12);
    doc.text(resumeData.certifications || 'N/A', leftMargin, contentOffset + (personalInfo.length * 5) + (workExperience.length * 5) + (education.length * 5) + 135);

    // Projects
    doc.setFontSize(16);
    doc.text("Projects", leftMargin, contentOffset + (personalInfo.length * 5) + (workExperience.length * 5) + (education.length * 5) + 155);
    doc.setFontSize(12);
    doc.text(resumeData.projects || 'N/A', leftMargin, contentOffset + (personalInfo.length * 5) + (workExperience.length * 5) + (education.length * 5) + 160);

    // Awards & Achievements
    doc.setFontSize(16);
    doc.text("Awards and Achievements", leftMargin, contentOffset + (personalInfo.length * 5) + (workExperience.length * 5) + (education.length * 5) + 180);
    doc.setFontSize(12);
    doc.text(resumeData.awards || 'N/A', leftMargin, contentOffset + (personalInfo.length * 5) + (workExperience.length * 5) + (education.length * 5) + 185);

    // Save the PDF
    doc.save('resume.pdf');
};



  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full mx-auto">
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Resume Preview</h1>

      {/* Personal Information */}
      <section className="mb-4">
        <h2 className="text-xl font-bold text-gray-700 text-emerald-400">Personal Information</h2>
        <div className="grid grid-cols-2 gap-2">
          <p><strong>Name:</strong> {resumeData.personalInfo.fullName}</p>
          <p><strong>Job Title:</strong> {resumeData.personalInfo.jobTitle}</p>
          <p><strong>Phone:</strong> {resumeData.personalInfo.phone}</p>
          <p><strong>Email:</strong> {resumeData.personalInfo.email}</p>
          <p><strong>LinkedIn:</strong> {resumeData.personalInfo.linkedin}</p>
          <p><strong>Website:</strong> {resumeData.personalInfo.website}</p>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="mb-4">
        <h2 className="text-xl font-bold text-gray-700 text-emerald-400">Professional Summary</h2>
        <p>{resumeData.professionalSummary}</p>
      </section>

      {/* Work Experience */}
      <section className="mb-4">
        <h2 className="text-xl font-bold text-gray-700 text-emerald-400">Work Experience</h2>
        <div className="grid grid-cols-2 gap-2">
          <p><strong>Company:</strong> {resumeData.workExperience.company}</p>
          <p><strong>Job Title:</strong> {resumeData.workExperience.jobTitle}</p>
          <p><strong>Start Date:</strong> {resumeData.workExperience.startDate}</p>
          <p><strong>End Date:</strong> {resumeData.workExperience.endDate}</p>
          <p><strong>Responsibilities:</strong> {resumeData.workExperience.responsibilities}</p>
        </div>
      </section>

      {/* Education */}
      <section className="mb-4">
        <h2 className="text-xl font-bold text-gray-700 text-emerald-400">Education</h2>
        <div className="grid grid-cols-2 gap-2">
          <p><strong>Degree:</strong> {resumeData.education.degree}</p>
          <p><strong>Institution:</strong> {resumeData.education.institution}</p>
          <p><strong>Graduation Date:</strong> {resumeData.education.graduationDate}</p>
          <p><strong>Location:</strong> {resumeData.education.location}</p>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-4">
        <h2 className="text-xl font-bold text-gray-700 text-emerald-400">Skills</h2>
        <div className="grid grid-cols-2 gap-2">
          <p><strong>Technical Skills:</strong> {resumeData.skills.technical}</p>
          <p><strong>Soft Skills:</strong> {resumeData.skills.soft}</p>
        </div>
      </section>

      {/* Certifications */}
      <section className="mb-4">
        <h2 className="text-xl font-bold text-gray-700 text-emerald-400">Certifications</h2>
        <p>{resumeData.certifications}</p>
      </section>

      {/* Projects */}
      <section className="mb-4">
        <h2 className="text-xl font-bold text-gray-700 text-emerald-400">Projects</h2>
        <p>{resumeData.projects}</p>
      </section>

      {/* Awards & Achievements */}
      <section className="mb-4">
        <h2 className="text-xl font-bold text-gray-700 text-emerald-400">Awards and Achievements</h2>
        <p>{resumeData.awards}</p>
      </section>

      <button
        onClick={downloadPDF}
        className="mt-4 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Download as PDF
      </button>
    </div>
  );
};

export default ResumePreview;
