### Goals:

- creating new tabs and panes using familiar shortcuts (Ctrl+a > c)
- Navigate between tabs 1–10 easily (Ctrl+a > 1..0)

### How to:

1. go to your zellij config file `nvim ~/.config/zellij/config.kdl`
2. 
```js
keybinds clear-defaults=true {
    normal {
        // Prefix like tmux
        bind "Ctrl a" { SwitchToMode "tmux"; }

        // Navigation shortcuts
        bind "Alt h" { MoveFocus "Left"; }
        bind "Alt j" { MoveFocus "Down"; }
        bind "Alt k" { MoveFocus "Up"; }
        bind "Alt l" { MoveFocus "Right"; }
    }
    .....
```