import React, { useState } from 'react';
import './InputForm.scss';

const InputForm = () => {
  const [currentField, setCurrentField] = useState('firstName');
  const [firstName, setFirstName] = useState('');
  const [major, setMajor] = useState('');
  const [minor, setMinor] = useState('');
  const [college, setCollege] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [preferences, setPreferences] = useState('');
  const [transcriptFile, setTranscriptFile] = useState(null);

  const handleInputChange = (e, fieldName) => {
    switch (fieldName) {
      case 'firstName':
        setFirstName(e.target.value);
        break;
      case 'major':
        setMajor(e.target.value);
        break;
      case 'minor':
        setMinor(e.target.value);
        break;
      case 'college':
        setCollege(e.target.value);
        break;
      case 'graduationYear':
        setGraduationYear(e.target.value);
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
        minor,
        college,
        graduationYear,
        preferences,
        transcriptFile
      });
      setFirstName('');
      setMajor('');
      setMinor('');
      setCollege('');
      setGraduationYear('');
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
      case 'major':
        return major;
      case 'minor':
        return minor;
      case 'college':
        return college;
      case 'graduationYear':
        return graduationYear;
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
        nextFieldName = 'major';
        break;
      case 'major':
        nextFieldName = 'minor';
        break;
      case 'minor':
        nextFieldName = 'college';
        break;
      case 'college':
        nextFieldName = 'graduationYear';
        break;
      case 'graduationYear':
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
      {currentField === 'major' && renderInputField('major', 'Major:', major, handleInputChange, false)}
      {currentField === 'minor' && renderInputField('minor', 'Minor:', minor, handleInputChange, false)}
      {currentField === 'college' && renderInputField('college', 'College:', college, handleInputChange, false)}
      {currentField === 'graduationYear' && renderInputField('graduationYear', 'Graduation Year:', graduationYear, handleInputChange, false)}
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
