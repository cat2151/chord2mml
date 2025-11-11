Last updated: 2025-11-11

# Project Overview

## プロジェクト概要
- コード表記（Chord notation）を音楽マクロ言語（MML）に変換するシンプルなJavaScriptライブラリです。
- ブラウザやObsidianプラグインに組み込むことで、コード進行を手軽に音として確認できます。
- 作曲のアイデアスケッチや音楽的な表現の試行を支援することを目的としています。

## 技術スタック
- フロントエンド:
  - **JavaScript**: ブラウザで動作するライブラリ本体として使用されています。デモページもJavaScriptベースで提供されます。
  - **HTML**: ライブラリのデモページを構築するために使用されています。
  - **webpack-dev-server**: 開発中にデモページやライブラリをブラウザでリアルタイムにテスト・確認するための開発用サーバーです。
- 音楽・オーディオ:
  - **Music Macro Language (MML)**: 最終的な出力形式として使用されており、音楽の演奏情報をテキストで記述するための言語です。
- 開発ツール:
  - **TypeScript**: コードの品質と保守性を向上させるために、型安全なJavaScript開発を可能にする言語です。
  - **webpack**: 複数のモジュールを一つのファイルにバンドルし、ブラウザで効率的に利用できるようにするためのモジュールバンドラーです。
  - **ts-loader**: webpackがTypeScriptファイルを処理できるようにするためのローダーです。
  - **peggy**: 独自の文法（Chord notation）を解析するためのパーサージェネレーターです。入力されたコード表記を抽象構文木（AST）に変換するコードを生成します。
  - **@babel/parser**: JavaScriptのコードを解析し、抽象構文木（AST）を生成するために使用されるパーサーです。
- テスト:
  - **jest**: JavaScriptコードのテストを行うための人気の高いテストフレームワークです。
  - **@types/jest**: Jestの型定義を提供し、TypeScript環境での開発を支援します。
  - **ts-jest**: JestがTypeScriptファイルをテストできるようにするためのプリセットです。
  - **jest-environment-jsdom**: Jestテストをブラウザ環境（JSDOM）で実行できるようにする環境です。
- ビルドツール:
  - **webpack**: TypeScriptファイルのコンパイル、依存関係の解決、出力ファイルの最適化を行います。
  - **webpack-cli**: webpackコマンドラインインターフェースを提供します。
  - **peggy**: コード表記の文法定義ファイルからパーサーを生成します。
- 言語機能:
  - **TypeScript**: 静的型付けにより、大規模なプロジェクトでのコードの信頼性と可読性を高めます。
- 自動化・CI/CD:
  - **npm-run-all**: `package.json`スクリプトを並行または逐次実行するためのユーティリティです。
  - **chokidar-cli**: ファイルシステムの変更を監視し、特定のコマンドをトリガーするために使用されます（例: 自動ビルド）。
- 開発標準:
  - (特になし。`tsconfig.json`はTypeScriptの言語設定として利用。)

## ファイル階層ツリー
```
.
├── .gitignore
├── LICENSE
├── README.ja.md
├── README.md
├── _config.yml
├── dist/
│   ├── chord2mml.js
│   └── index.html
├── generated-docs/
├── issue-notes/
│   └── 2.md
├── jest.config.js
├── package-lock.json
├── package.json
├── peggyjs/
│   └── chord2mml_chord2ast.pegjs
├── src/
│   ├── chord2mml.ts
│   ├── chord2mml_ast2ast.ts
│   ├── chord2mml_ast2notes.ts
│   ├── chord2mml_chord2ast.cjs
│   └── chord2mml_notes2mml.ts
├── test/
│   └── chord2mml.test.ts
├── tsconfig.json
└── webpack.config.js
```

