import React, { useState } from 'react';
import { Table } from 'react-bootstrap';

const Info = ({ result }) => {

    const [total, setTotal] = useState({});

    const { name, roll, eng1131_letter, eng1131_grade, phy1132_letter, phy1132_grade, bus1123_letter, bus1123_grade, mat1134_letter, mat1134_grade, eee1135_letter, eee1135_grade, eee11p6_letter, eee11p6_grade, cse1127_letter, cse1127_grade, cse11p6_letter, cse11p6_grade } = result;

    let CGPA = 0.00;
     
    if (eng1131_grade == 'IC' || phy1132_grade == 'IC' || bus1123_grade == 'IC' || mat1134_grade == 'IC' || eee1135_grade == 'IC' || eee11p6_grade == 'IC' || cse1127_grade == 'IC' || cse11p6_grade == 'IC') {

        CGPA = (0.00).toFixed(2);
        
    }
    else {

        const GPA = (eng1131_grade * 3.0) + (phy1132_grade * 3.0) + (bus1123_grade * 2.0) + (mat1134_grade * 3.0) + (eee1135_grade * 3.0) + (eee11p6_grade * 0.75) + (cse1127_grade * 2.0) + (cse11p6_grade * 0.75);

        CGPA = (GPA / 17.5).toFixed(2);
    
    }


    return (
        <div>
            <Table striped bordered hover variant="dark" responsive>
                <tbody>
                    <tr>
                        <td colSpan={2}>Full Name</td>
                        <td colSpan={2}>{name}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>ID</td>
                        <td colSpan={2}>{roll}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>RC Code and Name</td>
                        <td colSpan={2}>1, Dhaka</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>SC Code and Name</td>
                        <td colSpan={2}>801, Regional Center, Dhaka</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Year and Semester</td>
                        <td colSpan={2}>1st Year 1st Semester</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Exam Term</td>
                        <td colSpan={2}>201</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>Session</td>
                        <td colSpan={2}>2019-2020</td>
                    </tr>

                </tbody>
            </Table>

            <Table striped bordered hover variant="dark" responsive>
                <thead>
                    <tr>
                        <th>Course Title</th>
                        <th>Course Code</th>
                        <th>Letter Grade</th>
                        <th>Grade Point</th>
                        <th>GPA</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Communicative English</td>
                        <td>ENG1131</td>
                        <td>{eng1131_letter}</td>
                        <td>{eng1131_grade}</td>
                        <td rowSpan={8}> {CGPA} </td>
                    </tr>
                    <tr>
                        <td>Wave, Optics and Thermodynamic</td>
                        <td>PHY1132</td>
                        <td>{phy1132_letter}</td>
                        <td>{phy1132_grade}</td>
                    </tr>
                    <tr>
                        <td>Introduction to Business</td>
                        <td>BUS1123</td>
                        <td>{bus1123_letter}</td>
                        <td>{bus1123_grade}</td>
                    </tr>
                    <tr>
                        <td>Differential and Integral Calculus</td>
                        <td>MAT1134</td>
                        <td>{mat1134_letter}</td>
                        <td>{mat1134_grade}</td>
                    </tr>
                    <tr>
                        <td>Electricity, Magnetism and Electrical Circuit</td>
                        <td>EEE1135</td>
                        <td>{eee1135_letter}</td>
                        <td>{eee1135_grade}</td>
                    </tr>
                    <tr>
                        <td>Electricity, Magnetism and Electrical Circuit Lab</td>
                        <td>EEE11P6</td>
                        <td>{eee11p6_letter}</td>
                        <td>{eee11p6_grade}</td>
                    </tr>
                    <tr>
                        <td>Computer Fundamentals</td>
                        <td>CSE1127</td>
                        <td>{cse1127_letter}</td>
                        <td>{cse1127_grade}</td>
                    </tr>
                    <tr>
                        <td>Computer Fundamentals Lab</td>
                        <td>CSE11P8</td>
                        <td>{cse11p6_letter}</td>
                        <td>{cse11p6_grade}</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
};

export default Info;