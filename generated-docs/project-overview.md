Last updated: 2025-12-02

# Project Overview

## プロジェクト概要
- コード進行（Chord notation）をMML（Music Macro Language）に変換するJavaScriptライブラリです。
- テキスト形式のコード入力を解析し、音楽再生可能なMML出力を生成します。
- ブラウザやObsidianプラグインに組み込むことで、手軽にコード進行を試聴できます。

## 技術スタック
- フロントエンド: 
  - **JavaScript**: ライブラリの主要言語であり、ブラウザでの動作を想定しています。
  - **HTML**: デモページ（`dist/index.html`）の構造を定義しています。
  - **Webpack**: JavaScriptモジュールのバンドルと最適化を行い、ブラウザで利用可能な形式に変換します。
- 音楽・オーディオ: 
  - **Chord notation**: コード進行の表記法（例: Cmaj7, G7sus4）を解析します。
  - **Music Macro Language (MML)**: 音楽をテキストで記述するための言語で、最終的な出力形式です。
  - **MIDI Program Change (PC000-PC127)**: MML生成時にMIDI音源のプログラムチェンジを指定する機能が含まれます。
- 開発ツール: 
  - **TypeScript**: 静的型付けを導入し、大規模なプロジェクトでの保守性とコード品質を向上させています。
  - **Peggy.js**: コード進行テキストを抽象構文木（AST）に変換するためのパーサジェネレータです。
  - **@babel/parser**: JavaScriptのコード解析（AST生成）を支援するツールです。
  - **Webpack CLI**: Webpackのコマンドラインインターフェースです。
  - **Webpack Dev Server**: 開発中にアプリケーションを高速でテストするためのローカルサーバーを提供します。
  - **Chokidar-CLI**: ファイルの変更を監視し、自動でタスクを実行するために使用されます。
- テスト: 
  - **Jest**: JavaScriptプロジェクト向けの高速で機能豊富なテストフレームワークです。
  - **@types/jest**: Jestの型定義を提供し、TypeScript環境での開発を支援します。
  - **ts-jest**: JestでTypeScriptのテストを実行するためのプリセットです。
  - **jest-environment-jsdom**: Jestテストをブラウザ環境（JSDOM）で実行します。
- ビルドツール: 
  - **Peggy**: コード進行パーサの生成に使用されます。
  - **Webpack**: ソースコードをブラウザ向けにバンドルします。
  - **ts-loader**: WebpackがTypeScriptファイルをJavaScriptにトランスパイルするためのローダーです。
- 言語機能: 
  - **TypeScript**: 型安全なコード記述を可能にし、開発効率と信頼性を高めます。
  - **JavaScript**: ライブラリの実行環境となる基盤言語です。
- 自動化・CI/CD: 
  - **npm-run-all**: 複数のnpmスクリプトを並列または連続で実行するためのツールです。
  - **GitHub Pages**: プロジェクトのデモサイト（`dist/index.html`）をホスティングするために利用されます。
- 開発標準: 
  - **tsconfig.json**: TypeScriptコンパイラの設定を定義し、プロジェクト全体のコード品質と一貫性を保証します。
  - **package.json**: プロジェクトの依存関係、スクリプト、メタデータを管理し、開発標準の基盤となります。

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
├── googled947dc864c270e07.html
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
-   `.gitignore`: Gitのバージョン管理から除外するファイルやディレクトリを指定します。
-   `LICENSE`: プロジェクトのライセンス情報（通常はMITライセンスなど）を記載しています。
-   `README.ja.md`, `README.md`: プロジェクトの概要、機能、デモ、関連プロジェクト、開発方針などを説明するドキュメントファイルです。日本語版と英語版があります。
-   `_config.yml`: GitHub Pagesでデモサイトをホスティングする際の設定ファイル（Jekyll設定）です。
-   `dist/`: ビルド成果物が格納されるディレクトリです。
    -   `dist/chord2mml.js`: TypeScriptとPeggy.jsで記述されたコードがバンドル・トランスパイルされた、ブラウザで実行可能なJavaScriptライブラリ本体です。
    -   `dist/index.html`: プロジェクトのデモページです。このページでは、生成された`chord2mml.js`ライブラリを使用して、コード進行をMMLに変換し試聴できるシンプルなインターフェースを提供します。
