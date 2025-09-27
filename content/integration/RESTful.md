---
tags:
  - service-communication
---
**RESTful** (Representational State Transfer) is an approach to build web APIs. It uses standard HTTP methods and URLs to let clients talk to servers.

### Characteristics

- Uses HTTP methods:
    - `GET` → get data
    - `POST` → create new data
    - `PUT` → update data
    - `PATCH` -> update data
    - `DELETE` → remove data
        
- Resources are identified by URLs
- Stateless: each request contains all info the server needs
- Can return data in formats like JSON or XML
    
### Advantages

- Simple and easy to use
- Works over the web using standard HTTP
- Scalable and flexible
- Many tools and libraries support it
    
### Disadvantages

- Can be less efficient for complex operations
- Over-fetching or under fetching data sometimes happens
- No built-in security (must use HTTPS, tokens, etc.)

### See also

- [[gRPC]]