Last updated: 2025-12-03

# Project Overview

## プロジェクト概要
- コード進行の表記（Chord notation）をMML（Music Macro Language）に変換するシンプルなJavaScriptライブラリです。
- ブラウザやObsidianなどの環境で、コード進行を手軽に音として再生できるようにすることを目的としています。
- 概念実証とシンプルさを優先し、作曲のアイデアスケッチに役立つツールを提供します。

## 技術スタック
- フロントエンド:
    -   **JavaScript**: ライブラリの主要な実装言語であり、ブラウザ環境での動作を想定しています。
    -   **HTML**: デモページの構築に用いられています (`dist/index.html`)。
    -   **webpack-dev-server**: 開発中にデモページをホストし、ライブリロード機能を提供します。
- 音楽・オーディオ:
    -   **MML (Music Macro Language)**: コード進行の最終出力形式として使用され、音楽再生エンジンで解釈されます。
- 開発ツール:
    -   **TypeScript**: プロジェクトのソースコードはTypeScriptで記述されており、型安全な開発を支援します。
    -   **Peggy.js**: Chord表記の解析（パーシング）を行うためのパーサージェネレータです。文法定義ファイル (`.pegjs`) からパーサーコードを生成します。
    -   **webpack**: JavaScriptモジュールをバンドルし、ブラウザで実行可能な形に変換するモジュールバンドラーです。
    -   **webpack-cli**: webpackコマンドラインインターフェースを提供します。
    -   **ts-loader**: webpackがTypeScriptファイルを処理するためのローダーです。
    -   **@babel/parser**: JavaScriptのコードを解析し、抽象構文木 (AST) を生成するためのパーサーライブラリです。
    -   **npm-run-all**: 複数のnpmスクリプトを並列または逐次実行するためのユーティリティです。
    -   **chokidar-cli**: ファイルシステムの変更を監視し、特定のコマンドを実行するためのツールです。
- テスト:
    -   **Jest**: JavaScriptのテストフレームワークであり、コードの単体テストや統合テストを実行します。
    -   **ts-jest**: JestがTypeScriptファイルをテストできるようにするためのプリセットです。
    -   **jest-environment-jsdom**: Jestのテスト環境でDOM (Document Object Model) のシミュレーションを提供します。
    -   **@types/jest**: Jestの型定義を提供し、TypeScript環境での開発を支援します。
- ビルドツール:
    -   **webpack**: モジュールバンドル。
    -   **Peggy.js**: パーサー生成。
- 言語機能:
    -   **TypeScript**: 静的型付けと最新のJavaScript機能を利用して、堅牢なコードを記述します。
- 自動化・CI/CD:
    -   **npm-run-all**: 開発・ビルドスクリプトの連携に利用されます。
- 開発標準:
    -   特に明示的なコード品質ツールやリンターは記載されていませんが、TypeScriptの採用によりコードの品質が一定に保たれています。

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
│   ├── 2.md
│   └── 4.md
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
-   **`.gitignore`**: Gitによるバージョン管理から除外するファイルやディレクトリを指定します。
-   **`LICENSE`**: プロジェクトのライセンス情報（著作権や利用条件）を記載したファイルです。
-   **`README.ja.md`**: プロジェクトの日本語での概要、使い方、機能などを説明するMarkdownファイルです。
-   **`README.md`**: プロジェクトの英語での概要、使い方、機能などを説明するMarkdownファイルです。
-   **`_config.yml`**: GitHub Pagesのビルド設定に使用される可能性のある設定ファイルです。
-   **`dist/`**: ビルドされた成果物が格納されるディレクトリです。
    -   **`dist/chord2mml.js`**: TypeScriptソースコードがwebpackによってバンドル・トランスパイルされた、実行可能なJavaScriptライブラリ本体です。
    -   **`dist/index.html`**: ライブラリのデモページとして機能するHTMLファイルです。ブラウザでChord to MML変換を試すことができます。
