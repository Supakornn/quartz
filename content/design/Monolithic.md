---
tags:
  - software-architecture
---

![[Pasted image 20250927051052.png]]

A **monolithic architecture** is a traditional model of software development where the entire application is built as a single codebase. All components are tightly coupled and deployed together.

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
- Risk of "[[big ball of mud]]" as codebase grows
- Any change requires full redeployment
- Technology stack is locked across the entire app

