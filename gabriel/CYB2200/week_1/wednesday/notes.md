__**Wed Aug 27 Class Notes**__

# C-I-A TRIAD
- Confidentiality:
  - The ability of a system to ensure that an asset is viewed only by authorized parties.

- Integrity:
  - The ability of a system to ensure that an asset is modified only by authorized parties.

- Availability:
  - The ability of a system to ensure that an asset can be used by any authorized parties.

# TERMINOLOGY
- A **vulnerability** isa weakness in an information system, system security procedures, internal controls, or implementation that could be exploited or triggered by a threat source [NIST].
- A **threat** to a computing system is a set of circumstances that has the potential to cause loss or harm.
- The negative consequence of an actualized threat is **harm**.
- The possibility for harm to occur is called **risk**.
- An **exploit** is a piece of software, a chunk of data, or a sequence of commands that takes advantage of a vulnerability to cause unintended or unanticipated behavior to occur on computer software, hardware, or something electronic.
- A human who exploits a vulnerability perpetrates an **attack** on the system.
- **Control** or **countermeasure** prevents threats from exercising vulnerabilities.
- **Software bugs** are errors, flaws, mistakes, or oversights in programs that result in unexpected and typically undesirable behavior.
- **Software vulnerabilities** are specific flaws or oversights in a piece of software that allows attackers to do something malicious – expose or alter sensitive information, disrupt or destroy a system, or take control of a computer system or program.
- **Malware** is software that has a malicious intent.

## THREAT VS VULNERABILITY EXAMPLE
**A wall holds back 100 gallons of water from flowing into an enclosed room. There is a crack in the wall. A person is plugging the hole in the wall with his finger. What is the threat? Vulnerability? Control?**
- Threat – *water*
- Vulnerability – *crack*
- Control – *person plugging the hole*

# ATTACK
- An attack is an attempt to gain unauthorized access to system services, resources, or information, or an attampt to compromise system integrity [NIST].
- Can be classified into four groups:
  - **Passive attack:** attempt to collect, learn or use the information from a system, does not affect the system.
  - **Active attack:** attempt to alter system resources or change their operations.
  - **Insider attack:** attacks initiated by an insider who is authorized to access system resources.
  - **Outsider attack:** attacks initiated by an outsider, usually an unauthorized user of the target system.

# CONTROLS
- **Control** or **countermeasure** prevents threats from exercising vulnerabilities.
  - **Prevent** it, by blocking the attack or closing the vulnerability
  - **Deter** it, by making the attack harder but not impossible.
  - **Deflect** it, by making another target more attractive.
  - **Mitigate** it, by making its impact less severe.
  - **Detect** it, either as it happens or some time after the fact.
  - **Recover** from its effects.

# CONTROLLED ACCESS
- **Someone** is authorized to take **some action** on **something**.
- We need to be sure who the someone is:
  - **Identification**
    - The act of asserting who a person is.
    - **Identity:**
      - The set of physical and behavioral characteristics by which an individual is uniquely recognizable [NIST].
      - Can be public or well known or predictable.
        - Email address
        - Student ID
        - Employee ID
        - etc.
  - **Authentication**
    - The act of proving that asserted identity.
    - Should be private and well protected.

# AUTHENTICATION MECHANISMS
- Something the user **has**.
  - A physical object in your possession.
    - Passport
    - Identity badges
    - Physical keys
    - Driver's license
  - Something the user **knows**.
    - Passwords
    - DoB
    - PIN
    - SSN
  - Something the user **is**.
    - Based on a physical characteristic of the human body.
      - Fingerprints
      - Retina
      - etc.

## MULTIFACTOR AUTHENTICATION
- Authentication using two or more factors to achieve authentication.
- Password is the most common thing used for authentication on information systems.

# ACCESS CONTROL
- A subject is permitted to access an object in a particular mode, and only such authorized accesses are allowed [GRA72].
  - **Subjects** are human users.
  - **Objects** are things on which an action can be performed.
    - files
    - tables
    - users
  - **Access mode** are any controllable actions. (owrx)

# ACCESS CONTROL POLICIES
- An **access control policy** indicates what types of access are permitted, under what circumstances, and by whom.
- **Authorizeation** is the process of determining whether a user on the system is permitted to perform a specific operation.
  - Establishes who a user is, and determines what that user is permitted to do.

# SOFTWARE DEVELOPMENT LIFE CYCLE (SDLC)
- Software development life cycle describes phases of the software development cycle and the order in which those phases are executed.
- Each phase produces deliverables requeired by the next phase in the life cycle.
- Security should be considered as early as possible – from the planning phase.

## SOFTWARE DEVELOPMENT CYClE
1. Planning
2. Analysis
3. Design
4. Implementation
5. Testing & Integration
6. Maintenance