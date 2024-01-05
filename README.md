# chord2mml
A library transpiles Chord notation into Music Macro Language.

# demo
https://cat2151.github.io/dist/chord2mml/

# 状況
- まだTDD開始直後です。majやmaj7などは鳴ります。一方でchord qualityの大部分は後回しにしています。
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

# 目指すこと
- 概念実証
  - 丁寧で完璧な動作を細部まで完璧に作り込むことよりも、
    - 大きな用途のある機能の目処を立てることを優先する
- シンプル
  - ルールはシンプルであることを優先します。
  - できるだけ入力データそのままを扱います。
  - 例えばオクターブは手動制御とします。
    - 「octave-up」などをユーザーが明示的に書きます。
    - なぜなら「octave上がよい」「octave下がよい」かは、入力データからは断定できないためです。
    - また「スタンダードなほうを自動で選び、そこから外れた場合にユーザーが制御とする」こともしません。
      - なぜなら、スタンダードの境界線がグラデーションであることや、どこまでがスタンダードかのルールが複雑となり、仕様が複雑となるためです。

# 目指さないこと
- レアケース調査。あらゆるレアケースの表記を、全ての書籍とインターネットの隅々まで調べ上げる
- まだ発生していない可能性への先行対応。「こんな可能性もありそう」というものをすべて洗い出して検討する
- 完璧なフォーマット。全てに対応できる表記フォーマットを完成させる
- 全組み合わせテスト。全てに対応できるようテストケースを全組み合わせについて完成させる
- 完璧な全自動。あらゆる曖昧な入力に対してすべてを全自動でいい感じにしてくれるシステムを構築する
