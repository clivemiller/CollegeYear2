__**Tue Nov 04 Class Notes**__

# Networking

## BRIEF INTRODUCTION

- Networking has become one of the most important issues in modern computing. There are several issues that must be overcome:
  - Lots of terminology/acronyms!
  - Babel: Operating systems, hardware, applications, etc.
  - Numerous standards, formats, protocols, etc., to communicate.

## NETWORK VOCABULARY

- Many of the terms and acronyms used in class duing the networking disussions are listed below:
  - LAN
  - VLAN
  - WAN
  - bridge
  - router
  - repeater
  - gateway
  - OSI Model
  - IP – Internet Protocol
  - TCP – Transmission Control Protocol
  - UDP
  - TCP/IP
  - IP address (v4 and v6 forms)
  - "dotted quad format"
  - URL
  - subnet
  - netmask
  - datagram
  - packet
  - header
  - MAC (Media Access Control) address
  - checksum
  - DNS – Domain Name System
  - NFS – Network Fiel System
  - FTP – File Transfer Protocol
  - telnet
  - SSH – Secure Shell
  - SNMP – Simple Mail Transfer Protocol
  - ICMP Internet Control Message Protocol

## TOKEN-RING

A **token-ring topology** is shown in the following figure. In this topology, a "token" (shown as a *t*) is placed in the data channel and circulates around the ring, hence the name token-ring. If a user wants to transmit, the computer waits until it has control of the token. This technique is called *token passing* and is based on the IEEE^2 802.5 Token-Ring Network standard. A token-ring network is a deterministic network, meaning each station connected to the network is assured access for transmission of its messages at regular or fixed time intervals.

## THE OSI MODEL

An open systems interconnect (OSI) reference model was developed by the International Organization for Standardization in 1984 to enable different types of networks to be linked together. The model contains seven layers, below. These layers describe networking functions from the physical network interface to the software applications interfaces. The intent of the OSI model is to provide a framework for networking that ensures compatibility in the network hardware and software and to accelerate the development of new networking technologies.

7. Application; support for applications; HTTP, FTP, SMTP (email)
6. Presentation; protocol conversion, data translation; ASCII, JPEG
5. Session; establishes, manages, and terminates sessions; NFS, SQL
4. Transport; ensures error-free packets; TCP, UDP
3. Network; provides routing decisions; IP, IPX
2. Data Link; provides for the flow of data; MAC addresses
1. Physical; signals and media; NICs, twisted-pair cable, fiber

## 
