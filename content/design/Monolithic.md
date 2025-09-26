---
tags:
  - software-architecture
---

![[Pasted image 20250927051052.png]]

A **Monolithic architecture** is a software design methodology that combines all of an application's components into a single, inseparable unit. Under this architecture, the user interface, business logic, and data access layers are all created, put into use, and maintained as one, unified unit.

### Characteristics
- Simple to develop, test, and deploy in early stages
- Single codebase and deployment artifact
- Shared memory space and database

### Advantages
- Easier debugging and testing (everything runs in one process)
- Lower operational complexity for small teams
- Faster initial development velocity

### Disadvantages
- Hard to scale individual components
- Risk of "big ball of mud" as codebase grows
- Any change requires full redeployment
- Technology stack is locked across the entire app

### See also
- [[202405201205-microservices-architecture|Microservices Architecture]]
- [[202405201210-monolithic-vs-microservices|Monolithic vs Microservices]]