-   `generated-docs/`: ドキュメント生成ツールによって生成されたドキュメントが格納されるディレクトリですが、現状は空であるか、使用されていません。
-   `googled947dc864c270e07.html`: Googleサイト認証のために使用されるファイルです。
-   `issue-notes/2.md`: 特定のIssue（問題）に関する開発メモや詳細な情報が記述されています。
-   `jest.config.js`: JavaScriptテストフレームワークであるJestの設定ファイルです。テスト環境や実行オプションが定義されています。
-   `package-lock.json`: `package.json`で定義された依存関係の正確なバージョンと依存ツリーを記録するファイルです。これにより、開発環境間での依存関係の一貫性が保たれます。
-   `package.json`: プロジェクトのメタデータ（名前、バージョン、説明など）、実行スクリプト、開発時および実行時の依存関係を定義するファイルです。
-   `peggyjs/`: Peggy.jsのパーサ定義ファイルが格納されるディレクトリです。
    -   `peggyjs/chord2mml_chord2ast.pegjs`: コード進行の文字列を抽象構文木（AST）にパースするための文法ルールを定義したPeggy.jsファイルです。コードのルート、品質、テンポ、小節などの音楽的要素を詳細に解析します。
-   `src/`: プロジェクトのソースコードが格納されるディレクトリです。
    -   `src/chord2mml.ts`: ライブラリのエントリーポイントとなるTypeScriptファイルです。コード進行の文字列を受け取り、それをMML文字列に変換するための一連の処理（パース、AST変換、ノート生成、MML生成）をオーケストレーションします。
    -   `src/chord2mml_ast2ast.ts`: 抽象構文木（AST）を別のASTに変換する処理を定義するTypeScriptファイルです。主にASTの正規化や、小節情報からMMLの音長への変換などの中間処理を行います。
    -   `src/chord2mml_ast2notes.ts`: 抽象構文木（AST）から、具体的な音符（ノート）の情報を生成する処理を定義するTypeScriptファイルです。コードの種類、転回形、オープンハーモニーなどを考慮して、MMLに変換可能な音符リストを作成します。
    -   `src/chord2mml_chord2ast.cjs`: `peggyjs/chord2mml_chord2ast.pegjs`から生成された、コード文字列をASTに変換するJavaScriptパーサモジュールです。`src/chord2mml.ts`から利用されます。
    -   `src/chord2mml_notes2mml.ts`: 生成された音符情報から、最終的なMML文字列を構築する処理を定義するTypeScriptファイルです。イオニアンスケールに基づいたシャープ/フラットの調整や、MMLフォーマットへの変換ルールを実装しています。
-   `test/`: プロジェクトのテストコードが格納されるディレクトリです。
    -   `test/chord2mml.test.ts`: プロジェクトの主要な変換ロジック（コード→AST、AST→ノート、ノート→MML）に対する単体テストおよび統合テストを記述したTypeScriptファイルです。
-   `tsconfig.json`: TypeScriptコンパイラの設定ファイルです。コンパイルオプション、ターゲット、モジュール解決などを定義し、TypeScriptコードのビルド方法を管理します。
-   `webpack.config.js`: Webpackバンドラーの設定ファイルです。エントリポイント、出力ディレクトリ、ローダー、プラグインなどを定義し、プロジェクトをブラウザ向けにビルドする方法を指定します。

## 関数詳細説明

