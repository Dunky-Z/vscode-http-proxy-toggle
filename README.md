# http-proxy-toggle by Soshnikov

Toggle VS Code's `http.proxy` setting from the status bar.

This extension cycles between two configured proxy profiles and a disabled state:

```text
Office -> Home -> Disabled -> Office
```

## Features

- Status bar proxy indicator with the current profile.
- One-click proxy switching.
- Configurable Home and Office proxy URLs.
- Disabled state that clears `http.proxy`.
- Works well when switching between local and remote development environments such as WSL or SSH.

## Usage

After installation, click the proxy icon in the VS Code status bar to switch proxy states.

Configure proxy URLs in VS Code settings by searching for `HTTP Proxy Toggle`.

| Setting | Default | Description |
| --- | --- | --- |
| `httpProxyToggle.office` | `http://127.0.0.1:7890` | Proxy URL for the Office profile. |
| `httpProxyToggle.home` | empty | Proxy URL for the Home profile. If empty, selecting Home disables the proxy. |

![HTTP Proxy Toggle demo](https://picbed-1311007548.cos.ap-shanghai.myqcloud.com/markdown_picbed/img//2024/07/27/443688b6c69df9607542240800ad17df.gif)

## Maintained Fork

This package is a maintained fork of [Dunky-Z/vscode-http-proxy-toggle](https://github.com/Dunky-Z/vscode-http-proxy-toggle), which is itself forked from [kita-develop/vscode-http-proxy-toggle](https://github.com/kita-develop/vscode-http-proxy-toggle).

The original Marketplace extension is `DominicZhang.proxy-toggle`.

## License

No explicit upstream open-source license was found in the upstream repositories as of 2026-04-28. See [LICENSE](LICENSE) and [NOTICE.md](NOTICE.md) before redistributing or reusing the source code.
