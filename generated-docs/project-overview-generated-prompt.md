Last updated: 2025-12-02


# プロジェクト概要生成プロンプト（来訪者向け）

## 生成するもの：
- projectを3行で要約する
- プロジェクトで使用されている技術スタックをカテゴリ別に整理して説明する
- プロジェクト全体のファイル階層ツリー（ディレクトリ構造を図解）
- プロジェクト全体のファイルそれぞれの説明
- プロジェクト全体の関数それぞれの説明
- プロジェクト全体の関数の呼び出し階層ツリー

## 生成しないもの：
- Issues情報（開発者向け情報のため）
- 次の一手候補（開発者向け情報のため）
- ハルシネーションしそうなもの（例、存在しない機能や計画を勝手に妄想する等）

## 出力フォーマット：
以下のMarkdown形式で出力してください：

```markdown
# Project Overview

## プロジェクト概要
[以下の形式で3行でプロジェクトを要約]
- [1行目の説明]
- [2行目の説明]
- [3行目の説明]

## 技術スタック
[使用している技術をカテゴリ別に整理して説明]
- フロントエンド: [フロントエンド技術とその説明]
- 音楽・オーディオ: [音楽・オーディオ関連技術とその説明]
- 開発ツール: [開発支援ツールとその説明]
- テスト: [テスト関連技術とその説明]
- ビルドツール: [ビルド・パース関連技術とその説明]
- 言語機能: [言語仕様・機能とその説明]
- 自動化・CI/CD: [自動化・継続的統合関連技術とその説明]
- 開発標準: [コード品質・統一ルール関連技術とその説明]

## ファイル階層ツリー
```
[プロジェクトのディレクトリ構造をツリー形式で表現]
```

## ファイル詳細説明
[各ファイルの役割と機能を詳細に説明]

## 関数詳細説明
[各関数の役割、引数、戻り値、機能を詳細に説明]

## 関数呼び出し階層ツリー
```
[関数間の呼び出し関係をツリー形式で表現]
```
```


以下のプロジェクト情報を参考にして要約を生成してください：

## プロジェクト情報
名前: chord2mml
説明: # chord2mml
A library transpiles Chord notation into Music Macro Language.

# Demo
https://cat2151.github.io/chord2mml/dist/

