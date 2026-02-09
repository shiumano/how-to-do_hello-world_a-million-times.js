# wasm
wasmでループすればforでもforeachでもwhileでも再帰でもない

```WAT
(module
  (import "imports" "a" (func $a))
  (func (export "main") (param $p i32)
    (loop $l
      call $a
      local.get $p
      i32.const 1
      i32.sub
      local.set $p
      local.get $p
      i32.const 0
      i32.ne
      br_if $l
    )
))
```