# vlsideepdive Labs: Verilog Playground

Free Verilog/SystemVerilog simulator that runs entirely in the browser, served at https://labs.vlsideepdive.com.

- Simulator: [Icarus Verilog 12.0](https://github.com/steveicarus/iverilog) (GPL-2.0), compiled to WebAssembly with WASI SDK 25. Changes: `icarus-wasm.patch`, `static_dl.c`.
- Browser WASI runtime: [browser_wasi_shim](https://github.com/bjorn3/browser_wasi_shim) (MIT/Apache-2.0).
- Editor: CodeMirror 5 (MIT).

See `licenses.html` for details.