# Features
- text to textのシンプルなJavaScriptライブラリ
- コード進行（Chord notation）から MMLを生成
- ブラウザや[Obsidian](https://github.com/cat2151/obsidian-plugin-mmlabc)でコード進行を手軽に鳴らせます

## 関連するproject
- [MML-chord-generator](https://github.com/cat2151/MML-chord-generator)：chord2mmlの仕様の一部は、MML-chord-generatorから継承したものです。
- [obsidian-plugin-mmlabc](https://github.com/cat2151/obsidian-plugin-mmlabc)：chord2mmlが組み込まれています。Obsidianでコード進行を書くと、音が鳴ります。作曲のアイデアスケッチの用途などを想定しています。

# 分担
- `chord2mml_chord2ast.pegjs ～ chord2mml_notes2mml.ts を作ること`
  - が、このリポジトリの担当です。
- `easyにchord2mmlを使える仕組み を作ること`
  - は、[easychord2mml](https://github.com/cat2151/easychord2mml/)で担当します。
- `コード進行を鳴らすことで、作曲のアイデアスケッチなどに役立てること`
  - は、[obsidian-plugin-mmlabc](https://github.com/cat2151/obsidian-plugin-mmlabc)で担当します。

# このprojectが優先すること
- 関数に`Chord notation文字列`を与えて、`MML文字列`を取得できること。
- [obsidian-plugin-mmlabc](https://github.com/cat2151/obsidian-plugin-mmlabc) でコード進行を鳴らせるようにすること。

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
      - なぜなら、スタンダードの境界線がグラデーションであること。そして、どこまでがスタンダードかのルールが複雑となること。それにより仕様が複雑となるためです。

# 目指さないこと
- レアケース調査。あらゆるレアケースのコード表記を、全ての書籍とインターネットの隅々まで調べ上げる
- まだ発生していない可能性への先行対応。「こんなコード表記をする可能性もありそう」というものをすべて実装する
- 完璧なフォーマット。全てに対応できる表記フォーマットを完成させる
- 全組み合わせテスト。全てに対応できるようテストケースを全組み合わせについて完成させる
- 完璧な全自動。あらゆる曖昧な入力に対してすべてを全自動でいい感じにしてくれるシステムを構築する
- 実用性。実用に耐えうる高機能と高品質を提供する


依存関係:
{
  "dependencies": {
    "@babel/parser": "^7.23.6"
  },
  "devDependencies": {
    "@types/jest": "^29.5.11",
    "chokidar-cli": "^3.0.0",
    "jest": "^29.7.0",
    "jest-environment-jsdom": "^29.7.0",
    "npm-run-all": "^4.1.5",
    "peggy": "^3.0.2",
    "ts-jest": "^29.1.1",
    "ts-loader": "^9.5.1",
    "typescript": "^5.3.3",
    "webpack": "^5.89.0",
    "webpack-cli": "^5.1.4",
    "webpack-dev-server": "^4.15.1"
  }
}

## ファイル階層ツリー
📄 .gitignore
📄 LICENSE
📖 README.ja.md
📖 README.md
📄 _config.yml
📁 dist/
  📜 chord2mml.js
  🌐 index.html
📁 generated-docs/
🌐 googled947dc864c270e07.html
📁 issue-notes/
  📖 2.md
📜 jest.config.js
📊 package-lock.json
📊 package.json
📁 peggyjs/
  📝 chord2mml_chord2ast.pegjs
📁 src/
  📘 chord2mml.ts
  📘 chord2mml_ast2ast.ts
  📘 chord2mml_ast2notes.ts
  📄 chord2mml_chord2ast.cjs
  📘 chord2mml_notes2mml.ts
📁 test/
  📘 chord2mml.test.ts
📊 tsconfig.json
📜 webpack.config.js

## ファイル詳細分析
**dist/chord2mml.js** (1行, 95159バイト)
  - 関数: r, e, n, s, u, o, uf, of, af, cf, lf, hf, bf, ff, mf, vf, Af, df, Cf, wf, pf, Lf, gf, yf, kf, Of, Sf, Rf, a, c, i, l, h, b, f, m, v, A, d, C, w, function, switch, if, map, replace, return, filter, sort, for
  - インポート: なし

**dist/index.html** (28行, 1319バイト)
  - 関数: なし
  - インポート: なし

**googled947dc864c270e07.html** (1行, 53バイト)
  - 関数: なし
  - インポート: なし

**jest.config.js** (5行, 123バイト)
  - 関数: なし
  - インポート: なし

**peggyjs/chord2mml_chord2ast.pegjs** (349行, 27588バイト)
  - 関数: CHORDS, EVENT, CHORD, SLASH_CHORD, ON_CHORD, SLASH_CHORD_MODE_CHORD_OVER_BASS_NOTE, SLASH_CHORD_MODE_INVERSION, SLASH_CHORD_MODE_POLYCHORD, INLINE_MML, INLINE_MML_SUB, INLINE_ABC, INVERSION_MODE_ROOT_INV, INVERSION_MODE_1ST_INV, INVERSION_MODE_2ND_INV, INVERSION_MODE_3RD_INV, OPEN_HARMONY_MODE_CLOSE, OPEN_HARMONY_MODE_DROP2, OPEN_HARMONY_MODE_DROP4, OPEN_HARMONY_MODE_DROP2AND4, BASS_PLAY_MODE_NO_BASS, BASS_PLAY_MODE_ROOT, TEMPO, BAR, BAR_SLASH, KEY, KEY_EVENT, SCALE, OCTAVE_UP, OCTAVE_UP_UPPER, OCTAVE_UP_LOWER, OCTAVE_DOWN, OCTAVE_DOWN_UPPER, OCTAVE_DOWN_LOWER, ROOT, ROOT_CDEFGAB, ROOT_DEGREE, SHARP, FLAT, CHORD_QUALITY, MAJ_LONG, MAJ_SHORT, MAJ7, MAJ9, MIN_LONG, MIN_SHORT, MIN7, SIXTH, SEVENTH, NINTH, ELEVENTH, THIRTEENTH, SUS2, SUS4, SEVENTH_SUS2, SEVENTH_SUS4, DIM_TRIAD, AUG, QUARTAL_HARMONY, FLATTED_FIFTH, AUGMENTED_FIFTH, OMIT_N, ADD_N, INVERSION, OCTAVE_OFFSET, WHITE_SPACE, HYPHEN, CHORD_SEPARATOR, MIDI_PROGRAM_CHANGE, PC000, PC001, PC002, PC003, PC004, PC005, PC006, PC007, PC008, PC009, PC010, PC011, PC012, PC013, PC014, PC015, PC016, PC017, PC018, PC019, PC020, PC021, PC022, PC023, PC024, PC025, PC026, PC027, PC028, PC029, PC030, PC031, PC032, PC033, PC034, PC035, PC036, PC037, PC038, PC039, PC040, PC041, PC042, PC043, PC044, PC045, PC046, PC047, PC048, PC049, PC050, PC051, PC052, PC053, PC054, PC055, PC056, PC057, PC058, PC059, PC060, PC061, PC062, PC063, PC064, PC065, PC066, PC067, PC068, PC069, PC070, PC071, PC072, PC073, PC074, PC075, PC076, PC077, PC078, PC079, PC080, PC081, PC082, PC083, PC084, PC085, PC086, PC087, PC088, PC089, PC090, PC091, PC092, PC093, PC094, PC095, PC096, PC097, PC098, PC099, PC100, PC101, PC102, PC103, PC104, PC105, PC106, PC107, PC108, PC109, PC110, PC111, PC112, PC113, PC114, PC115, PC116, PC117, PC118, PC119, PC120, PC121, PC122, PC123, PC124, PC125, PC126, PC127
  - インポート: なし

**src/chord2mml.ts** (20行, 492バイト)
  - 関数: function
  - インポート: ./chord2mml_chord2ast.cjs, ./chord2mml_ast2ast, ./chord2mml_ast2notes

**src/chord2mml_ast2ast.ts** (99行, 2820バイト)
  - 関数: astToAst, bar2noteLength, updateAstNoteLength, for, switch, if
  - インポート: なし

**src/chord2mml_ast2notes.ts** (389行, 12551バイト)
  - 関数: astToNotes, deleteProperties, getNotesByChord, getNotesByChordOverBassNote, concatLowerAndUpper, keyShiftUpperNotes, getNotesByInversionChord, getNotesByPolychord, getNotes, addNote, inversionAndOpenHarmony, keyShiftNotes, inversionByTargetNote, inversionByCount, adjustNotesOctave, drop2, drop4, drop2and4, for, switch, while, if
  - インポート: なし

**src/chord2mml_notes2mml.ts** (148行, 4692バイト)
  - 関数: notesToMml, create12ionians, generateIonians, normalizeArrays, isSharpByKeyAndScale, searchIonians, for, switch, if, while
  - インポート: なし

**test/chord2mml.test.ts** (458行, 22011バイト)
  - 関数: なし
  - インポート: ../src/chord2mml_chord2ast.cjs, ../src/chord2mml_ast2ast, ../src/chord2mml_ast2notes

**webpack.config.js** (29行, 487バイト)
  - 関数: なし
  - インポート: path

## 関数呼び出し階層
- CHORDS (peggyjs/chord2mml_chord2ast.pegjs)
  - r (dist/chord2mml.js)
    - e ()
      - n ()
      - s ()
      - u ()
      - o ()
      - uf ()
      - of ()
      - af ()
      - cf ()
      - lf ()
      - hf ()
      - bf ()
      - ff ()
      - mf ()
      - vf ()
      - Af ()
      - df ()
      - Cf ()
      - wf ()
      - pf ()
      - Lf ()
      - gf ()
      - yf ()
      - kf ()
      - Of ()
      - Sf ()
      - Rf ()
      - a ()
      - c ()
      - i ()
      - l ()
      - h ()
      - b ()
      - f ()
      - m ()
      - v ()
      - A ()
      - d ()
      - C ()
      - w ()
      - function ()
      - switch ()
      - if ()
      - map ()
      - replace ()
      - return ()
      - filter ()
      - sort ()
      - for ()
- EVENT (peggyjs/chord2mml_chord2ast.pegjs)
- CHORD (peggyjs/chord2mml_chord2ast.pegjs)
- SLASH_CHORD (peggyjs/chord2mml_chord2ast.pegjs)
- ON_CHORD (peggyjs/chord2mml_chord2ast.pegjs)
- SLASH_CHORD_MODE_CHORD_OVER_BASS_NOTE (peggyjs/chord2mml_chord2ast.pegjs)
- SLASH_CHORD_MODE_INVERSION (peggyjs/chord2mml_chord2ast.pegjs)
- SLASH_CHORD_MODE_POLYCHORD (peggyjs/chord2mml_chord2ast.pegjs)
- INLINE_MML (peggyjs/chord2mml_chord2ast.pegjs)
- INLINE_MML_SUB (peggyjs/chord2mml_chord2ast.pegjs)
- INLINE_ABC (peggyjs/chord2mml_chord2ast.pegjs)
- INVERSION_MODE_ROOT_INV (peggyjs/chord2mml_chord2ast.pegjs)
- INVERSION_MODE_1ST_INV (peggyjs/chord2mml_chord2ast.pegjs)
- INVERSION_MODE_2ND_INV (peggyjs/chord2mml_chord2ast.pegjs)
- INVERSION_MODE_3RD_INV (peggyjs/chord2mml_chord2ast.pegjs)
- OPEN_HARMONY_MODE_CLOSE (peggyjs/chord2mml_chord2ast.pegjs)
- OPEN_HARMONY_MODE_DROP2 (peggyjs/chord2mml_chord2ast.pegjs)
- OPEN_HARMONY_MODE_DROP4 (peggyjs/chord2mml_chord2ast.pegjs)
- OPEN_HARMONY_MODE_DROP2AND4 (peggyjs/chord2mml_chord2ast.pegjs)
- BASS_PLAY_MODE_NO_BASS (peggyjs/chord2mml_chord2ast.pegjs)
- BASS_PLAY_MODE_ROOT (peggyjs/chord2mml_chord2ast.pegjs)
- TEMPO (peggyjs/chord2mml_chord2ast.pegjs)
- BAR (peggyjs/chord2mml_chord2ast.pegjs)
- BAR_SLASH (peggyjs/chord2mml_chord2ast.pegjs)
- KEY (peggyjs/chord2mml_chord2ast.pegjs)
- KEY_EVENT (peggyjs/chord2mml_chord2ast.pegjs)
- SCALE (peggyjs/chord2mml_chord2ast.pegjs)
- OCTAVE_UP (peggyjs/chord2mml_chord2ast.pegjs)
- OCTAVE_UP_UPPER (peggyjs/chord2mml_chord2ast.pegjs)
- OCTAVE_UP_LOWER (peggyjs/chord2mml_chord2ast.pegjs)
- OCTAVE_DOWN (peggyjs/chord2mml_chord2ast.pegjs)
- OCTAVE_DOWN_UPPER (peggyjs/chord2mml_chord2ast.pegjs)
- OCTAVE_DOWN_LOWER (peggyjs/chord2mml_chord2ast.pegjs)
- ROOT (peggyjs/chord2mml_chord2ast.pegjs)
- ROOT_CDEFGAB (peggyjs/chord2mml_chord2ast.pegjs)
- ROOT_DEGREE (peggyjs/chord2mml_chord2ast.pegjs)
- SHARP (peggyjs/chord2mml_chord2ast.pegjs)
- FLAT (peggyjs/chord2mml_chord2ast.pegjs)
- CHORD_QUALITY (peggyjs/chord2mml_chord2ast.pegjs)
- MAJ_LONG (peggyjs/chord2mml_chord2ast.pegjs)
- MAJ_SHORT (peggyjs/chord2mml_chord2ast.pegjs)
- MAJ7 (peggyjs/chord2mml_chord2ast.pegjs)
- MAJ9 (peggyjs/chord2mml_chord2ast.pegjs)
- MIN_LONG (peggyjs/chord2mml_chord2ast.pegjs)
- MIN_SHORT (peggyjs/chord2mml_chord2ast.pegjs)
- MIN7 (peggyjs/chord2mml_chord2ast.pegjs)
- SIXTH (peggyjs/chord2mml_chord2ast.pegjs)
- SEVENTH (peggyjs/chord2mml_chord2ast.pegjs)
- NINTH (peggyjs/chord2mml_chord2ast.pegjs)
- ELEVENTH (peggyjs/chord2mml_chord2ast.pegjs)
- THIRTEENTH (peggyjs/chord2mml_chord2ast.pegjs)
- SUS2 (peggyjs/chord2mml_chord2ast.pegjs)
- SUS4 (peggyjs/chord2mml_chord2ast.pegjs)
- SEVENTH_SUS2 (peggyjs/chord2mml_chord2ast.pegjs)
- SEVENTH_SUS4 (peggyjs/chord2mml_chord2ast.pegjs)
- DIM_TRIAD (peggyjs/chord2mml_chord2ast.pegjs)
- AUG (peggyjs/chord2mml_chord2ast.pegjs)
- QUARTAL_HARMONY (peggyjs/chord2mml_chord2ast.pegjs)
- FLATTED_FIFTH (peggyjs/chord2mml_chord2ast.pegjs)
- AUGMENTED_FIFTH (peggyjs/chord2mml_chord2ast.pegjs)
- OMIT_N (peggyjs/chord2mml_chord2ast.pegjs)
- ADD_N (peggyjs/chord2mml_chord2ast.pegjs)
- INVERSION (peggyjs/chord2mml_chord2ast.pegjs)
- OCTAVE_OFFSET (peggyjs/chord2mml_chord2ast.pegjs)
- WHITE_SPACE (peggyjs/chord2mml_chord2ast.pegjs)
- HYPHEN (peggyjs/chord2mml_chord2ast.pegjs)
- CHORD_SEPARATOR (peggyjs/chord2mml_chord2ast.pegjs)
- MIDI_PROGRAM_CHANGE (peggyjs/chord2mml_chord2ast.pegjs)
- PC000 (peggyjs/chord2mml_chord2ast.pegjs)
- PC001 (peggyjs/chord2mml_chord2ast.pegjs)
- PC002 (peggyjs/chord2mml_chord2ast.pegjs)
- PC003 (peggyjs/chord2mml_chord2ast.pegjs)
- PC004 (peggyjs/chord2mml_chord2ast.pegjs)
- PC005 (peggyjs/chord2mml_chord2ast.pegjs)
- PC006 (peggyjs/chord2mml_chord2ast.pegjs)
- PC007 (peggyjs/chord2mml_chord2ast.pegjs)
- PC008 (peggyjs/chord2mml_chord2ast.pegjs)
- PC009 (peggyjs/chord2mml_chord2ast.pegjs)
- PC010 (peggyjs/chord2mml_chord2ast.pegjs)
- PC011 (peggyjs/chord2mml_chord2ast.pegjs)
- PC012 (peggyjs/chord2mml_chord2ast.pegjs)
- PC013 (peggyjs/chord2mml_chord2ast.pegjs)
- PC014 (peggyjs/chord2mml_chord2ast.pegjs)
- PC015 (peggyjs/chord2mml_chord2ast.pegjs)
- PC016 (peggyjs/chord2mml_chord2ast.pegjs)
- PC017 (peggyjs/chord2mml_chord2ast.pegjs)
- PC018 (peggyjs/chord2mml_chord2ast.pegjs)
- PC019 (peggyjs/chord2mml_chord2ast.pegjs)
- PC020 (peggyjs/chord2mml_chord2ast.pegjs)
- PC021 (peggyjs/chord2mml_chord2ast.pegjs)
- PC022 (peggyjs/chord2mml_chord2ast.pegjs)
- PC023 (peggyjs/chord2mml_chord2ast.pegjs)
- PC024 (peggyjs/chord2mml_chord2ast.pegjs)
- PC025 (peggyjs/chord2mml_chord2ast.pegjs)
- PC026 (peggyjs/chord2mml_chord2ast.pegjs)
- PC027 (peggyjs/chord2mml_chord2ast.pegjs)
- PC028 (peggyjs/chord2mml_chord2ast.pegjs)
- PC029 (peggyjs/chord2mml_chord2ast.pegjs)
- PC030 (peggyjs/chord2mml_chord2ast.pegjs)
- PC031 (peggyjs/chord2mml_chord2ast.pegjs)
- PC032 (peggyjs/chord2mml_chord2ast.pegjs)
- PC033 (peggyjs/chord2mml_chord2ast.pegjs)
- PC034 (peggyjs/chord2mml_chord2ast.pegjs)
- PC035 (peggyjs/chord2mml_chord2ast.pegjs)
- PC036 (peggyjs/chord2mml_chord2ast.pegjs)
- PC037 (peggyjs/chord2mml_chord2ast.pegjs)
- PC038 (peggyjs/chord2mml_chord2ast.pegjs)
- PC039 (peggyjs/chord2mml_chord2ast.pegjs)
- PC040 (peggyjs/chord2mml_chord2ast.pegjs)
- PC041 (peggyjs/chord2mml_chord2ast.pegjs)
- PC042 (peggyjs/chord2mml_chord2ast.pegjs)
- PC043 (peggyjs/chord2mml_chord2ast.pegjs)
- PC044 (peggyjs/chord2mml_chord2ast.pegjs)
- PC045 (peggyjs/chord2mml_chord2ast.pegjs)
- PC046 (peggyjs/chord2mml_chord2ast.pegjs)
- PC047 (peggyjs/chord2mml_chord2ast.pegjs)
- PC048 (peggyjs/chord2mml_chord2ast.pegjs)
- PC049 (peggyjs/chord2mml_chord2ast.pegjs)
- PC050 (peggyjs/chord2mml_chord2ast.pegjs)
- PC051 (peggyjs/chord2mml_chord2ast.pegjs)
- PC052 (peggyjs/chord2mml_chord2ast.pegjs)
- PC053 (peggyjs/chord2mml_chord2ast.pegjs)
- PC054 (peggyjs/chord2mml_chord2ast.pegjs)
- PC055 (peggyjs/chord2mml_chord2ast.pegjs)
- PC056 (peggyjs/chord2mml_chord2ast.pegjs)
- PC057 (peggyjs/chord2mml_chord2ast.pegjs)
- PC058 (peggyjs/chord2mml_chord2ast.pegjs)
- PC059 (peggyjs/chord2mml_chord2ast.pegjs)
- PC060 (peggyjs/chord2mml_chord2ast.pegjs)
- PC061 (peggyjs/chord2mml_chord2ast.pegjs)
- PC062 (peggyjs/chord2mml_chord2ast.pegjs)
- PC063 (peggyjs/chord2mml_chord2ast.pegjs)
- PC064 (peggyjs/chord2mml_chord2ast.pegjs)
- PC065 (peggyjs/chord2mml_chord2ast.pegjs)
- PC066 (peggyjs/chord2mml_chord2ast.pegjs)
- PC067 (peggyjs/chord2mml_chord2ast.pegjs)
- PC068 (peggyjs/chord2mml_chord2ast.pegjs)
- PC069 (peggyjs/chord2mml_chord2ast.pegjs)
- PC070 (peggyjs/chord2mml_chord2ast.pegjs)
- PC071 (peggyjs/chord2mml_chord2ast.pegjs)
- PC072 (peggyjs/chord2mml_chord2ast.pegjs)
- PC073 (peggyjs/chord2mml_chord2ast.pegjs)
- PC074 (peggyjs/chord2mml_chord2ast.pegjs)
- PC075 (peggyjs/chord2mml_chord2ast.pegjs)
- PC076 (peggyjs/chord2mml_chord2ast.pegjs)
- PC077 (peggyjs/chord2mml_chord2ast.pegjs)
- PC078 (peggyjs/chord2mml_chord2ast.pegjs)
- PC079 (peggyjs/chord2mml_chord2ast.pegjs)
- PC080 (peggyjs/chord2mml_chord2ast.pegjs)
- PC081 (peggyjs/chord2mml_chord2ast.pegjs)
- PC082 (peggyjs/chord2mml_chord2ast.pegjs)
- PC083 (peggyjs/chord2mml_chord2ast.pegjs)
- PC084 (peggyjs/chord2mml_chord2ast.pegjs)
- PC085 (peggyjs/chord2mml_chord2ast.pegjs)
- PC086 (peggyjs/chord2mml_chord2ast.pegjs)
- PC087 (peggyjs/chord2mml_chord2ast.pegjs)
- PC088 (peggyjs/chord2mml_chord2ast.pegjs)
- PC089 (peggyjs/chord2mml_chord2ast.pegjs)
- PC090 (peggyjs/chord2mml_chord2ast.pegjs)
- PC091 (peggyjs/chord2mml_chord2ast.pegjs)
- PC092 (peggyjs/chord2mml_chord2ast.pegjs)
- PC093 (peggyjs/chord2mml_chord2ast.pegjs)
- PC094 (peggyjs/chord2mml_chord2ast.pegjs)
- PC095 (peggyjs/chord2mml_chord2ast.pegjs)
- PC096 (peggyjs/chord2mml_chord2ast.pegjs)
- PC097 (peggyjs/chord2mml_chord2ast.pegjs)
- PC098 (peggyjs/chord2mml_chord2ast.pegjs)
- PC099 (peggyjs/chord2mml_chord2ast.pegjs)
- PC100 (peggyjs/chord2mml_chord2ast.pegjs)
- PC101 (peggyjs/chord2mml_chord2ast.pegjs)
- PC102 (peggyjs/chord2mml_chord2ast.pegjs)
- PC103 (peggyjs/chord2mml_chord2ast.pegjs)
- PC104 (peggyjs/chord2mml_chord2ast.pegjs)
- PC105 (peggyjs/chord2mml_chord2ast.pegjs)
- PC106 (peggyjs/chord2mml_chord2ast.pegjs)
- PC107 (peggyjs/chord2mml_chord2ast.pegjs)
- PC108 (peggyjs/chord2mml_chord2ast.pegjs)
- PC109 (peggyjs/chord2mml_chord2ast.pegjs)
- PC110 (peggyjs/chord2mml_chord2ast.pegjs)
- PC111 (peggyjs/chord2mml_chord2ast.pegjs)
- PC112 (peggyjs/chord2mml_chord2ast.pegjs)
- PC113 (peggyjs/chord2mml_chord2ast.pegjs)
- PC114 (peggyjs/chord2mml_chord2ast.pegjs)
- PC115 (peggyjs/chord2mml_chord2ast.pegjs)
- PC116 (peggyjs/chord2mml_chord2ast.pegjs)
- PC117 (peggyjs/chord2mml_chord2ast.pegjs)
- PC118 (peggyjs/chord2mml_chord2ast.pegjs)
- PC119 (peggyjs/chord2mml_chord2ast.pegjs)
- PC120 (peggyjs/chord2mml_chord2ast.pegjs)
- PC121 (peggyjs/chord2mml_chord2ast.pegjs)
- PC122 (peggyjs/chord2mml_chord2ast.pegjs)
- PC123 (peggyjs/chord2mml_chord2ast.pegjs)
- PC124 (peggyjs/chord2mml_chord2ast.pegjs)
- PC125 (peggyjs/chord2mml_chord2ast.pegjs)
- PC126 (peggyjs/chord2mml_chord2ast.pegjs)
- PC127 (peggyjs/chord2mml_chord2ast.pegjs)
- while (src/chord2mml_ast2notes.ts)
  - astToNotes ()
    - deleteProperties ()
      - getNotesByChord ()
      - getNotesByChordOverBassNote ()
      - concatLowerAndUpper ()
      - keyShiftUpperNotes ()
      - getNotesByInversionChord ()
      - getNotesByPolychord ()
      - getNotes ()
      - addNote ()
      - inversionAndOpenHarmony ()
      - keyShiftNotes ()
      - inversionByTargetNote ()
      - inversionByCount ()
      - adjustNotesOctave ()
      - drop2 ()
      - drop4 ()
      - drop2and4 ()
  - notesToMml ()
    - create12ionians ()
      - generateIonians ()
      - normalizeArrays ()
      - isSharpByKeyAndScale ()
      - searchIonians ()


## プロジェクト構造（ファイル一覧）
README.ja.md
README.md
dist/chord2mml.js
dist/index.html
googled947dc864c270e07.html
issue-notes/2.md
jest.config.js
package-lock.json
package.json
peggyjs/chord2mml_chord2ast.pegjs
src/chord2mml.ts
src/chord2mml_ast2ast.ts
src/chord2mml_ast2notes.ts
src/chord2mml_notes2mml.ts
test/chord2mml.test.ts
tsconfig.json
webpack.config.js

上記の情報を基に、プロンプトで指定された形式でプロジェクト概要を生成してください。
特に以下の点を重視してください：
- 技術スタックは各カテゴリごとに整理して説明
- ファイル階層ツリーは提供された構造をそのまま使用
- ファイルの説明は各ファイルの実際の内容と機能に基づく
- 関数の説明は実際に検出された関数の役割に基づく
- 関数呼び出し階層は実際の呼び出し関係に基づく


---
Generated at: 2025-12-02 07:07:44 JST