## ファイル詳細説明
- **`.gitignore`**: Gitがバージョン管理の対象としないファイルやディレクトリを指定します。
- **`LICENSE`**: プロジェクトのライセンス情報が記載されています。
- **`README.ja.md`**, **`README.md`**: プロジェクトの概要、目的、機能、使い方などを説明するドキュメント（日本語版と英語版）。
- **`_config.yml`**: GitHub Pagesなどの静的サイトジェネレータ（Jekyll）の設定ファイルです。
- **`dist/chord2mml.js`**: TypeScriptソースコードをコンパイルし、Webpackによってバンドル・最適化された、ブラウザで利用可能なJavaScriptライブラリ本体です。
- **`dist/index.html`**: `chord2mml.js`ライブラリの動作を確認できるデモページです。
- **`generated-docs/`**: 自動生成されたドキュメントが格納されることを想定したディレクトリですが、現在は空です。
- **`issue-notes/2.md`**: 開発中の特定の課題や検討事項に関するメモファイルです。
- **`jest.config.js`**: JavaScriptのテストフレームワークJestの設定ファイルです。
- **`package-lock.json`**: `package.json`に記述された依存関係の正確なバージョンとツリー構造を記録し、ビルドの一貫性を保証します。
- **`package.json`**: プロジェクトのメタデータ（名前、バージョン、スクリプト、依存関係など）を定義するファイルです。
- **`peggyjs/chord2mml_chord2ast.pegjs`**: Chord記法（コード進行）を抽象構文木（AST）に変換するためのPEG.js文法定義ファイルです。このファイルに基づいてパーサーが生成されます。
- **`src/chord2mml.ts`**: `chord2mml`ライブラリのエントリポイントとなるファイルです。コード表記からMMLへの一連の変換プロセスを調整します。
- **`src/chord2mml_ast2ast.ts`**: 抽象構文木（AST）を受け取り、その構造をさらに処理・整形するロジックが含まれています。例えば、イベントの長さ情報（拍数）の更新などを行います。
- **`src/chord2mml_ast2notes.ts`**: 抽象構文木（AST）を解析し、個々の音符（MIDIノート番号と長さ）のリストに変換する主要なロジックが含まれています。コードの種類、転回形、オープンハーモニー、キー変更などが考慮されます。
- **`src/chord2mml_chord2ast.cjs`**: `peggyjs/chord2mml_chord2ast.pegjs`ファイルからPEG.jsによって自動生成された、コード進行をASTにパースするJavaScriptモジュールです。
- **`src/chord2mml_notes2mml.ts`**: 個々の音符リストを最終的なMusic Macro Language（MML）形式の文字列に変換するロジックが含まれています。
- **`test/chord2mml.test.ts`**: ライブラリの機能が正しく動作するかを確認するためのテストコードが記述されています。
- **`tsconfig.json`**: TypeScriptコンパイラの設定ファイルで、コンパイルオプションや対象ファイルなどを指定します。
- **`webpack.config.js`**: プロジェクトのビルドプロセスをWebpackでどのように行うかの設定ファイルです。

## 関数詳細説明
- **`CHORDS`, `EVENT`, `CHORD`, `SLASH_CHORD`, `ON_CHORD` など (`peggyjs/chord2mml_chord2ast.pegjs`)**:
  - 役割: これらはPEG.jsの文法ルールであり、Chord記法の入力文字列を解析し、抽象構文木（AST）の特定の構造に変換するためのパターンを定義します。
  - 引数: なし（PEG.jsルールは入力文字列を解析します）
  - 戻り値: 解析された入力に対応するASTノード。
  - 機能: コード進行全体、個々の音楽イベント、コード、スラッシュコード（分数コード）、オンコード、インラインMML、テンポ、キー、オクターブ変更、各種コードクオリティやテンションなどの複雑な音楽表記を正確に認識し、構造化されたデータに変換する役割を担います。
- **`astToAst(ast: any)` (`src/chord2mml_ast2ast.ts`)**:
  - 役割: 抽象構文木（AST）を受け取り、その内容を加工して別のASTを生成します。特に、コードの長さ情報（拍数）を更新する処理が含まれます。
  - 引数: `ast` - コード進行を表す抽象構文木オブジェクト。
  - 戻り値: 加工された抽象構文木オブジェクト。
  - 機能: 入力されたASTを元に、各イベントの拍数を計算し、更新することで、後続の音符生成プロセスが正しい長さの音符を生成できるように準備します。