**`peggyjs/chord2mml_chord2ast.pegjs` (パーサ定義ルール)**
-   `CHORDS`: コード進行全体をパースする最上位ルール。複数のコードやイベントを処理します。
-   `EVENT`: コード、テンポ変更、小節線など、個別の音楽イベントをパースするルール。
-   `CHORD`: 基本的なコード表記（例: `Cmaj7`）を解析し、ASTノードを生成します。
-   `SLASH_CHORD`: スラッシュコード表記（例: `C/G`）をパースするルール。
-   `ON_CHORD`: オンコードの基本形（例: `C on G`）をパースするルール。
-   `SLASH_CHORD_MODE_CHORD_OVER_BASS_NOTE`: スラッシュコードがコードとベース音の関係を示すモードを識別。
-   `SLASH_CHORD_MODE_INVERSION`: スラッシュコードが転回形を示すモードを識別。
-   `SLASH_CHORD_MODE_POLYCHORD`: スラッシュコードがポリコードを示すモードを識別。
-   `INLINE_MML`, `INLINE_MML_SUB`: コード進行中に直接MMLを埋め込む表記をパースするルール。
-   `INLINE_ABC`: コード進行中に直接ABC記法を埋め込む表記をパースするルール。
-   `INVERSION_MODE_ROOT_INV`, `INVERSION_MODE_1ST_INV`, `INVERSION_MODE_2ND_INV`, `INVERSION_MODE_3RD_INV`: コードの転回形（ルート、第1、第2、第3転回）を指定する表記をパース。
-   `OPEN_HARMONY_MODE_CLOSE`, `OPEN_HARMONY_MODE_DROP2`, `OPEN_HARMONY_MODE_DROP4`, `OPEN_HARMONY_MODE_DROP2AND4`: オープンハーモニーの種類（クローズ、ドロップ2、ドロップ4、ドロップ2&4）を指定する表記をパース。
-   `BASS_PLAY_MODE_NO_BASS`, `BASS_PLAY_MODE_ROOT`: ベース音の演奏方法を指定する表記をパース。
-   `TEMPO`: テンポ変更表記（例: `T=120`）をパースするルール。
-   `BAR`, `BAR_SLASH`: 小節線（`|`）やスラッシュ付き小節線（`|/`）をパースするルール。
-   `KEY`, `KEY_EVENT`: キー変更表記（例: `K=C`）をパースするルール。
-   `SCALE`: 使用するスケール（例: `ionian`）をパースするルール。
-   `OCTAVE_UP`, `OCTAVE_UP_UPPER`, `OCTAVE_UP_LOWER`: オクターブを上げる表記（例: `^`, `^^`）をパースするルール。
-   `OCTAVE_DOWN`, `OCTAVE_DOWN_UPPER`, `OCTAVE_DOWN_LOWER`: オクターブを下げる表記（例: `v`, `vv`）をパースするルール。
-   `ROOT`, `ROOT_CDEFGAB`, `ROOT_DEGREE`: コードのルート音（例: `C`, `G`）をパースするルール。
-   `SHARP`, `FLAT`: シャープ（`#`）やフラット（`b`）記号をパースするルール。
-   `CHORD_QUALITY`: コードの品質（例: `maj`, `min`, `dim`）をパースするルール。
-   `MAJ_LONG`, `MAJ_SHORT`, `MAJ7`, `MAJ9`, `MIN_LONG`, `MIN_SHORT`, `MIN7`, `SIXTH`, `SEVENTH`, `NINTH`, `ELEVENTH`, `THIRTEENTH`, `SUS2`, `SUS4`, `SEVENTH_SUS2`, `SEVENTH_SUS4`, `DIM_TRIAD`, `AUG`, `QUARTAL_HARMONY`, `FLATTED_FIFTH`, `AUGMENTED_FIFTH`, `OMIT_N`, `ADD_N`, `INVERSION`: 個々のコードの品質、テンション、修飾（例: `sus4`, `omit3`, `add9`）をパースするルール。
-   `OCTAVE_OFFSET`: オクターブオフセットの指定をパースするルール。
-   `WHITE_SPACE`, `HYPHEN`, `CHORD_SEPARATOR`: スペース、ハイフン、コード区切り文字をパースするルール。
-   `MIDI_PROGRAM_CHANGE`, `PC000` ~ `PC127`: MIDIプログラムチェンジ番号（例: `PC001`）をパースするルール。

