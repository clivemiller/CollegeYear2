__**Wed Oct 22 Class Notes**__

# IDK

## SECURITY PATTERNS

- Design Attributes
  - Transparent Design
  - Economy of Design
- Exposure Minimization
  - Allowlists over blocklists
  - Least privilege
  - Least information
  - Secure by default
  - Fail securely
  - Avoid predictability
- Redundancy
  - Separation of Privilege
  - Defense in Depth
- Strong Enforcement
  -
  -
  -

### Design Attributes

#### Ecomony Of Mechanism

- Keep software design as small and simple as possible.
  - Don't add complexity
  - KISS (Keep It Simple and Small)
  - simpler means less can go wrong
  - When errors occur, they are easier to find and fix

#### Open Design (Transparent Design)

- Security of software and of what that software provides should not depend on the secrecy of its design or implementation.
  - Security through obscurity
  - Security should not depend solely on secrecy of design or implementation.
  - Does not apply to information such as password or sryptographic keys.

### Redundancy

#### Separation of Privilege

- Software should not grant access to a resource, or take a security-relevant action, based upon a single condition.
  - Sensitive operations should require the cooperations of more than one check
  - eg.
    - Banking: Two signatures on a large check.
    - Military: Two people give the same command.

#### Defense in Depth

### 

#### Least Privilege (need to know)

- Software [user/other system] should be given only those privileges that it needs to complete its task and only for the minimum time necessary.
  - Minimal protection domain. (Protection domain: all objects to which the process has access and the type of access the process has.)
  - Rights added as needed, discarded after use
- It is always safest to collect and access the minimim amount of private information needed for the job.
  - Avoid providing more private information than necessary when calling a subroutine

**Advantages:**

- Reduce risk of breach.
- The security impact of a security incident or corruption of the component will be minimized.
- The security analysis of the component will be simplified (that is, if you have to do forensic analysis on a breach, the analysis will be easier).

#### Fail-safe Defaults

- Unless a subject is given explicity access to an object, it should be denied access to that object.
  - Default action is to deny access.
  - If action fails, go back to where the system began.
- What happens when the system fails?
  - Some systems allow access or exhibit insecure behavior when a failure occurs.
- The attack then "just" has to figure out how to cause a failure.
- If the subject is unable to complete its action or task, all interim changes should be undone and the security state restored prior to termination.
- If a problem occurs, be sure to end up in a secure state.

### Least Common Mechanism

### Complete Mediation

- Software should validate every access to every object to ensure that the access is allowed.
  - Whenever you make an access, check to be sure that it is allowed.

### Least Astonishment

- Secure mechanisms should be designed so users understand why the mechanism works the way it does, and using the mechanism is simple.
  - Hide complexity introduced by security mechanisms
  - Ease of installation, configuration and use
  - Human factors critical

## DEFENSIVE PROGRAMMING

- Cover all cases – use defaults to handle cases not explicitly covered.

## OFF-BY-ONE ERROR

- Caused by calculating the length of an array incorrectly (off by one array element).
- Example:

```void process_string(char *src)
{
    char dest[32];

    for (i = 0; src[i] && (i <= sizeof(dest)); i++)
        dest[i] = src[i];
}```