-   **`generated-docs/`**: 自動生成されたドキュメントなどが格納される可能性のあるディレクトリです（現在は空）。
-   **`googled947dc864c270e07.html`**: Googleサイト認証用のファイルである可能性があります。
-   **`issue-notes/`**: 開発中のメモや特定の問題に関する考察が記録されているMarkdownファイルのディレクトリです。
-   **`jest.config.js`**: Jestテストフレームワークの設定ファイルです。
-   **`package-lock.json`**: `package.json`で定義された依存関係の正確なバージョンと依存ツリーを記録します。
-   **`package.json`**: プロジェクトのメタデータ（名前、バージョン、説明、スクリプト、依存関係など）を定義します。
-   **`peggyjs/`**: Peggy.jsパーサージェネレータの関連ファイルが格納されるディレクトリです。
    -   **`peggyjs/chord2mml_chord2ast.pegjs`**: Chord表記を抽象構文木 (AST) に変換するための文法ルールを定義したPeggy.jsファイルです。
-   **`src/`**: プロジェクトの主要なTypeScriptソースコードが格納されるディレクトリです。
    -   **`src/chord2mml.ts`**: ライブラリのエントリポイントとなるファイルです。Chord表記の入力からMML出力までの変換フロー全体を統合します。
    -   **`src/chord2mml_ast2ast.ts`**: 抽象構文木 (AST) を別のASTに変換する処理を担います。例えば、コードの長さやテンポ情報に基づいて音符の長さを計算・調整します。
    -   **`src/chord2mml_ast2notes.ts`**: ASTから具体的な音符情報（MIDIノート番号や長さなど）のリストを生成する処理を担います。和音の展開、転回、オープンハーモニーなどの複雑な音楽理論的変換を行います。
    -   **`src/chord2mml_chord2ast.cjs`**: `peggyjs/chord2mml_chord2ast.pegjs` から生成されたJavaScriptパーサーのコードです。
    -   **`src/chord2mml_notes2mml.ts`**: 音符情報のリストからMML文字列を最終的に生成する処理を担います。キーやスケールに基づいたシャープ/フラットの判定なども行います。
-   **`test/`**: テストコードが格納されるディレクトリです。
    -   **`test/chord2mml.test.ts`**: `chord2mml`ライブラリの機能を確認するためのテストコードです。
-   **`tsconfig.json`**: TypeScriptコンパイラの設定ファイルです。
-   **`webpack.config.js`**: webpackバンドラーの設定ファイルです。

## 関数詳細説明
-   **`chord2mml` (src/chord2mml.ts)**:
    -   **役割**: プロジェクトのメインエントリポイントとなる関数。Chord表記文字列を受け取り、MML文字列に変換する一連の処理を調整します。
    -   **引数**: `chordNotationString` (string) - Chord表記の文字列。
    -   **戻り値**: `mmlString` (string) - 生成されたMML文字列。
    -   **機能**: 以下の変換ステージ（AST生成、AST変換、ノート生成、MML生成）を順番に呼び出し、最終的なMMLを生成します。

-   **`parse` (src/chord2mml_chord2ast.cjs より生成)**:
    -   **役割**: Peggy.jsによって生成されたパーサーのメイン関数。Chord表記文字列を解析し、抽象構文木 (AST) を構築します。
    -   **引数**: `input` (string) - Chord表記の文字列。
    -   **戻り値**: `ast` (object) - 解析されたChord表記を表す抽象構文木。
    -   **機能**: 定義された文法ルール（`peggyjs/chord2mml_chord2ast.pegjs`）に基づいて、入力文字列を構造化されたデータ（AST）に変換します。

-   **`astToAst` (src/chord2mml_ast2ast.ts)**:
    -   **役割**: 抽象構文木 (AST) を受け取り、さらに加工されたASTを生成します。主に音符の長さに関する情報を調整します。
    -   **引数**: `inputAst` (object) - 変換前の抽象構文木。
    -   **戻り値**: `outputAst` (object) - 音符の長さ情報が更新された抽象構文木。
    -   **機能**: `bar2noteLength` や `updateAstNoteLength` などの補助関数を使用して、入力されたASTの各イベントに適切な音符の長さを割り当てます。

