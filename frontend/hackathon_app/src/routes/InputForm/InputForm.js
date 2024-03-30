import React, { useState } from 'react';
import './InputForm.scss';

const InputForm = () => {
  const hardcodedMajors = [
    "African American & Black Diaspora Studies",
    "American Studies",
    "Ancient Greek",
    "Ancient Greek & Latin",
    "Anthropology & Religion",
    "Anthropology—Specialization in Anthropology, Health & Medicine",
    "Anthropology—Specialization in Biological Anthropology",
    "Anthropology—Specialization in Sociocultural Anthropology",
    "Archaeological & Environmental Science",
    "Archaeology",
    "Architectural Studies",
    "Astronomy",
    "Astronomy and Physics",
    "Biochemistry & Molecular Biology",
    "Biology",
    "Biology with Specialization in Behavioral Biology",
    "Biology with Specialization in Cell Biology, Molecular Biology & Genetics",
    "Biology with Specialization in Ecology & Conservation Biology",
    "Biology with Specialization in Neurobiology",
    "Chemistry",
    "Chemistry & Physics",
    "Chemistry with Specialization in Chemical Biology",
    "Chinese Language & Literature",
    "Cinema & Media Studies",
    "Classical Civilization",
    "Classics & Archaeology",
    "Classics & Philosophy",
    "Classics & Religion",
    "Comparative Literature",
    "Computer Science",
    "Computer Science & Economics",
    "Earth & Environmental Sciences",
    "Economics",
    "Economics & Mathematics",
    "English",
    "Environmental Analysis & Policy",
    "French & Linguistics",
    "French Studies",
    "German Language & Literature",
    "History",
    "History of Art & Architecture",
    "Holocaust, Genocide and Human Rights Studies",
    "Italian & Linguistics",
    "Italian Studies",
    "Japanese & Linguistics",
    "Japanese Language & Literature",
    "Korean Language & Literature",
    "Latin",
    "Linguistics",
    "Linguistics & African Languages",
    "Linguistics & Computer Science",
    "Linguistics & Philosophy",
    "Linguistics and Speech, Language & Hearing Sciences",
    "Marine Science",
    "Mathematics & Computer Science",
    "Mathematics & Mathematics Education",
    "Mathematics & Philosophy",
    "Mathematics & Physics",
    "Mathematics (includes Statistics)",
    "Middle Eastern and South Asian Languages & Literatures",
    "Neuroscience",
    "Philosophy",
    "Philosophy & Neuroscience",
    "Philosophy & Physics",
    "Philosophy & Political Science",
    "Philosophy & Psychology",
    "Philosophy & Religion",
    "Physics",
    "Physics & Computer Science",
    "Political Science",
    "Psychology",
    "Religion",
    "Russian Language and Literature",
    "Science Education with Specialization in Biology, Chemistry, or Physics",
    "Sociology",
    "Spanish",
    "Spanish & Linguistics",
    "Statistics & Computer Science",
    "Advertising",
    "Film & Television",
    "Journalism",
    "Media Science",
    "Public Relations",
    "Aerospace Engineering Concentration",
    "Biomedical Engineering",
    "Computer Engineering",
    "Electrical Engineering",
    "Energy Technologies Concentration",
    "Manufacturing Engineering Concentration",
    "Mechanical Engineering",
    "Nanotechnology Concentration",
    "Acting (Performance)",
    "Art",
    "Art Education",
    "Composition & Theory",
    "Costume Design and Production (Design, Production & Management)",
    "Graphic Design",
    "Lighting Design (Design, Production & Management)",
    "Music (Nonperformance)",
    "Music (Performance)",
    "Music Education",
    "Painting",
    "Printmaking",
    "Scene Design (Design, Production & Management)",
    "Sculpture",
    "Sound Design (Design, Production & Management)",
    "Stage Management (Design, Production & Management)",
    "Technical Production (Design, Production & Management)",
    "Theatre Arts",
    "Theatre Arts Design & Production (Design, Production & Management)",
    "Theatre Arts/Performance (Performance)",
    "General Studies",
    "Data Science",
    "Asian Studies",
    "European Studies",
    "International Relations",
    "Latin American Studies",
    "Middle East & North Africa Studies",
    "Business Administration & Management (Business Analytics)",
    "Business Administration & Management (Independent Concentration)",
    "Business Administration & Management (Information Systems Concentration)",
    "Business Administration & Management (Management & Organizations)",
    "Business Administration & Management (Operations & Supply Chain Management)",
    "Business Administration & Management (Accounting Concentration)",
    "Business Administration & Management (Finance Concentration)",
    "Business Administration & Management (Global Business Concentration)",
    "Business Administration & Management (Innovation & Entrepreneurship)",
    "Business Administration & Management (Law Concentration)",
    "Business Administration & Management (Marketing Concentration)",
    "Business Administration & Management (Real Estate)",
    "Business Administration & Management (Strategy)",
    "Behavior and Health",
    "Dietetics",
    "Health Science",
    "Human Physiology",
    "Nutrition",
    "Physical Therapy (Six-Year Program)",
    "Speech, Language & Hearing Sciences",
    "Hospitality Administration",
    "Hospitality Communications",
    "Education & Human Development"
  ];
  
  const [currentField, setCurrentField] = useState('firstName');
  const [firstName, setFirstName] = useState('');
  const [college, setCollege] = useState('');
  const [major, setMajor] = useState('');
  const [graduationSemester, setGraduationSemester] = useState('');
  const [preferences, setPreferences] = useState('');
  const [transcriptFile, setTranscriptFile] = useState(null);

  const handleInputChange = (e, fieldName) => {
    switch (fieldName) {
      case 'firstName':
        setFirstName(e.target.value);
        break;
      case 'college':
        setCollege(e.target.value);
        break;
      case 'major':
        setMajor(e.target.value);
        break;
      case 'graduationSemester':
        setGraduationSemester(e.target.value);
        break;
      case 'preferences':
        setPreferences(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setTranscriptFile(file);
  };

  const handleNextField = (e, nextField) => {
    e.preventDefault();
    if (nextField === 'submit') {
      console.log('Form submitted:', {
        firstName,
        major,
        college,
        graduationSemester,
        preferences,
        transcriptFile
      });
      setFirstName('');
      setCollege('');
      setMajor('');
      setGraduationSemester('');
      setPreferences('');
      setTranscriptFile(null);
    } else {
      const currentValue = getCurrentValue(currentField);
      if (currentValue.trim() === '') {
        return;
      }
      setCurrentField(nextField);
    }
  };
  
  const getCurrentValue = (fieldName) => {
    switch (fieldName) {
      case 'firstName':
        return firstName;
      case 'college':
        return college;
      case 'major':
        return major;
      case 'graduationSemester':
        return graduationSemester;
      case 'preferences':
        return preferences;
      default:
        return '';
    }
  };
  
  const renderInputField = (fieldName, label, value, onChange, autoFocus) => {
    let nextFieldName;
    switch (fieldName) {
      case 'firstName':
        nextFieldName = 'college';
        break;
      case 'college':
        nextFieldName = 'major';
        break;
      case 'major':
        nextFieldName = 'graduationSemester';
        break;
      case 'graduationSemester':
        nextFieldName = 'preferences';
        break;
      case 'preferences':
        nextFieldName = 'transcript';
        break;
      case 'transcript':
        nextFieldName = 'submit';
        break;
      default:
        nextFieldName = '';
        break;
    }

    if (fieldName === 'college') {
      return (
        <div className="input-field">
          <label>{label}</label>
          <select value={value} onChange={(e) => onChange(e, fieldName)} autoFocus={autoFocus}>
          <option value="">Select College</option>
          <option value="CAS">CAS</option>
          <option value="COM">COM</option>
          <option value="ENG">ENG</option>
          <option value="CFA">CFA</option>
          <option value="CGS">CGS</option>
          <option value="SAR">SAR</option>
          <option value="CDS">CDS</option>
          <option value="SHA">SHA</option>
          <option value="Questrom">Questrom</option>
          <option value="Pardee">Pardee</option>
          <option value="Wheelock">Wheelock</option>
          </select>
          {fieldName !== 'submit' && (
            <button onClick={(e) => handleNextField(e, nextFieldName)}>Next</button>
          )}
        </div>
      );
    }

    if (fieldName === 'major') {
      return (
        <div className="input-field">
          <label>{label}</label>
          <select value={value} onChange={(e) => onChange(e, fieldName)} autoFocus={autoFocus}>
            <option value="">Select Major</option>
            {hardcodedMajors.map((maj, index) => (
              <option key={index} value={maj}>{maj}</option>
            ))}
          </select>
          {fieldName !== 'submit' && (
            <button onClick={(e) => handleNextField(e, nextFieldName)}>Next</button>
          )}
        </div>
      );
    }

    if (fieldName === 'graduationSemester') {
      return (
        <div className="input-field">
          <label>{label}</label>
          <select value={value} onChange={(e) => onChange(e, fieldName)} autoFocus={autoFocus}>
            <option value="">Select Graduation Year</option>
            <option value="Fall 2024">Fall 2024</option>
            <option value="Spring 2025">Spring 2025</option>
            <option value="Fall 2025">Fall 2025</option>
            <option value="Spring 2026">Spring 2026</option>
            <option value="Fall 2026">Fall 2026</option>
            <option value="Spring 2027">Spring 2027</option>
            <option value="Fall 2027">Fall 2027</option>
            <option value="Spring 2028">Spring 2028</option>
          </select>
          {fieldName !== 'submit' && (
            <button onClick={(e) => handleNextField(e, nextFieldName)}>Next</button>
          )}
        </div>
      );
    }    
  
    return (
      <div className="input-field">
        <label>{label}</label>
        <input type="text" value={value} onChange={(e) => onChange(e, fieldName)} autoFocus={autoFocus} />
        {fieldName !== 'submit' && (
          <button onClick={(e) => handleNextField(e, nextFieldName)}>Next</button>
        )}
      </div>
    );
  };
  
  return (
    <div className="input-form">
      {currentField === 'firstName' && renderInputField('firstName', 'First Name:', firstName, handleInputChange, true)}
      {currentField === 'college' && renderInputField('college', 'College:', college, handleInputChange, false)}
      {currentField === 'major' && renderInputField('major', 'Major:', major, handleInputChange, true)}
      {currentField === 'graduationSemester' && renderInputField('graduationSemester', 'Graduation Semester:', graduationSemester, handleInputChange, false)}
      {currentField === 'preferences' && renderInputField('preferences', 'Preferences:', preferences, handleInputChange, false)}
      {currentField === 'transcript' &&
        <div className="input-field">
          <label>Transcript:</label>
          <input type="file" onChange={handleFileUpload} />
          <button onClick={(e) => handleNextField(e, 'submit')}>Submit</button>
        </div>
      }
    </div>
  );  
};

export default InputForm;
