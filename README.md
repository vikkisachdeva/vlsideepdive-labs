# vlsideepdive Labs

Free Verilog/SystemVerilog simulator that runs entirely in the browser, served at https://labs.vlsideepdive.com.

- Simulator: [Icarus Verilog 12.0](https://github.com/steveicarus/iverilog) (GPL-2.0), compiled to WebAssembly with WASI SDK 25. Changes: `icarus-wasm.patch`, `static_dl.c`.
- Browser WASI runtime: [browser_wasi_shim](https://github.com/bjorn3/browser_wasi_shim) (MIT/Apache-2.0).
- Editor: CodeMirror 5 (MIT).

See `licenses.html` for details.

## STA Lab (`/sta/`)

Static timing analysis in the browser with [OpenSTA](https://github.com/parallaxsw/OpenSTA) (GPL-3.0), compiled to WebAssembly together with Tcl 8.6, CUDD, zlib and an exception-enabled LLVM libc++. Example libraries: SkyWater SKY130 HD (Apache-2.0) and ASAP7 (BSD-3-Clause). See `sta/licenses.html`.

## Layout

- `/` – labs home page (cards generated from `labs.js`)
- `/verilog/` – Verilog simulator (Icarus Verilog)
- `/sta/` – STA lab (OpenSTA)
- `/tips/` – Vikas Sachdeva's tips: edit `tips/tips.md` to add tips (instructions at the top of that file)

To add a new lab, put it in its own folder and add one entry to the `LABS` list in `labs.js`.