-   **`bar2noteLength` (src/chord2mml_ast2ast.ts)**:
    -   **役割**: バー（小節）の構造に基づいて音符の基本的な長さを計算します。
    -   **引数**: `barInfo` (object) - 小節に関する情報。
    -   **戻り値**: `noteLength` (number) - 計算された音符の長さ。
    -   **機能**: 小節のタイプ（例：`|`や`/`）を解析し、MMLで表現できる適切な音符の長さを決定します。

-   **`updateAstNoteLength` (src/chord2mml_ast2ast.ts)**:
    -   **役割**: AST内の各イベントに対して、小節情報に基づいて音符の長さを更新します。
    -   **引数**: `ast` (object) - 処理対象の抽象構文木。
    -   **戻り値**: `updatedAst` (object) - 音符の長さが更新された抽象構文木。
    -   **機能**: ASTを走査し、各イベントが属する小節のコンテキストに基づいて音符の長さを設定します。

-   **`astToNotes` (src/chord2mml_ast2notes.ts)**:
    -   **役割**: 抽象構文木 (AST) を受け取り、個々のノート（音符）の具体的な情報（キー、オクターブ、長さなど）のリストに変換します。
    -   **引数**: `inputAst` (object) - 変換対象の抽象構文木。
    -   **戻り値**: `notesList` (array) - 各ノートの詳細情報を含むオブジェクトの配列。
    -   **機能**: コードの種類（メジャー、マイナー、セブンスなど）、転回形、オンコード、テンポ、キーなどの情報に基づいて、実際に鳴らすべき音符の集合を生成します。`getNotesByChord`、`inversionAndOpenHarmony`などの多くの補助関数を内部で呼び出します。

-   **`deleteProperties` (src/chord2mml_ast2notes.ts)**:
    -   **役割**: 特定のオブジェクトから指定されたプロパティを削除します。
    -   **引数**: `obj` (object) - プロパティを削除する対象のオブジェクト, `properties` (array<string>) - 削除するプロパティ名の配列。
    -   **戻り値**: `obj` (object) - プロパティが削除されたオブジェクト。
    -   **機能**: 不要な中間プロパティをクリーンアップするために使用されます。

-   **`getNotesByChord` (src/chord2mml_ast2notes.ts)**:
    -   **役割**: 基本的なコードの構成音を決定します。
    -   **引数**: `chordInfo` (object) - コードのルート、クオリティ、テンションなどの情報。
    -   **戻り値**: `notes` (array<number>) - コードを構成する音符のMIDIノート番号。
    -   **機能**: コードのルート音とクオリティ（例: Maj7, min9, sus4）に基づいて、そのコードに含まれる音を生成します。

-   **`getNotesByChordOverBassNote` (src/chord2mml_ast2notes.ts)**:
    -   **役割**: オンコード（例: C/G）の構成音を決定します。
    -   **引数**: `chordOverBassInfo` (object) - オンコードの情報。
    -   **戻り値**: `notes` (array<number>) - オンコードの構成音。
    -   **機能**: 分母のベース音と分子のコード情報を組み合わせて、オンコードの音符リストを生成します。

-   **`concatLowerAndUpper` (src/chord2mml_ast2notes.ts)**:
    -   **役割**: 低音部と高音部の音符リストを結合します。
    -   **引数**: `lowerNotes` (array<number>), `upperNotes` (array<number>).
    -   **戻り値**: `combinedNotes` (array<number>).
    -   **機能**: ベース音と和音の音を組み合わせて一つの音符リストにします。

-   **`keyShiftUpperNotes` (src/chord2mml_ast2notes.ts)**:
    -   **役割**: キー変更イベントに基づいて高音部の音符をシフトします。
    -   **引数**: `notes` (array<number>), `keyShift` (number).
    -   **戻り値**: `shiftedNotes` (array<number>).
    -   **機能**: 指定されたキーシフト量に基づいて、音符のMIDIノート番号を増減させます。

