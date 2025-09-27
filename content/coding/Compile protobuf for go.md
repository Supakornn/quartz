---
tags:
  - go
  - protobuf
---
### Install

```shell
go install google.golang.org/protobuf/cmd/protoc-gen-go@latest
```

### Compile

```shell
protoc --go_out=. --go_opt=paths=source_relative --go-grpc_out=. --go-grpc_opt=paths=source_relative path_to_protobuf_file
```