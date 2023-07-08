import React, {useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import CertificateTemplate from './CertificateTemplate';
// import CertificateForm from './CertificateFrom';

const CertificateGenerator = () => {
    const certificateRef = useRef();

    const generateCertificate = ({ name, date, achievement }) => {
        html2canvas(certificateRef.current).then((canvas) => {
            canvas.toBlob((blob) => {
                saveAs(blob, 'certificate.png');
            });
        });
    };

    const [name, setName] = useState('');
    const [date, setDate] = useState('');
    const [achievement, setAchievement] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        generateCertificate({ name, date, achievement });
    };

    return (
        <div>

            <h1>Certificate Generator</h1>
            <div ref={certificateRef}>
                <CertificateTemplate name ={name} data = {date} achievement={achievement} />
            </div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Date:
                    <input
                        type="text"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Achievement:
                    <input
                        type="text"
                        value={achievement}
                        onChange={(e) => setAchievement(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Generate Certificate</button>
            </form>
            {/* <CertificateForm generateCertificate={generateCertificate} /> */}
        </div>
    );
};

export default CertificateGenerator;
