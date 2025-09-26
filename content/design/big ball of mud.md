---
tags:
  - software-architecture
---
**Big Ball of Mud** is software with messy code and no clear structure. Hard to read, maintain, and add features.

### Characteristics

- No clear structure, code is messy
- Parts depend on each other too much
- Small changes can break many parts
- Documentation often missing
    
### Causes

- Rushing to deliver features fast
- No architecture planned at the start
- No coding standards or reviews
- System grows without refactoring
    
### Consequences

- Hard to maintain and add new features
- High chance of bugs
- Developers spend lots of time understanding old code
- Scaling or deploying is difficult
    
### How to prevent / fix

- Make code modular (clear parts)
- Use simple design patterns and architecture rules
- Refactor code regularly
- Write tests and update documentation