-   **`getNotesByInversionChord` (src/chord2mml_ast2notes.ts)**:
    -   **役割**: 転回形コードの構成音を決定します。
    -   **引数**: `inversionChordInfo` (object) - 転回形コードの情報。
    -   **戻り値**: `notes` (array<number>) - 転回形コードの構成音。
    -   **機能**: 指定された転回モード（ルート転回、第1転回など）に基づいて、コードの構成音を適切なオクターブに配置し直します。

-   **`getNotesByPolychord` (src/chord2mml_ast2notes.ts)**:
    -   **役割**: ポリコード（例: C/Am）の構成音を決定します。
    -   **引数**: `polychordInfo` (object) - ポリコードの情報。
    -   **戻り値**: `notes` (array<number>) - ポリコードの構成音。
    -   **機能**: 複数のコードを組み合わせたポリコードの音符リストを生成します。

-   **`getNotes` (src/chord2mml_ast2notes.ts)**:
    -   **役割**: Chord、On-Chord、Inversion Chord、Polychordのいずれかのタイプに基づいて音符リストを取得する汎用関数です。
    -   **引数**: `event` (object) - コードイベントのオブジェクト。
    -   **戻り値**: `notes` (array<number>) - 生成された音符のリスト。
    -   **機能**: イベントのタイプを判別し、適切な `getNotesBy...` 関数を呼び出します。

-   **`addNote` (src/chord2mml_ast2notes.ts)**:
    -   **役割**: 特定の条件に基づいてノートのリストに音を追加します。
    -   **引数**: `notes` (array<number>), `rootNote` (number), `interval` (number), `offset` (number).
    -   **戻り値**: `notes` (array<number>) - 新しいノートが追加されたリスト。
    -   **機能**: ルート音とインターバルからノートを計算し、必要に応じてリストに追加します。

-   **`inversionAndOpenHarmony` (src/chord2mml_ast2notes.ts)**:
    -   **役割**: 音符リストに対し、転回形とオープンハーモニーの処理を適用します。
    -   **引数**: `notes` (array<number>), `inversion` (object), `openHarmony` (object).
    -   **戻り値**: `processedNotes` (array<number>) - 処理後の音符リスト。
    -   **機能**: コードの転回形（Inversion）や、ドロップボイシングなどのオープンハーモニー処理を適用し、より豊かな響きの和音を生成します。

-   **`keyShiftNotes` (src/chord2mml_ast2notes.ts)**:
    -   **役割**: 現在のキーに基づいて音符をシフトします。
    -   **引数**: `notes` (array<number>), `currentKey` (string).
    -   **戻り値**: `shiftedNotes` (array<number>).
    -   **機能**: 指定されたキーに基づいて、音符の絶対音高を調整します。

-   **`inversionByTargetNote` (src/chord2mml_ast2notes.ts)**:
    -   **役割**: 特定の目標音をベースとして音符を転回します。
    -   **引数**: `notes` (array<number>), `targetNote` (number).
    -   **戻り値**: `invertedNotes` (array<number>).
    -   **機能**: 和音の中から特定の音を基準として転回形を作成します。

-   **`inversionByCount` (src/chord2mml_ast2notes.ts)**:
    -   **役割**: 指定された回数だけ音符を転回します。
    -   **引数**: `notes` (array<number>), `count` (number).
    -   **戻り値**: `invertedNotes` (array<number>).
    -   **機能**: 音符リストをn回転回させます。

-   **`adjustNotesOctave` (src/chord2mml_ast2notes.ts)**:
    -   **役割**: 音符のオクターブを調整し、特定の範囲に収めるか、聞きやすいように配置します。
    -   **引数**: `notes` (array<number>).
    -   **戻り値**: `adjustedNotes` (array<number>).
    -   **機能**: 音符の集合が不自然に高い/低いオクターブにならないように調整します。

-   **`drop2`, `drop4`, `drop2and4` (src/chord2mml_ast2notes.ts)**:
    -   **役割**: それぞれDrop 2、Drop 4、Drop 2 & 4ボイシングを音符リストに適用します。
    -   **引数**: `notes` (array<number>).
    -   **戻り値**: `processedNotes` (array<number>).
    -   **機能**: オープンハーモニーの手法で、和音の構成音の配置を調整し、より広がりのある響きを作り出します。

