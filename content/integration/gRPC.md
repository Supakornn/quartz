---
tags:
  - service-communication
---
**gRPC** is a framework for building fast APIs. It lets clients and servers talk using [[RPC]] instead of just HTTP requests.

### Characteristics

- Uses [[RPC]]: client calls a function on the server like it’s local
- Uses [[Protobuf]] for data (small and fast)
- Supports multiple languages (polyglot)
- Can do streaming: send/receive multiple messages in a single connection
- Works over HTTP/2 for faster communication
    
### Advantages

- Fast and efficient (binary format is smaller than JSON)
- Strongly typed: reduces errors
- Supports streaming for real-time data
- Works with many programming languages
    
### Disadvantages

- More complex than REST
- Requires learning protobuf
- Less human-readable than JSON
- Tooling is good but not as simple as [[RESTful]] for beginners

### See also

- [[RPC]]
- [[Protobuf]]
- [[RESTful]]