**`src/chord2mml.ts`**
-   (匿名関数):
    -   役割: コード進行文字列をMML文字列に変換するライブラリのメインエントリーポイント。
    -   引数: `chordString: string` - 変換対象のコード進行テキスト。
    -   戻り値: `string` - 生成されたMML文字列。
    -   機能: `chord2mml_chord2ast.cjs`でコードをASTにパースし、`chord2mml_ast2ast.ts`でASTを変換、`chord2mml_ast2notes.ts`で具体的な音符リストを生成し、最後に`chord2mml_notes2mml.ts`でMML文字列を生成します。

**`src/chord2mml_ast2ast.ts`**
-   `astToAst`:
    -   役割: 抽象構文木（AST）を変換し、MML生成に必要な情報を追加・更新します。
    -   引数: `ast: AstType` - 入力となる抽象構文木。
    -   戻り値: `AstType` - 変換および情報が追加されたAST。
    -   機能: 主に小節（バー）の情報を基にMMLでの音長を計算し、AST内の各音楽イベントに適用する処理を行います。
-   `bar2noteLength`:
    -   役割: 小節数からMMLで表現される音長（例: `l4`の`4`）を計算します。
    -   引数: `bar: number` - 小節の長さを示す数値。
    -   戻り値: `number` - 計算されたMML音長。
-   `updateAstNoteLength`:
    -   役割: AST内の各イベントに、計算されたMMLの音長情報を追加・更新します。
    -   引数: `events: EventType[]` - ASTイベントの配列。
    -   戻り値: `EventType[]` - 音長情報が更新されたイベントの配列。

**`src/chord2mml_ast2notes.ts`**
-   `astToNotes`:
    -   役割: 抽象構文木（AST）から、MMLに変換可能な具体的な音符（ノート）の配列を生成します。
    -   引数: `ast: AstType` - 入力となる抽象構文木。
    -   戻り値: `Note[]` - 生成されたノートの配列。
    -   機能: ASTの各イベントを詳細に解析し、コードの種類、転回形、オープンハーモニーなどの複雑な音楽的要素を考慮して音符リストを作成します。
-   `deleteProperties`:
    -   役割: 指定されたオブジェクトから特定のプロパティを削除します。
    -   引数: `obj: object` - 対象オブジェクト, `props: string[]` - 削除するプロパティ名の配列。
    -   戻り値: `object` - プロパティ削除後のオブジェクト。
-   `getNotesByChord`:
    -   役割: 基本的なコード（例: `Cmaj7`）から構成音のノートリストを生成します。
    -   引数: `event: ChordEventType` - コードイベントのデータ。
    -   戻り値: `Note[]` - コードを構成する音符の配列。
-   `getNotesByChordOverBassNote`:
    -   役割: コード/ベース音形式（例: `C/G`）のノートリストを生成します。
    -   引数: `event: ChordOverBassNoteEventType` - コードオンベースイベントのデータ。
    -   戻り値: `Note[]` - 構成音のノート配列。
-   `concatLowerAndUpper`:
    -   役割: 低音パートと高音パートのノートリストを結合します。
    -   引数: `lowerNotes: Note[]` - 低音のノート配列, `upperNotes: Note[]` - 高音のノート配列。
    -   戻り値: `Note[]` - 結合されたノート配列。
-   `keyShiftUpperNotes`:
    -   役割: 高音パートのノートを指定されたキーに基づいてシフト（移調）します。
    -   引数: `upperNotes: Note[]` - 高音のノート配列, `key: KeyType` - 移調の基準となるキー。
    -   戻り値: `Note[]` - シフト後のノート配列。
