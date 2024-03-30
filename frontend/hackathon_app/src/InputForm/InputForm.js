import React, { useState } from 'react';
import './InputForm.scss'; 

const InputForm = () => {

    const [firstName, setFirstName] = useState('');
    const [major, setMajor] = useState('');
    const [minor, setMinor] = useState('');
    const [college, setCollege] = useState('');
    const [graduationYear, setGraduationYear] = useState('');
    const [coursePreferences, setCoursePreferences] = useState('');
    const [transcriptFile, setTranscriptFile] = useState(null);
  
    const handleFileUpload = (event) => {
      const file = event.target.files[0];
      setTranscriptFile(file);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Form submitted:', {
        firstName,
        major,
        minor,
        college,
        graduationYear,
        coursePreferences,
        transcriptFile
      });
      setFirstName('');
      setMajor('');
      setMinor('');
      setCollege('');
      setGraduationYear('');
      setCoursePreferences('');
      setTranscriptFile(null);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
          <label>Major:</label>
          <input type="text" value={major} onChange={(e) => setMajor(e.target.value)} />
        </div>
        <div>
          <label>Minor:</label>
          <input type="text" value={minor} onChange={(e) => setMinor(e.target.value)} />
        </div>
        <div>
          <label>College:</label>
          <input type="text" value={college} onChange={(e) => setCollege(e.target.value)} />
        </div>
        <div>
          <label>Graduation Year:</label>
          <input type="text" value={graduationYear} onChange={(e) => setGraduationYear(e.target.value)} />
        </div>
        <div>
          <label>Course Preferences:</label>
          <input type="text" value={coursePreferences} onChange={(e) => setCoursePreferences(e.target.value)} />
        </div>
        <div>
          <label>Transcript:</label>
          <input type="file" onChange={handleFileUpload} />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  };

export default InputForm;