- **`astToNotes(ast: any)` (`src/chord2mml_ast2notes.ts`)**:
  - 役割: 抽象構文木（AST）から、実際に演奏される個々の音符のリストを生成します。コードの種類、転回形、オープンハーモニー、キー変更、テンポ、MIDIプログラムチェンジなどを考慮して音符を決定する中心的なロジックです。
  - 引数: `ast` - コード進行を表す抽象構文木オブジェクト。
  - 戻り値: 音符オブジェクト（MIDIノート番号、長さなど）の配列。
  - 機能: コードのルート音、クオリティ、テンション、ベース音などに基づいて、MIDIノート番号と長さを計算し、転回形やオープンハーモニーなどの音楽的な表現を適用して最終的な音符データを生成します。
- **`getNotes(event: any, currentKey: any, currentScale: any, prevMidiProgramChange: any)` (`src/chord2mml_ast2notes.ts`)**:
  - 役割: AST内の特定のイベントオブジェクトから、そのイベントに対応する音符のリストを取得します。`astToNotes`内で呼び出され、各イベントの具体的な音符生成を担当します。
  - 引数: `event` - AST内のイベントオブジェクト、`currentKey` - 現在のキー、`currentScale` - 現在のスケール、`prevMidiProgramChange` - 直前のMIDIプログラムチェンジ情報。
  - 戻り値: 処理された音符（ノート）の配列。
  - 機能: コード、テンポ、キー変更、MIDIプログラムチェンジなどのイベントタイプに応じて、適切な音符生成ロジックを呼び出します。
- **`getNotesByChord(root: any, quality: any, tension: any, add: any, omit: any)` (`src/chord2mml_ast2notes.ts`)**:
  - 役割: ルート音、コードクオリティ、テンション、追加音、省略音に基づいて、そのコードに含まれる音符のセットを取得します。
  - 引数: `root` - ルート音、`quality` - コードの質（メジャー、マイナーなど）、`tension` - テンションノート、`add` - 追加音、`omit` - 省略音。
  - 戻り値: コードを構成する音符の配列。
  - 機能: 標準的な和音構成ルールに従って、指定されたコードの音符を生成します。
- **`notesToMml(notes: any)` (`src/chord2mml_notes2mml.ts`)**:
  - 役割: 音符リストをMusic Macro Language（MML）形式の文字列に変換します。これが最終的な出力となります。
  - 引数: `notes` - 音符オブジェクトの配列。
  - 戻り値: MML形式の文字列。
  - 機能: 音符のMIDIノート番号、長さ、およびキー情報やシャープ/フラットの指定などをMMLコマンドに変換し、演奏可能なMMLシーケンスを生成します。
- **`create12ionians()` (`src/chord2mml_notes2mml.ts`)**:
  - 役割: 12種類のキーに対応するイオニアンスケール（長音階）の定義を生成します。キー変更時の音符調整に利用されます。
  - 引数: なし。
  - 戻り値: 12のキーに対応するイオニアンスケールの配列。
  - 機能: 音楽理論に基づき、各キーの長音階を構成する音符の情報を準備します。
- **`generateIonians(key: any)` (`src/chord2mml_notes2mml.ts`)**:
  - 役割: 指定されたキーのイオニアンスケールを具体的に生成します。
  - 引数: `key` - スケールのルートとなるキー（例: 'C', 'C#'）。
  - 戻り値: 指定キーのイオニアンスケールの音符の配列。
  - 機能: あるキーの長音階を構成する音符を計算し、配列として返します。
- **`r, e, n, s, u, o, uf, of, af, cf, lf, hf, bf, ff, mf, vf, Af, df, Cf, wf, pf, Lf, gf, yf, kf, Of, Sf, Rf, a, c, i, l, h, b, f, m, v, A, d, C, w` (dist/chord2mml.js)**:
  - 役割: これらはWebpackによってバンドル・ミニファイされたJavaScriptファイルに含まれる内部関数です。元のTypeScriptソースコードの複数の関数が、配布用に最適化される過程で短縮された名前になっています。
  - 引数: なし、または最適化された形式の引数。
  - 戻り値: なし、または最適化された形式の戻り値。
  - 機能: ライブラリの主要なロジックやヘルパー関数が、実行効率とファイルサイズ最適化のために難読化・統合されたものです。具体的な役割は元のTypeScriptファイルで定義されている関数群に対応します。

## 関数呼び出し階層ツリー
```
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

---
Generated at: 2025-11-11 09:27:19 JST
