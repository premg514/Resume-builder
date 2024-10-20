import React, { Component } from 'react';
import ResumePreview from '../ResumePreview';
import './index.css';

class ResumeForm extends Component {
  state = {
    personalInfo: {
      fullName: '',
      jobTitle: '',
      phone: '',
      email: '',
      linkedin: '',
      website: '',
    },
    professionalSummary: '',
    workExperience: {
      company: '',
      jobTitle: '',
      startDate: '',
      endDate: '',
      responsibilities: '',
    },
    education: {
      degree: '',
      institution: '',
      graduationDate: '',
      location: '',
    },
    skills: {
      technical: '',
      soft: '',
    },
    certifications: '',
    projects: '',
    awards: '',
    volunteerWork: '',
    references: '',
  };

  handleInputChange = (section, e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      [section]: {
        ...prevState[section],
        [name]: value,
      },
    }));
  };

  handleSingleChange = (section, e) => {
    const { value } = e.target;
    this.setState({ [section]: value });
  };

  render() {
    return (
      <div className="flex flex-col md:flex-row items-start justify-center p-4">
        <form className="bg-white shadow-lg rounded-lg p-6 space-y-6 w-full md:w-1/2 h-[80vh] overflow-y-auto">
          {/* Personal Information */}
          <div className="section">
            <h2 className="text-xl font-bold text-gray-700">Personal Information</h2>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              onChange={(e) => this.handleInputChange('personalInfo', e)}
              className="input w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              onChange={(e) => this.handleInputChange('personalInfo', e)}
              className="input w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              onChange={(e) => this.handleInputChange('personalInfo', e)}
              className="input w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={(e) => this.handleInputChange('personalInfo', e)}
              className="input w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="linkedin"
              placeholder="LinkedIn"
              onChange={(e) => this.handleInputChange('personalInfo', e)}
              className="input w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="website"
              placeholder="Portfolio/Website"
              onChange={(e) => this.handleInputChange('personalInfo', e)}
              className="input w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Professional Summary */}
          <div className="section">
            <h2 className="text-xl font-bold text-gray-700">Professional Summary</h2>
            <textarea
              name="professionalSummary"
              placeholder="Brief professional summary"
              onChange={(e) => this.handleSingleChange('professionalSummary', e)}
              className="textarea w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Work Experience */}
          <div className="section">
            <h2 className="text-xl font-bold text-gray-700">Work Experience</h2>
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              onChange={(e) => this.handleInputChange('workExperience', e)}
              className="input w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="jobTitle"
              placeholder="Job Title"
              onChange={(e) => this.handleInputChange('workExperience', e)}
              className="input w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="startDate"
              placeholder="Start Date"
              onChange={(e) => this.handleInputChange('workExperience', e)}
              className="input w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="endDate"
              placeholder="End Date"
              onChange={(e) => this.handleInputChange('workExperience', e)}
              className="input w-full p-3 border border-gray-300 rounded-lg"
            />
            <textarea
              name="responsibilities"
              placeholder="Responsibilities"
              onChange={(e) => this.handleInputChange('workExperience', e)}
              className="textarea w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Education */}
          <div className="section">
            <h2 className="text-xl font-bold text-gray-700">Education</h2>
            <input
              type="text"
              name="degree"
              placeholder="Degree"
              onChange={(e) => this.handleInputChange('education', e)}
              className="input w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="institution"
              placeholder="Institution"
              onChange={(e) => this.handleInputChange('education', e)}
              className="input w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="graduationDate"
              placeholder="Graduation Date"
              onChange={(e) => this.handleInputChange('education', e)}
              className="input w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="location"
              placeholder="Location"
              onChange={(e) => this.handleInputChange('education', e)}
              className="input w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Skills */}
          <div className="section">
            <h2 className="text-xl font-bold text-gray-700">Skills</h2>
            <input
              type="text"
              name="technical"
              placeholder="Technical Skills"
              onChange={(e) => this.handleInputChange('skills', e)}
              className="input w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              name="soft"
              placeholder="Soft Skills"
              onChange={(e) => this.handleInputChange('skills', e)}
              className="input w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Certifications */}
          <div className="section">
            <h2 className="text-xl font-bold text-gray-700">Certifications</h2>
            <textarea
              name="certifications"
              placeholder="Certifications"
              onChange={(e) => this.handleSingleChange('certifications', e)}
              className="textarea w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Projects */}
          <div className="section">
            <h2 className="text-xl font-bold text-gray-700">Projects</h2>
            <textarea
              name="projects"
              placeholder="Projects"
              onChange={(e) => this.handleSingleChange('projects', e)}
              className="textarea w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Awards & Achievements */}
          <div className="section">
            <h2 className="text-xl font-bold text-gray-700">Awards and Achievements</h2>
            <textarea
              name="awards"
              placeholder="Awards and Achievements"
              onChange={(e) => this.handleSingleChange('awards', e)}
              className="textarea w-full p-3 border border-gray-300 rounded-lg"
            />
          </div>
        </form>

        {/* Resume Preview */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0">
          <ResumePreview resumeData={this.state} />
        </div>
      </div>
    );
  }
}

export default ResumeForm;