-   **`notesToMml` (src/chord2mml_notes2mml.ts)**:
    -   **役割**: 個々のノート情報のリストを受け取り、最終的なMML文字列を生成します。
    -   **引数**: `notesList` (array) - 各ノートの詳細情報を含むオブジェクトの配列。
    -   **戻り値**: `mmlString` (string) - 生成されたMML文字列。
    -   **機能**: ノートのキー、オクターブ、長さ、テンポなどの情報を使って、MMLの文法に従った文字列を組み立てます。`create12ionians`や`isSharpByKeyAndScale`などの補助関数を呼び出します。

-   **`create12ionians` (src/chord2mml_notes2mml.ts)**:
    -   **役割**: 12種類のイオニアンスケール（長音階）の音階情報を生成します。
    -   **引数**: なし。
    -   **戻り値**: `ionianScales` (object) - 各キーのイオニアンスケール情報。
    -   **機能**: MML生成時に、どの音がシャープ/フラットされるべきかを判断するための基礎データを提供します。

-   **`generateIonians` (src/chord2mml_notes2mml.ts)**:
    -   **役割**: 特定のルート音からイオニアンスケールを生成します。
    -   **引数**: `rootNote` (number) - スケールのルートとなるMIDIノート番号。
    -   **戻り値**: `ionianScale` (array<number>) - イオニアンスケールを構成するノート番号の配列。
    -   **機能**: ルート音から長音階のパターンに従ってノートを生成します。

-   **`normalizeArrays` (src/chord2mml_notes2mml.ts)**:
    -   **役割**: 複数の配列を正規化し、操作しやすい形式に変換します。
    -   **引数**: `arrays` (array<array>).
    -   **戻り値**: `normalizedArrays` (array<array>).
    -   **機能**: スケールなどの配列データをMML生成に適した形に整形します。

-   **`isSharpByKeyAndScale` (src/chord2mml_notes2mml.ts)**:
    -   **役割**: 特定のキーとスケールにおいて、ある音符がシャープとして表現されるべきかを判定します。
    -   **引数**: `note` (number) - 判定対象のMIDIノート番号, `keyInfo` (object), `scaleInfo` (object).
    -   **戻り値**: `isSharp` (boolean) - シャープであればtrue。
    -   **機能**: MML表記における臨時記号の有無を決定するために、音楽理論に基づいた判定を行います。

-   **`searchIonians` (src/chord2mml_notes2mml.ts)**:
    -   **役割**: イオニアンスケールの中から特定の音符を検索します。
    -   **引数**: `note` (number) - 検索対象のMIDIノート番号, `ionianScales` (object).
    -   **戻り値**: `foundNoteInfo` (object) - 検索結果の情報。
    -   **機能**: 指定された音がどのスケールに属し、どのように表現されるかを特定します。

## 関数呼び出し階層ツリー
```
chord2mml (src/chord2mml.ts)
└── parse (src/chord2mml_chord2ast.cjs - Peggy.js生成パーサー)
└── astToAst (src/chord2mml_ast2ast.ts)
    ├── bar2noteLength
    └── updateAstNoteLength
└── astToNotes (src/chord2mml_ast2notes.ts)
    ├── deleteProperties
    ├── getNotesByChord
    ├── getNotesByChordOverBassNote
    ├── concatLowerAndUpper
    ├── keyShiftUpperNotes
    ├── getNotesByInversionChord
    ├── getNotesByPolychord
    ├── getNotes
    ├── addNote
    ├── inversionAndOpenHarmony
    │   ├── inversionByTargetNote
    │   ├── inversionByCount
    │   ├── adjustNotesOctave
    │   ├── drop2
    │   ├── drop4
    │   └── drop2and4
    ├── keyShiftNotes
    └── adjustNotesOctave
└── notesToMml (src/chord2mml_notes2mml.ts)
    ├── create12ionians
    │   └── generateIonians
    │       └── normalizeArrays
    ├── isSharpByKeyAndScale
    └── searchIonians

---
Generated at: 2025-12-03 07:08:57 JST
