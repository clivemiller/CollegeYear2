__**Thu Oct 23 Class Notes**__

# FILE MANAGEMENT

- File management system consists of system utility programs that run as privileged applications
- Input to applications is by means of a file
- Output is saved in a file for long-term storage

## File Operations

- Create
- Delete
- Open
- Close
- Read
- Write

## File Terminology

- File
  - Collection of similar records
  - Treated as a single entity
  - Have file names
  - May restrict access
- Database
  - Collection of related data
  - Relationships exist among elements

## Typical Operations

- Retrieve_All
- Retrieve_One
- Retrieve_Next
- Retrieve_Previous
- Insert_One
- Delete_One
- Update_One
- Retrieve_Few

## File Management Systems

- The way a user or application may access files
- Programmer does not need to develop file management software

### Objectives

- Meet the data management needs and requirements of the user
- Guarantee that the data in the file is valid
- Optimize performance
- Provide I/O support for a variety of storage device types
- Minimize or eliminate the potential for lost or destroyed data
- Provide a standardized set of I/O

### Minimal Set of Requirements

- Each user should be able to create, delete, read, write and modify files
- Each user may have controlled access to other users' files
- Each user may control what type of accesses are allowed to the user's files
- Each user should be able to restructure the user's files in a form appropriate to the problem

## Device Drivers

- Lowest level
- Communicated directly with peripheral devices
- Responsible for starting I/O operations on a device
- Processes the completion of an I/O request

## Basic File System

- Physical I/O
- Deals with exchanging blocks of data
- Concerned with the placement of blocks
- Concerned with buffering blocks in main mem

## Logical I/O

- Enables users and applications to access records
- Provides general-purpose record I/O capability
- Maintains basic data about the file

## Criteria for File Organization

- Economy of storage
  - Should be minimum redundancy in the data
  - Redundancy can be used to speed access such as an index
- Simple maintenance
- Reliability

## 
