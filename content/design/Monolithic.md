---
tags:
  - software-architecture
---
**Monolithic** is the traditional way to build software. The whole app is one big codebase. UI, business logic, and database access are all together in one system.

### Characteristics

- Single codebase
- One deployment for the whole app
- Shared memory and database
    
### Advantages

- Easy to debug and test (everything in one process)
- Simple operations for small teams
- Fast initial development
    

### Disadvantages

- Hard to scale individual parts
- Code can become messy (“[[Big Ball Of Mud]]”)
- Any change needs full redeploy
- Technology stack is locked for the whole app

### See also

- [[Microservices]]
- [[RESTful]]
- [[Big Ball Of Mud]]