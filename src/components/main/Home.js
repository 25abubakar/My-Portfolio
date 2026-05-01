import React from "react";
import Collapse from "react-bootstrap/Collapse";
import ProgressBar from "../progress-bar/ProgressBar";

function Home(props) {
    return (
        <Collapse in={props.components.home}>
            <div id="home" className="section-wrap">
                <div className="section-header home-header text-white">
                    <h2><i className="fas fa-home mr-2" />About Me</h2>
                    <p className="lead mb-0">
                        A highly motivated .NET Full Stack Developer with hands-on experience in
                        designing, developing, and optimizing modern web applications.
                    </p>
                </div>
                <div className="section-body">

                    {/* About summary */}
                    <p style={{color: 'rgba(255,255,255,0.75)', lineHeight: '1.8', fontSize: '0.95rem', marginBottom: '1.5rem'}}>
                        Skilled in both frontend and backend development, with practical expertise in
                        <strong style={{color: '#6C63FF'}}> C#, .NET Core, ASP.NET MVC, Web API, SQL Server, </strong>
                        and <strong style={{color: '#6C63FF'}}>JavaScript / HTML5 / CSS3 / Bootstrap</strong>.
                        I have a solid understanding of scalable application architecture, RESTful API development,
                        and cloud concepts (AWS &amp; Azure), along with secure and efficient coding practices.
                        Passionate about problem-solving and building user-focused, high-performance applications.
                    </p>

                    <div className="subsection-label">Tech Stack</div>
                    <table className="skills-table">
                        <tbody>
                            <tr>
                                <td>Backend</td>
                                <td>C#, .NET Core, .NET Framework, ASP.NET MVC, Web API, Entity Framework</td>
                            </tr>
                            <tr>
                                <td>Frontend</td>
                                <td>JavaScript, TypeScript, HTML5, CSS3, Bootstrap, React.js</td>
                            </tr>
                            <tr>
                                <td>Databases</td>
                                <td>SQL Server, MySQL, PostgreSQL</td>
                            </tr>
                            <tr>
                                <td>Cloud</td>
                                <td>AWS (EC2, S3, RDS, Lambda, IAM), Azure (basics)</td>
                            </tr>
                            <tr>
                                <td>Tools</td>
                                <td>Git, GitHub, Visual Studio, VS Code, Postman, Docker (basics)</td>
                            </tr>
                        </tbody>
                    </table>

                    <div className="subsection-label">Skill Proficiency</div>
                    <ProgressBar name="C# / .NET Core / .NET Framework" percentage="85"/>
                    <ProgressBar name="ASP.NET MVC / Web API" percentage="83"/>
                    <ProgressBar name="SQL Server / Entity Framework" percentage="82"/>
                    <ProgressBar name="HTML5 / CSS3 / Bootstrap" percentage="90"/>
                    <ProgressBar name="JavaScript / TypeScript" percentage="78"/>
                    <ProgressBar name="React.js" percentage="72"/>
                    <ProgressBar name="AWS Cloud Services" percentage="68"/>
                    <ProgressBar name="Docker / Azure" percentage="55"/>
                </div>
            </div>
        </Collapse>
    );
}

export default Home;
