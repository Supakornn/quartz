---
tags:
  - software-architecture
---

A **monolithic architecture** is a traditional model of software development where the entire application is built as a single, unified unit. All components—such as the user interface, business logic, and data access layer—are tightly coupled and deployed together.

## Characteristics
- Simple to develop, test, and deploy in early stages
- Single codebase and deployment artifact
- Shared memory space and database

## Advantages
- Easier debugging and testing (everything runs in one process)
- Lower operational complexity for small teams
- Faster initial development velocity

## Disadvantages
- Hard to scale individual components
- Risk of "big ball of mud" as codebase grows
- Any change requires full redeployment
- Technology stack is locked across the entire app

## See also
- [[202405201205-microservices-architecture|Microservices Architecture]]
- [[202405201210-monolithic-vs-microservices|Monolithic vs Microservices]]