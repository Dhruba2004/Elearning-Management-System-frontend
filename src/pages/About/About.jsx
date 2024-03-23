import { Grid, Paper, Typography } from "@mui/material";
import React from "react";

const About = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" height="100vh">
      <Paper>
        <Grid container alignItems="center" padding={2} maxWidth={800}>
          <Typography variant="h3">Elearning Management System</Typography>
          <Typography variant="p" padding={2}>
            Software Requirements Specification (SRS) Document
            <br />
            <br />
            1. Introduction
            <br />
            <br />
            1.1 Purpose
            <br />
            The purpose of this document is to specify the requirements of the
            eLearning Management System (eLMS), including its functionalities,
            constraints, and user interactions.
            <br />
            <br />
            1.2 Scope
            <br />
            The eLearning Management System will be a web-based platform
            designed to facilitate online learning by providing tools for course
            management, content delivery, assessment, and communication between
            instructors and learners.
            <br />
            <br />
            1.3 Definitions, Acronyms, and Abbreviations
            <br />
            - SRS: Software Requirements Specification
            <br />
            - GUI: Graphical User Interface
            <br />
            - API: Application Programming Interface
            <br />
            - LMS: Learning Management System
            <br />
            - eLMS: eLearning Management System
            <br />
            <br />
            1.4 References
            <br />
            - IEEE Std 830-1998: IEEE Recommended Practice for Software
            Requirements Specifications
            <br />
            <br />
            1.5 Overview
            <br />
            The eLearning Management System will allow instructors to create and
            manage courses, upload course materials, track student progress, and
            assess student performance. Students will be able to enroll in
            courses, access course materials, participate in activities, and
            communicate with instructors and peers. 2. Overall Description
            <br />
            <br />
            2.1 Product Perspective
            <br />
            The eLearning Management System will serve as a standalone platform,
            accessible via web browsers. It will interact with external systems
            for authentication, content storage, and communication.
            <br />
            <br />
            2.2 Product Functions
            <br />
            The main functions of the eLMS include:
            <br />
            1. User authentication and authorization
            <br />
            2. Course creation and management
            <br />
            3. Content delivery (e.g., lectures, quizzes, assignments)
            <br />
            4. Student enrollment and progress tracking
            <br />
            5. Communication tools (e.g., messaging, discussion forums)
            <br />
            6. Reporting and analytics
            <br />
            <br />
            2.3 User Classes and Characteristics
            <br />
            1. Administrators: responsible for system configuration and user
            management
            <br />
            2. Instructors: responsible for creating and managing courses, as
            well as assessing student performance
            <br />
            3. Students: learners enrolled in courses, accessing content and
            participating in activities
            <br />
            <br />
            2.4 Operating Environment
            <br />
            The eLearning Management System will be compatible with modern web
            browsers (Chrome, Firefox, Safari, Edge) and accessible across
            devices (desktop, tablet, mobile).
            <br />
            <br />
            2.5. Design and Implementation Constraints
            <br />
            The system will be developed using HTML, CSS, JavaScript for the
            frontend. Compliance with accessibility standards (WCAG) is
            required. Integration with existing authentication systems (e.g.,
            LDAP, OAuth) may be necessary.
            <br />
            <br />
            2.6. User Documentation
            <br />
            User documentation, including user manuals and help guides, will be
            provided to assist users in navigating and utilizing the eLMS
            effectively.
            <br />
            <br />
            2.7 Assumptions and Dependencies
            <br />
            Users will have access to stable internet connections. The system
            will be hosted on reliable servers with adequate bandwidth.
            Integration with third-party services (e.g., payment gateways,
            content providers) may require API access. 4. External Interface
            Requirements
            <br />
            <br />
            3. Specific Requirements
            <br />
            3.1 External Interfaces
            <br />
            <br />
            3.1.1 User Interfaces
            <br />
            The system shall provide a user-friendly web interface accessible
            via standard web browsers. The interface shall be responsive and
            compatible with desktop and mobile devices. Different user roles
            shall have access to relevant features and functionalities based on
            their permissions.
            <br />
            <br />
            3.1.2 Hardware Interfaces
            <br />
            The system shall not have any specific hardware requirements beyond
            standard web hosting infrastructure.
            <br />
            <br />
            3.1.3 Software Interfaces
            <br />
            The system shall integrate with external Learning Management Systems
            (LMS) for authentication and user data synchronization. APIs shall
            be provided for integration with third-party tools and services such
            as content delivery networks and video conferencing platforms.
            <br />
            <br />
            3.1.4 Communications Interfaces
            <br />
            The system will communicate with users via HTTP/HTTPS protocols over
            the internet.
            <br />
            <br />
            3.2 Functional Requirements
            <br />
            3.2.1 User Management
            <br />
            The system shall allow users to register and create accounts with
            unique usernames and passwords. Administrators shall have the
            ability to manage user accounts, including account activation,
            deactivation, and role assignments. Passwords shall be securely
            hashed and stored in the database. 5. Non-functional Requirements
            <br />
            <br />
            3.2.2 Course Management
            <br />
            Administrators and instructors shall be able to create new courses
            by providing course details such as title, description, and
            enrollment settings. Courses shall be organized into categories or
            departments for easy navigation. Course instructors shall have
            access to course management tools to add, edit, or delete course
            content. 5.1 Performance Requirements
            <br />
            <br />
            3.2.3 Content Management
            <br />
            The system shall support the upload and storage of various types of
            learning materials, including documents, images, videos, and
            presentations. Content shall be organized within courses and made
            accessible to enrolled students based on course settings.
            <br />
            <br />
            3.2.4 Assessment Tools
            <br />
            Instructors shall be able to create quizzes, assignments, and exams
            with customizable settings such as time limits, grading criteria,
            and question types. Students shall be able to access and complete
            assessments online within specified timeframes. The system shall
            automatically grade objective assessments and provide immediate
            feedback to students. - It should be capable of handling concurrent
            user sessions efficiently.
            <br />
            <br />
            3.2.5 Communication Tools
            <br />
            The system shall provide communication tools such as announcements,
            messaging, and discussion forums for instructors and students to
            interact. Notifications shall be sent to users for important
            updates, deadlines, and course announcements.
            <br />
            <br />
            3.2.6 Reporting and Analytics
            <br />
            Administrators and instructors shall have access to reports and
            analytics dashboards to monitor course performance, student
            engagement, and assessment results. Reports shall be exportable in
            common formats such as CSV or PDF for further analysis.
            <br />
            <br />
            3.3 Non-Functional Requirements
            <br />
            <br />
            3.3.1 Performance
            <br />
            The system shall support concurrent access by multiple users without
            degradation in performance. Response times for common operations
            such as page loads and content delivery shall be within acceptable
            limits.
            <br />
            <br />
            3.3.2 Security
            <br />
            User authentication and data transmission shall be encrypted using
            industry-standard protocols such as HTTPS. Access to sensitive user
            data and administrative features shall be restricted based on user
            roles and permissions. The system shall implement measures to
            prevent unauthorized access, data breaches, and malicious
            activities. 6. Other Requirements
            <br />
            <br />
            3.3.3 Usability
            <br />
            The user interface shall be intuitive and easy to navigate, with
            clear instructions and visual cues. Accessibility features shall be
            implemented to ensure compliance with relevant accessibility
            standards.
            <br />
            <br />
          </Typography>
          <Grid
            container
            padding={2}
            justifyContent="center"
            alignItems="center"
            gap="10px"
          >
            <Typography variant="h4">Class Diagram</Typography>
            <img width="100%" src="/ClassDiagram.jpg" alt="Class Diagram" />
            <Typography variant="h4">Activity Diagram</Typography>
            <img width="100%" src="/ActivityDiagram.jpg" alt="Class Diagram" />
            
            <Typography variant="h4">Data Flow Diagram</Typography>
            <img
              width="100%"
              src="/DataFlowDiagram.jpg"
              alt="Data Flow Diagram"
            />
            <Typography variant="h4">Use Case Diagram</Typography>
            <img
              width="100%"
              src="/UseCaseDiagram.png"
              alt="Use Case Diagram"
            />
            <Typography variant="h4">Sequence Diagram</Typography>
            <img
              width="100%"
              src="/SequenceDiagram.jpg"
              alt="Sequence Diagram"
            />
          </Grid>
        </Grid>
        <Grid
          container
          padding={2}
          flexDirection="column"
          justifyContent="center"
        >
          <Typography variant="h3" textAlign="center" paddingBottom={2}>
            Team Members
          </Typography>
          <Typography variant="h4" padding={2}>
            Harshit Ranjan Singh - Sec B - Roll 23
            <br />
            Indrajeet Nayek - Sec B - Roll 25
            <br />
            Adrish Ghosh - Sec B - Roll 03
            <br />
            Dhruba Dutta Banik - Sec A - Roll 17
            <br />
          </Typography>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default About;
