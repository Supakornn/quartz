---
tags:
  - explorer-exclude
  - graph-exclude
  - backlinks-exclude
  - recents-exclude
  - "#tracker"
title: All files modified
---

[[index| 🪴 Return to Homepage]]

### The table

%% note to self it's finicky with spaces so i was having some trouble but turns out it's bc i had an extra space at the end %%

<!-- QueryToSerialize: TABLE file.folder as "Folder", dateformat(file.mtime,"MMM d, yyyy") as "Modified" FROM -"tags" AND -#slurp SORT file.mtime DESC WHERE file.name != this.file.name AND file.name != "index" AND draft != "true" -->
<!-- SerializedQuery: TABLE file.folder as "Folder", dateformat(file.mtime,"MMM d, yyyy") as "Modified" FROM -"tags" AND -#slurp SORT file.mtime DESC WHERE file.name != this.file.name AND file.name != "index" AND draft != "true" -->

| File                                                                     | Folder      | Modified     |
| ------------------------------------------------------------------------ | ----------- | ------------ |
| [[coding/Compile protobuf for go.md\|Compile protobuf for go]]           | coding      | Sep 27, 2025 |
| [[integration/gRPC.md\|gRPC]]                                            | integration | Sep 27, 2025 |
| [[integration/RESTful.md\|RESTful]]                                      | integration | Sep 27, 2025 |
| [[integration/RPC.md\|RPC]]                                              | integration | Sep 27, 2025 |
| [[design/Big Ball Of Mud.md\|Big Ball Of Mud]]                           | design      | Sep 27, 2025 |
| [[design/Monolithic.md\|Monolithic]]                                     | design      | Sep 27, 2025 |
| [[design/Microservices.md\|Microservices]]                               | design      | Sep 27, 2025 |
| [[integration/Protobuf.md\|Protobuf]]                                    | integration | Sep 27, 2025 |
| [[integration/Messaging Systems.md\|Messaging Systems]]                  | integration | Sep 27, 2025 |
| [[blog/WebAssembly with Zig (TH).md\|WebAssembly with Zig (TH)]]         | blog        | Sep 27, 2025 |
| [[blog/WebDevelopment with HTMX (TH).md\|WebDevelopment with HTMX (TH)]] | blog        | Sep 26, 2025 |
| [[braindump/INT134 exam preparation.md\|INT134 exam preparation]]        | braindump   | Sep 26, 2025 |
| [[coding/Go.md\|Go]]                                                     | coding      | Sep 26, 2025 |
| [[cache.md\|cache]]                                                      |             | Sep 26, 2025 |
| [[ctf/STH-Mini-Web-CTF-2025 (TH).md\|STH-Mini-Web-CTF-2025 (TH)]]        | ctf         | Sep 26, 2025 |
<!-- SerializedQuery END -->

%%
```dataviewjs
// Get all markdown notes, excluding those in "cool things online"
let pages = dv.pages('')
  .where(p =>
    p.file &&
    p.file.ext === "md" &&
    !p.file.path.toLowerCase().includes("cool things online/") && // Exclude folder &&
    !p.file.path.toLowerCase().includes("") &&
    !p.file.path.toLowerCase().includes("quartz")
  );

let notes = [];
for (let page of pages) {
  let content = await app.vault.read(app.vault.getAbstractFileByPath(page.file.path));
  let wordCount = content.split(/\s+/).filter(w => w.length > 0).length;
  notes.push({
    file: page.file,
    wordCount: wordCount
  });
}

notes.sort((a, b) => b.wordCount - a.wordCount);
let top = notes.slice(0, 5);

dv.table(["Note", "Word Count"], top.map(n => [n.file.link, n.wordCount]));
```
%%
