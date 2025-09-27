---
tags:
  - microservices
---
In Microservices, each service has its **own database**. This makes **traditional ACID transactions across services** difficult. To handle consistency, we use **patterns like 2-Phase Commit (2PC) or Sagas**.

### 1. 2-Phase Commit (2PC)

- **Central coordinator** ensures all services commit or rollback together
- **Two phases:**

    1. **Prepare / Vote:** each service votes if it can commit
    2. **Commit / Rollback:** coordinator tells all to commit or rollback
        
- **Advantages:** strong consistency (ACID across services)
- **Disadvantages:**
    
    - Blocking → slow and reduces availability
    - Hard to scale
    - Complex to implement
        
### 2. Sagas Pattern

- Break a transaction into a **sequence of local transactions** across services
- Each local transaction can **commit independently**
- If something fails, **compensating transactions** undo previous steps
- **Advantages:**
    
    - Non-blocking → scalable
    - Works well with asynchronous / [[Event-Driven]] systems
        
- **Disadvantages:**
    
    - Eventual consistency (not immediate)
    - Harder to reason about failures
    - Must implement compensating actions
        
### Key Tips

- Use **2PC** only if **strong consistency** is critical and low scale
- Use **Sagas** for **high scalability and async workflows**
- Combine with [[Event-Driven]] / [[Messageing Seystems]] for reliability
    
### See also

- [[Microservices]]
- [[Event-Driven]]
- [[Messageing Seystems]]
- [[Apache Kafka]]