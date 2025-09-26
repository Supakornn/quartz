---
tags:
  - service-communication
---
**Protobuf** (Protocol Buffers) is a way to store and send data between programs in a **small, fast binary format**. It’s often used with **gRPC**.

### Characteristics

- Data is converted into **binary**, so it’s small and fast
- You need to define a **schema** first (`.proto` file)
- Supports many programming languages (polyglot)
- Can be used for RPC communication or data storage
    
### Advantages

- Small data size → faster than JSON
- Strongly typed → fewer errors
- Works with many languages and platforms
- Good for real-time or streaming data

### Disadvantages

- Not human-readable (binary format)
- Need to learn `.proto` syntax
- Requires compile step to generate code from schema
    
### See also

- [[gRPC]]
- [[Microservices]]