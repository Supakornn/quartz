---
tags:
  - software-architecture
---
**Coupling** = how much services or modules depend on each other. In Microservices, we want **loose coupling** so services can work independently.

### 1. Domain Coupling

- Services share the **same business domain**
- Changes in one service may affect another
- Moderate coupling; okay if domain boundaries are clear
- **Impact:** design decision on service boundaries

### 2. Pass-Through Coupling

- Service A calls Service B, which just passes the call to Service C
- Extra dependency → slower and harder to debug
- Bad for performance and reliability
- **Impact:** affects system integration
    

### 3. Common Coupling

- Services share the **same database or global state**
- Tight coupling → any change can break multiple services
- Should be avoided in Microservices
- **Impact:** both design and integration risk
    
### Key Tips for Microservices

- Goal: **loose coupling**
- Avoid: pass-through calls, shared databases, tightly linked logic
- Prefer: independent services, async communication, clear domain boundari

### See also

- [[Microservices]]
- [[Monolithic]]