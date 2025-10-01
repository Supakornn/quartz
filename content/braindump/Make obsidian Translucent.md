---
tags:
  - tools
---
1. go to Setting > Appearance > Advance > turn on Translucent window
2. open terminal and go to `.obsidian/snippets/` in your directory
3. create a css file eg. translucent.css > and copy&paste this css

```css
body {
    --background-primary: #000 !important; # bg color
    --titlebar-background: transparent !important;
    --titlebar-background-focused: var(--titlebar-background);
    --text-normal: #f1f1f1 !Important;
    --workspace-background-translucent: rgba(var(--mono-rgb-0), 0.5); # 0.5 is opacity
    
}

.workspace-tab-header.is-active {
    color: #fff !Important;
}


.workspace-leaf,
.workspace-tab-header-container {
    background: transparent;
}

.workspace-split.mod-root,
.workspace-split.mod-root .view-content,
.workspace-split.mod-root .view-header {
    background: transparent;
}

.view-header-title-container:not(.mod-at-end):after {
    background: transparent;
}

.custom-frames-frame {
    background: transparent !important;
}

.is-focused .workspace-leaf.mod-active .view-header {
    background: transparent;
}
```

5. go to Setting > Appearance > CSS Snippets > turn on you css
6. there you go! 🎉