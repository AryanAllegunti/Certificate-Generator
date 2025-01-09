import React, { useState } from 'react';
import { jsPDF } from 'jspdf';
import './App.css';

const App = () => {
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const generatePDF = () => {
    if (new Date(startDate) > new Date(endDate)) {
      alert('Start date must be before the end date.');
      return;
    }
  
    const doc = new jsPDF();
  
    // Add certificate border with rounded corners and shadow
    doc.setLineWidth(1.5);
    doc.setDrawColor(0, 0, 0);
    doc.setFillColor(255, 255, 255);
    doc.roundedRect(10, 10, 190, 277, 10, 10, 'S');
  
    // Add title with custom font, size, and color
    doc.setFont('times', 'bold');
    doc.setFontSize(28);
    doc.setTextColor(0, 102, 204); // Blue color for title
    doc.text('Certificate of Completion', 105, 40, { align: 'center' });
  
    // Add introduction text with elegant font styling
    doc.setFont('times', 'italic');
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0); // Black color for content
    doc.text('This is to certify that', 105, 60, { align: 'center' });
  
    // Name in a larger, bold font
    doc.setFont('times', 'bold');
    doc.setFontSize(24);
    doc.setTextColor(0, 0, 0); // Black color for name
    doc.text(name, 105, 85, { align: 'center' });
  
    // Course information in normal font
    doc.setFont('times', 'normal');
    doc.setFontSize(16);
    doc.text('has successfully completed the course', 105, 100, { align: 'center' });
  
    // Course title with bold styling
    doc.setFont('times', 'bold');
    doc.setFontSize(20);
    doc.setTextColor(0, 51, 102); // Dark blue for course name
    doc.text(course, 105, 115, { align: 'center' });
  
    // Date range in normal font
    doc.setFont('times', 'normal');
    doc.setFontSize(16);
    doc.text(`from ${startDate} to ${endDate}.`, 105, 130, { align: 'center' });
  
    // Add a horizontal line between the certificate content and signature
    doc.setLineWidth(0.5);
    doc.setDrawColor(0, 0, 0);
    doc.line(20, 170, 190, 170);
  
    // Signature and date section with text styles
    doc.setFont('times', 'normal');
    doc.setFontSize(12);
    doc.text('Authorized Signature', 50, 200);
    doc.text('Date', 150, 200);
  
    // Add a decorative element (like a seal or logo) in the bottom-right corner
    doc.setFontSize(30);
    doc.setTextColor(0, 0, 0, 0.1); // Light black for a watermark effect
    doc.text('Approved', 170, 250, { angle: 45, align: 'center' });
  
    // Save the PDF
    doc.save('certificate.pdf');
  };
  

  return (
    <div className="App">
      <h1>Certificate Generator</h1>
      <div className="form">
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter student name"
          />
        </label>
        <br />
        <label>
          Course:
          <input
            type="text"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            placeholder="Enter course name"
          />
        </label>
        <br />
        <label>
          Start Date:
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />
        </label>
        <br />
        <label>
          End Date:
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </label>
        <br />
        <button onClick={generatePDF}>Generate Certificate</button>
      </div>
    </div>
  );
};

export default App;