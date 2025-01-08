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

    // Add certificate border
    doc.setLineWidth(1.5);
    doc.rect(10, 10, 190, 277, 'S');

    // Add certificate title
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(24);
    doc.text('Certificate of Completion', 105, 40, { align: 'center' });

    // Add certificate content
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(16);
    doc.text('This is to certify that', 105, 60, { align: 'center' });

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(20);
    doc.text(name, 105, 75, { align: 'center' });

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(16);
    doc.text('has successfully completed the course', 105, 90, { align: 'center' });

    doc.setFont('helvetica', 'bold');
    doc.text(course, 105, 105, { align: 'center' });

    doc.setFont('helvetica', 'normal');
    doc.text(`from ${startDate} to ${endDate}.`, 105, 120, { align: 'center' });

    // Add signature and date section
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(12);
    doc.text('Authorized Signature', 50, 200, { align: 'left' });
    doc.text('Date', 150, 200, { align: 'left' });

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