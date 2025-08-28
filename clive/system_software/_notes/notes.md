# CS  - System Software

**Date:** 8|26|2025

## Lecture 1: Bruce Bolden 
- Contact: JEB 232 [bruceb@uidaho.edu](mailto:bruceb@uidaho.edu)

### Early Computing – Mainframes
- Input – Punch cards / paper tape
- Output – Paper, magnetic tape
- Storage – Magnetic tape

### Minicomputers
- Input – Terminals
- Output – Paper, disk drives
- Storage – Disk drives (hard or floppy)

### Phones meet Paper tape
- Massimo @Rainmaker1973 [https://x.com/rainmaker1973/status/1957679867035590884]
    A smartphone device brings punched tape back to life. This
    vintage storage method used holes to encode data – now
    modern tech can read it in real time.

### Systems 
- System Structure History Progression:
    - Dumb Terminals/ADM3s/VT100s communicate 30-1000 char/s to a mini computer which has memory and disk
    - X-terminals communicate with Ethernet (at the time 1,000,000) chars/sec to a mini computer which has memory and disk
    - Serial Interfaces(Mouse and keyboard)/Graphics Adapters(moniter) and Disk Controllers (for disk) communicate with the CPU and Memory through a bus (ISA/PCI) 123 MB/s
    - Graphics Adapters(monitor) uses AGP Bus, and through a I/O bridge the Disk/Disk Controller use a PCI Bus/Serial Interfaces(Mouse and keyboard) uses ISA Bus to talk to the CPU, which has a Front-Side bus (132-2000 MB/sec) to the Memory
    - Then they advance to full operating systems; [https://canvas.uidaho.edu/courses/41012/files/folder/Lectures?preview=4419632]
    ![operatingsysystem](img/operatingsysystem.png)

## Lecture 2: 
