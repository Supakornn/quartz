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

| File                                                                                 | Folder     | Modified     |
| ------------------------------------------------------------------------------------ | ---------- | ------------ |
| [[blogs/WebDevelopment with HTMX.md\|WebDevelopment with HTMX]]                      | blogs      | Sep 26, 2025 |
| [[design/Monolithic Architecture.md\|Monolithic Architecture]]                       | design     | Sep 26, 2025 |
| [[design/Microservices.md\|Microservices]]                                           | design     | Sep 26, 2025 |
| [[design/Domain Driven Design(DDD).md\|Domain Driven Design(DDD)]]                   | design     | Sep 26, 2025 |
| [[cache.md\|cache]]                                                                  |            | Sep 26, 2025 |
| [[braindumps/INT134 exam preparation.md\|INT134 exam preparation]]                   | braindumps | Sep 26, 2025 |
| [[blogs/CTFs/STH-Mini-Web-CTF-2025 — Write Up.md\|STH-Mini-Web-CTF-2025 — Write Up]] | blogs/CTFs | Sep 26, 2025 |
| [[blogs/WebAssembly with Zig.md\|WebAssembly with Zig]]                              | blogs      | Sep 26, 2025 |
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
