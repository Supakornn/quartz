---
tags:
  - service-communication
---
**RPC** (Remote Procedure Call) is a way for a program to run a function on another computer or server as if it were local.

### Characteristics

- Client calls a function on a remote server
- Can return a result just like a normal function call
- Works over a network (TCP, HTTP, etc.)
- Can be **synchronous** (wait for reply) or **asynchronous** (don’t wait)
    
### Advantages

- Makes remote calls simple, like calling a local function
- Can be fast and efficient
- Used in many distributed systems
    
### Disadvantages

- Network issues can cause errors
- Harder to debug than local calls
- Tightly coupled: client must know server interface
- Versioning and compatibility can be tricky