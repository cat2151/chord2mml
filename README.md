# chord2mml
A library transpiles Chord notation into Music Macro Language.

# demo
https://cat2151.github.io/dist/chord2mml/

# 状況
- まだTDD開始直後です。majとmaj7のclosed voicingのみ、四分音符固定、音域固定、等の状態です。
## 近いゴール
- [MML-chord-generator](https://github.com/cat2151/MML-chord-generator)のサブセットのような最低限の機能を実現すること
## 遠いゴール
- [MML-chord-generator](https://github.com/cat2151/MML-chord-generator)のいくつかの関数を代替できるレベルの機能を実現すること

# 分担
- `chord2mml_chord2ast.pegjs ～ chord2mml_notes2mml.ts を作ること`
  - が、このリポジトリの担当です。
- `easyにchord2mmlを使える仕組み を作ること`
  - は、[easychord2mml](https://github.com/cat2151/easychord2mml/)で担当します。

# このprojectが優先すること
- 関数に`Chord notation文字列`を与えて、`MML文字列`を取得できること。