-   `getNotesByInversionChord`:
    -   役割: 転回形コード（例: `Cmaj7/E`）のノートリストを生成します。
    -   引数: `event: InversionChordEventType` - 転回形コードイベントのデータ。
    -   戻り値: `Note[]` - 構成音のノート配列。
-   `getNotesByPolychord`:
    -   役割: ポリコード（例: `C/Gmaj7`）のノートリストを生成します。
    -   引数: `event: PolychordEventType` - ポリコードイベントのデータ。
    -   戻り値: `Note[]` - 構成音のノート配列。
-   `getNotes`:
    -   役割: コードのルート音と品質情報から、基本的なノートの度数リストを生成します。
    -   引数: `root: string` - ルート音名, `quality: ChordQualityType` - コードの品質。
    -   戻り値: `number[]` - コードを構成する度数の配列。
-   `addNote`:
    -   役割: 指定された度数とルート音に基づいてノートを生成し、リストに追加します。
    -   引数: `notes: Note[]` - ノートの配列, `root: number` - ルート音のMIDI番号, `degree: number` - コード内の度数, `isBassNote: boolean` - ベース音であるかのフラグ。
    -   戻り値: `void` (notes配列が直接更新されます)。
-   `inversionAndOpenHarmony`:
    -   役割: ノートリストに対して転回形やオープンハーモニーのルールを適用します。
    -   引数: `notes: Note[]` - 対象ノート配列, `inversionMode: InversionModeType` - 転回形モード, `openHarmonyMode: OpenHarmonyModeType` - オープンハーモニーモード, `targetNote: Note` - 転回形の基準となるノート。
    -   戻り値: `Note[]` - 適用後のノート配列。
-   `keyShiftNotes`:
    -   役割: ノートリストを指定されたキーに基づいてシフト（移調）します。
    -   引数: `notes: Note[]` - 対象ノート配列, `key: KeyType` - 移調の基準となるキー。
    -   戻り値: `Note[]` - シフト後のノート配列。
-   `inversionByTargetNote`:
    -   役割: 指定されたターゲットノートに基づいてノートを転回させます。
    -   引数: `notes: Note[]` - 対象ノート配列, `targetNote: Note` - 転回形の基準となるノート。
    -   戻り値: `Note[]` - 転回後のノート配列。
-   `inversionByCount`:
    -   役割: 指定された回数だけノートを転回させます。
    -   引数: `notes: Note[]` - 対象ノート配列, `count: number` - 転回回数。
    -   戻り値: `Note[]` - 転回後のノート配列。
-   `adjustNotesOctave`:
    -   役割: ノートのオクターブを調整し、MMLに適した範囲に収めます。
    -   引数: `notes: Note[]` - 対象ノート配列。
    -   戻り値: `Note[]` - 調整後のノート配列。
-   `drop2`:
    -   役割: ドロップ2ボイシングをノートリストに適用します。
    -   引数: `notes: Note[]` - 対象ノート配列。
    -   戻り値: `Note[]` - 適用後のノート配列。
-   `drop4`:
    -   役割: ドロップ4ボイシングをノートリストに適用します。
    -   引数: `notes: Note[]` - 対象ノート配列。
    -   戻り値: `Note[]` - 適用後のノート配列。
-   `drop2and4`:
    -   役割: ドロップ2&4ボイシングをノートリストに適用します。
    -   引数: `notes: Note[]` - 対象ノート配列。
    -   戻り値: `Note[]` - 適用後のノート配列。

**`src/chord2mml_notes2mml.ts`**
-   `notesToMml`:
    -   役割: ノートの配列からMML文字列を生成します。
    -   引数: `notes: Note[]` - MMLに変換するノートの配列。
    -   戻り値: `string` - 生成されたMML文字列。
    -   機能: ノート情報をMMLの音符、オクターブ、音長、リズムに変換します。キーやスケールに基づいたシャープ/フラットの適切な表現も行います。
-   `create12ionians`:
    -   役割: 12種類のルート音それぞれに対するイオニアンスケール（長音階）を生成し、保持します。
    -   引数: なし。
    -   戻り値: `IoniansType` - 12のイオニアンスケールを格納したオブジェクト。
