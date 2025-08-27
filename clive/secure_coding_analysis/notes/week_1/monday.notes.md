# CYB2200 - Secure Coding And Analysis

**Date:** 8/25/2025

## Lecture 1: Jia Song
- Jia Song has PhD in Computer Science
  - Email: [Jsong@uidaho.edu](mailto:Jsong@uidaho.edu) (Preferred)
  - Office: JEB 340
  - In email use "[CYB2200] YOUR SUBJECT HERE" for subject
  - MWF 9:30 - 10:20, labs on Friday

### Why?
- So we can write robust code
- This class is required
- Find vulnerabilities before criminals

### What?
- **SPP: Secure Programming Practices**
  - Principles of Secure Programming
  - Robust Programming
  - Defensive Programming
  - Programming Flaws
  - Static Analysis
  - Different Programming Languages
- **SSA: Software Security Analysis**
  - Testing Methodologies
  - Static and Dynamic Analysis Techniques
  - Sandboxing
  - Common Analysis Tools and Methods
- **QAT: QA/Functional Testing**
  - Testing Methodologies
  - Test Coverage Analysis
  - Automatic and Manual Generation of Test Inputs
  - Test Execution
- **Bonus: STRIDE**
  - S: Spoofing identity
  - T: Tampering with data
  - R: Repudiation
  - I: Information disclosure
  - D: Denial of service
  - E: Elevation of privilege

### Deliverables
- Produce Software Security Analysis tools and techniques
- Apply knowledge to perform Software Security Analysis using common tools
- etc.

## Lecture 2 : Basic Security Concepts

### Computer System, computer security, CIA triad
- Computer Security:
  - the protection of the items you value
- Computer systems
  - hardware
  - software
  - data
- CIA triad
  - **Confidentiality**: ability of a system to ensure that an asset is viewed only be authorized parties
  - **Integrity**: ability of a system to ensure that an asset can only be modified by authorized parties
  - **Availability**: ability of a system to ensure that an asset can be used by any authorized parties
  - Computer security seeks to prevent unauthorized viewing (**confidentiality**) or modification (**integrity**) of data while preserving access (**availability**)

### Vulnerability, threat, risk, attack, countermeasure
- **Vulnerability**
  - a weakness in a information system, security system, procedures, internal controls, or impl that could be exploited or triggered by a threat source [NIST]
- **Threat**
  - a computing system is a set of circumstances that has the potential to cause loss or harm
- **Risk/Harm**
  - Harm: negative consequence of a actualized threat
  - Risk: Possibility of harm
- **Attack**
  - a human that exploits a vulnerability is an attack on a system
- **Exploit**
  - is a piece of software, data, or sequence of commands that takes advantage of a vulnerability to cause unintended/unanticipated behavior to occur 
- Countermeasure
  - things that prevent threats
#### Attack
- An Attack is an attempt to gain unauthorized access to anything
- **Passive attack**
  - attempt to collect, learn or use the info in the system, does not affect the system
- **Active attack**
  - attempt to alter system resources or change their operations
- **Insider attack**
  - attacks initiated by an insider who is authorized to access system resources
- **Outside attack**
  - attacks initiated by an outsider, usually an unauthorized user of the target systems
#### Controls/Countermeasures
Prevent threats from exercising vulnerabilities (before or after the fact)
- **Prevent** it, by blocking the attack or closing the vulnerability 
- **Deter** it, by making the attack harder but not impossible
- **Deflect** it, by making another target more attractive
- **Mitigate** it, by making its impact less severe
- **Detect** it, by either as it happens or some time after the fact
- **Recover** from an attacks effects
### Identification and auth and access control
- Someone is authorized to take some action on something
#### Someone:
- Who is the person?
- **Identification**
  - The act of asserting who a person is
- **Identity**
  - The set of physical and behavioral characteristics by which an individual is uniquely recognizable [NIST]
  - These can be public or well known or predictable
    - email
    - student id
    - employee id
- **Authentication**
  - the act of proving that asserted identity
  - Auth should be private and well protected
#### Authentication Mechanisms
- Something the user **has**:
  - a physical object (id card) in the persons possession
- Something the user **knows**:
  - Passwords, ssn, pin
- Something the user **is**:
  - Fingerprints, retina, face, voice, etc. 
Something that uses more that one of these is a **MFA** or multi-factor authentication
#### Access control
- A subject is permitted to access an object in a particular mode, and only such authorized accesses are allowed
  - **Subject**
    - Human users
  - **Object**
    - things on which an action can be performed
  - **Access Mode**
    - any controllable actions
- **Policies**
  - **Access control policies** indicate what types of access are permitted, under what circumstances, and by whom
  - **Authorization** is the process of determining whether a user is permitted to perform a specific operation
### Software Development cycle
- Software development life cycle describes phases of the software development cycle and the order in which those phases are executed 
- Each phase produces deliverables required for the next phase
- Security should be considered as early as possible
  - **Planning**
  - **Analysis**
  - **Design**
  - **Implementation**
  - **Testing and Integration**
  - **Maintenance**
- Terminology
  - **Software Bugs** are errors, flaws, mistakes, or oversights in programs
  - **Software Vulnerabilities** are specific flaws that allow attack vectors
  - **Malware** is software that has mal-intent