-   `generateIonians`:
    -   役割: 指定された開始ノートとオクターブに基づいて、イオニアンスケール内のノートを生成します。
    -   引数: `startNote: number` - スケールの開始MIDIノート番号, `octave: number` - 開始オクターブ。
    -   戻り値: `number[]` - イオニアンスケールを構成するノートのMIDI番号配列。
-   `normalizeArrays`:
    -   役割: 複数の配列を特定の基準に基づいて正規化します。（詳細な機能は文脈による）
    -   引数: `arr1: number[]`, `arr2: number[]` - 正規化する配列。
    -   戻り値: `number[][]` - 正規化された2つの配列。
-   `isSharpByKeyAndScale`:
    -   役割: 指定されたキーとスケールにおいて、特定のノートがシャープ（`#`）として表現されるべきかを判定します。
    -   引数: `note: number` - MIDIノート番号, `key: KeyType` - 現在のキー, `scale: ScaleType` - 現在のスケール。
    -   戻り値: `boolean` - シャープとして表現されるべきなら`true`、そうでなければ`false`。
-   `searchIonians`:
    -   役割: 指定されたノートがどのイオニアンスケールに属するかを検索し、そのノートに関する情報を提供します。
    -   引数: `note: number` - 検索対象のMIDIノート番号。
    -   戻り値: `NoteInfoType` - ノート情報オブジェクト（ルート、オクターブ、スケール内の位置など）。

## 関数呼び出し階層ツリー
```
- chord2mml.ts (メイン処理フロー)
  - パーサ生成物 (src/chord2mml_chord2ast.cjs)
    - CHORDS (peggyjs/chord2mml_chord2ast.pegjs)
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
    - PC000 ... PC127 (peggyjs/chord2mml_chord2ast.pegjs)
  - astToAst (src/chord2mml_ast2ast.ts)
    - updateAstNoteLength (src/chord2mml_ast2ast.ts)
      - bar2noteLength (src/chord2mml_ast2ast.ts)
  - astToNotes (src/chord2mml_ast2notes.ts)
    - deleteProperties (src/chord2mml_ast2notes.ts)
    - getNotesByChord (src/chord2mml_ast2notes.ts)
    - getNotesByChordOverBassNote (src/chord2mml_ast2notes.ts)
    - concatLowerAndUpper (src/chord2mml_ast2notes.ts)
    - keyShiftUpperNotes (src/chord2mml_ast2notes.ts)
    - getNotesByInversionChord (src/chord2mml_ast2notes.ts)
    - getNotesByPolychord (src/chord2mml_ast2notes.ts)
    - getNotes (src/chord2mml_ast2notes.ts)
    - addNote (src/chord2mml_ast2notes.ts)
    - inversionAndOpenHarmony (src/chord2mml_ast2notes.ts)
      - inversionByTargetNote (src/chord2mml_ast2notes.ts)
      - inversionByCount (src/chord2mml_ast2notes.ts)
      - adjustNotesOctave (src/chord2mml_ast2notes.ts)
      - drop2 (src/chord2mml_ast2notes.ts)
      - drop4 (src/chord2mml_ast2notes.ts)
      - drop2and4 (src/chord2mml_ast2notes.ts)
    - keyShiftNotes (src/chord2mml_ast2notes.ts)
    - adjustNotesOctave (src/chord2mml_ast2notes.ts)
  - notesToMml (src/chord2mml_notes2mml.ts)
    - create12ionians (src/chord2mml_notes2mml.ts)
      - generateIonians (src/chord2mml_notes2mml.ts)
    - normalizeArrays (src/chord2mml_notes2mml.ts)
    - isSharpByKeyAndScale (src/chord2mml_notes2mml.ts)
    - searchIonians (src/chord2mml_notes2mml.ts)

---
Generated at: 2025-12-02 07:08:48 JST
