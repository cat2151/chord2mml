Last updated: 2025-11-12

# Project Overview

## プロジェクト概要
-   コード進行表記（Chord notation）をMML（Music Macro Language）に変換するシンプルなJavaScriptライブラリです。
-   入力されたコード進行からMML文字列を生成し、ブラウザや対応するアプリケーションで音楽を再生できるようにします。
-   作曲のアイデアスケッチや、既存のコード進行を音で確認する用途などに手軽に活用できます。

## 技術スタック
-   フロントエンド:
    -   **HTML**: デモページの構造を記述するために使用されています (`dist/index.html`)。
    -   **JavaScript**: ライブラリの最終的な実行環境言語であり、TypeScriptからコンパイルされます。
    -   **Webpack**: JavaScriptモジュールのバンドル、最適化、およびデモページの開発サーバー機能を提供します。
-   音楽・オーディオ:
    -   **Chord notation**: 入力として受け取るコード進行の表記法です。
    -   **Music Macro Language (MML)**: 出力される音楽表現言語で、様々な音楽プレイヤーや環境で利用可能です。
-   開発ツール:
    -   **TypeScript**: 静的型付けを導入したJavaScriptのスーパーセットで、コードの品質と保守性を高めます。
    -   **Peggy.js**: 文法定義ファイル（.pegjs）からパーサー（構文解析器）を自動生成するためのツールです。
    -   **Chokidar-cli**: ファイルの変更を監視し、自動ビルドなどの開発ワークフローをトリガーするために使用されます。
    -   **npm-run-all**: 複数のnpmスクリプトを並列または直列で実行するためのユーティリティです。
-   テスト:
    -   **Jest**: JavaScriptのテストフレームワークで、ライブラリの機能検証に利用されます。
-   ビルドツール:
    -   **Webpack**: ソースコードを結合し、`dist/chord2mml.js`として配布可能な形式にバンドルするために使用されます。
    -   **ts-loader**: WebpackがTypeScriptファイルを処理するためのローダーです。
    -   **@babel/parser**: JavaScriptコードを抽象構文木（AST）に変換するためのパーサー（依存関係にありますが、直接的な使用はプロジェクト情報からは不明です）。
-   言語機能:
    -   **TypeScript**: 型安全なJavaScript開発を可能にする言語機能を提供します。
    -   **JavaScript**: ECMAScript標準に基づいたプログラミング言語です。
-   自動化・CI/CD:
    -   明確なCI/CDパイプラインは明記されていませんが、`chokidar-cli`や`npm-run-all`が開発プロセスの自動化に貢献しています。
-   開発標準:
    -   **TypeScript**: 型定義によりコードの品質と可読性を向上させます。
    -   **tsconfig.json**: TypeScriptコンパイラの設定を統一し、プロジェクト全体のコード品質を維持します。

## ファイル階層ツリー
```
📄 .gitignore
📄 LICENSE
📖 README.ja.md
📖 README.md
📄 _config.yml
📁 dist/
  📜 chord2mml.js
  🌐 index.html
📁 generated-docs/
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
```

## ファイル詳細説明
-   **`.gitignore`**: Gitによるバージョン管理から除外するファイルやディレクトリを指定します。
-   **`LICENSE`**: プロジェクトのライセンス情報が記述されています。
-   **`README.ja.md`, `README.md`**: プロジェクトの概要、目的、機能、使い方などを説明するドキュメントです。
-   **`_config.yml`**: GitHub Pagesなどの静的サイトジェネレーター（例: Jekyll）の設定ファイルです。
-   **`dist/chord2mml.js`**: プロジェクトのメインライブラリファイルです。TypeScriptで記述されたソースコードがWebpackによってバンドル・最適化されたもので、ブラウザやNode.js環境でコード進行をMMLに変換するための全機能が含まれています。
-   **`dist/index.html`**: ライブラリのデモンストレーションページを提供するためのHTMLファイルです。`chord2mml.js`を読み込み、ユーザーが実際にコード進行を入力してMML変換を試せるインターフェースを提供します。
-   **`generated-docs/`**: 生成されたドキュメントを格納するためのディレクトリです（現在は空ですが、将来的に使用される可能性があります）。
-   **`issue-notes/2.md`**: 開発中の特定の課題や検討事項に関するメモファイルです。
-   **`jest.config.js`**: JavaScriptテストフレームワークJestの設定ファイルです。テスト対象ファイル、環境、モック設定などが定義されています。
-   **`package-lock.json`**: `package.json`に記述された依存関係の正確なバージョンと依存ツリーを記録し、プロジェクトの依存関係の一貫性を保証します。
-   **`package.json`**: プロジェクトのメタデータ（名前、バージョン、説明など）、依存関係、開発スクリプトなどを定義するファイルです。
-   **`peggyjs/chord2mml_chord2ast.pegjs`**: Peggy.jsパーサー生成ツール用の文法定義ファイルです。Chord notationの文字列を解析し、抽象構文木（AST）に変換するためのルールが詳細に記述されており、コード進行の多様な表記を理解する基盤となります。
-   **`src/chord2mml.ts`**: ライブラリのエントリーポイントとなるTypeScriptファイルです。各変換ステージ（文字列からAST、ASTから音符、音符からMML）のモジュールを統合し、ユーザーが利用する主要な変換関数などを提供します。
-   **`src/chord2mml_ast2ast.ts`**: 抽象構文木（AST）を処理し、別のASTを生成するTypeScriptファイルです。この段階で、コード進行の長さやテンポなど、音楽的なメタデータがASTに付加されたり、調整されたりします。
-   **`src/chord2mml_ast2notes.ts`**: ASTから具体的な音符のリストを生成するTypeScriptファイルです。コードの種類（メジャー、マイナー）、転回形（Inversion）、オープンハーモニー（Drop2, Drop4など）といった複雑な音楽理論を適用し、実際に演奏されるべき音符の並びを計算します。
-   **`src/chord2mml_chord2ast.cjs`**: `peggyjs/chord2mml_chord2ast.pegjs`から自動生成された、Chord notationをASTに変換するパーサーモジュールです。
-   **`src/chord2mml_notes2mml.ts`**: 生成された音符のリストをMusic Macro Language (MML) 形式の文字列に変換するTypeScriptファイルです。MMLの構文規則に従い、音符、オクターブ、長さなどを適切に表現します。
-   **`test/chord2mml.test.ts`**: ライブラリの各モジュールおよび全体の変換ロジックが正しく機能するかを検証するためのテストコードです。
-   **`tsconfig.json`**: TypeScriptコンパイラの設定ファイルです。コンパイルオプション（ターゲットECMAScriptバージョン、モジュール解決方法など）が記述されています。
-   **`webpack.config.js`**: Webpackモジュールバンドラーの設定ファイルです。ソースコードのバンドル方法、出力先、ローダー、プラグインなどが定義されており、配布用の`dist/chord2mml.js`を生成するために使用されます。

## 関数詳細説明
-   **`chord2mml`の主要変換関数 (src/chord2mml.tsより)**:
    -   **役割**: コード進行の文字列全体をMML文字列に変換するライブラリのメイン関数です。内部で、入力文字列のパーシング、抽象構文木（AST）の変換、具体的な音符の生成、MML文字列への変換という一連の処理をオーケストレートします。
    -   **引数**: `Chord notation文字列` (コード進行のテキストデータ)
    -   **戻り値**: `MML文字列` (変換されたMMLテキスト)
-   **パーサー生成ルール (`peggyjs/chord2mml_chord2ast.pegjs`内の各種ルール)**:
    -   **役割**: `CHORDS`, `EVENT`, `CHORD`, `SLASH_CHORD`, `ON_CHORD`, `INLINE_MML`, `TEMPO`, `BAR`, `KEY`, `OCTAVE_UP`, `OCTAVE_DOWN`, `ROOT`, `SHARP`, `FLAT`, `CHORD_QUALITY`など多数のルールが含まれます。これらはコード進行表記の文法（構文）を定義し、入力された文字列がこれらのルールに基づいて解析され、抽象構文木（AST）が構築される際の基盤となります。
-   **AST変換関数 (`src/chord2mml_ast2ast.ts`より)**:
    -   **`astToAst(ast)`**:
        -   **役割**: 最初のASTを受け取り、小節の長さやその他の音楽的プロパティを更新・追加した新たなASTを生成します。
        -   **引数**: 初期の抽象構文木（AST）オブジェクト。
        -   **戻り値**: 音楽的メタデータが更新された抽象構文木（AST）オブジェクト。
    -   **`bar2noteLength(bar)`**:
        -   **役割**: 小節情報から、対応する音符の長さを計算します。
        -   **引数**: 小節を表すデータ構造。
        -   **戻り値**: 計算された音符の長さ。
    -   **`updateAstNoteLength(ast, noteLength)`**:
        -   **役割**: AST内の音符の長さを指定された値に更新します。
        -   **引数**: 抽象構文木（AST）オブジェクト、更新する音符の長さ。
        -   **戻り値**: 更新された抽象構文木（AST）オブジェクト。
-   **ASTから音符生成関数 (`src/chord2mml_ast2notes.ts`より)**:
    -   **`astToNotes(ast)`**:
        -   **役割**: 抽象構文木（AST）を解析し、実際に演奏されるべき具体的な音符のリストを生成します。コードの種類、転回形、オープンハーモニーなどの複雑な音楽理論がこの段階で適用されます。
        -   **引数**: 抽象構文木（AST）オブジェクト。
        -   **戻り値**: 音楽的音符のリスト。
    -   **`getNotesByChord(chord)`**:
        -   **役割**: 指定されたコード（例: `Cmaj7`）から構成音のリストを取得します。
        -   **引数**: コード情報を表すオブジェクト。
        -   **戻り値**: そのコードを構成する音符のリスト。
    -   **`getNotesByChordOverBassNote(chord, bass)`**:
        -   **役割**: 分数コード（例: `C/G`）のように、ベース音が指定されたコードの構成音リストを取得します。
        -   **引数**: コード情報を表すオブジェクト、ベース音を表すオブジェクト。
        -   **戻り値**: 分数コードを構成する音符のリスト。
    -   **`inversionAndOpenHarmony(notes, inversionMode, openHarmonyMode)`**:
        -   **役割**: 音符のリストに対し、転回形（ルート、1st、2ndなど）やオープンハーモニー（Drop2, Drop4など）のルールを適用して音の配置を調整します。
        -   **引数**: 音符のリスト、転回形のモード、オープンハーモニーのモード。
        -   **戻り値**: 転回形とオープンハーモニーが適用された音符のリスト。
    -   **`adjustNotesOctave(notes)`**:
        -   **役割**: 生成された音符のオクターブを、音楽的に適切な範囲に調整します。
        -   **引数**: 音符のリスト。
        -   **戻り値**: オクターブが調整された音符のリスト。
    -   **`drop2(notes)`, `drop4(notes)`, `drop2and4(notes)`**:
        -   **役割**: それぞれ特定のオープンハーモニーのルール（Drop2、Drop4、Drop2&4）に基づき、音符を特定のオクターブ下げて配置し、響きを調整します。
        -   **引数**: 音符のリスト。
        -   **戻り値**: オープンハーモニーが適用された音符のリスト。
-   **音符からMML生成関数 (`src/chord2mml_notes2mml.ts`より)**:
    -   **`notesToMml(notes)`**:
        -   **役割**: 生成された音符のリストをMML形式の文字列に変換します。音符、長さ、オクターブ、臨時記号などをMMLの構文に従って表現します。
        -   **引数**: 音符のリスト。
        -   **戻り値**: MML形式の文字列。
    -   **`create12ionians(key)`**:
        -   **役割**: 特定のキー（調）に基づき、12音階（イオニアンスケール）の音符リストを生成します。
        -   **引数**: キー情報を表すオブジェクト。
        -   **戻り値**: イオニアンスケールの音符リスト。
    -   **`generateIonians(root)`**:
        -   **役割**: 指定されたルート音からイオニアンスケールを生成します。
        -   **引数**: ルート音を表すオブジェクト。
        -   **戻り値**: イオニアンスケールの音符リスト。
-   **その他の関数 (dist/chord2mml.js内のミニファイされた関数など)**:
    -   `r`, `e`, `n`, `s`, `u`, `o`, `uf`, `of`, `af`, `cf`, `lf`, `hf`, `bf`, `ff`, `mf`, `vf`, `Af`, `df`, `Cf`, `wf`, `pf`, `Lf`, `gf`, `yf`, `kf`, `Of`, `Sf`, `Rf`, `a`, `c`, `i`, `l`, `h`, `b`, `f`, `m`, `v`, `A`, `d`, `C`, `w`: これらの関数は、`dist/chord2mml.js`に含まれるWebpackによってバンドル・ミニファイされた内部関数群です。元のTypeScriptファイルで定義された様々な補助関数やロジックが、最適化された形で含まれています。具体的な役割は元のソースコードを参照する必要がありますが、主にASTや音符データの処理、MML文字列の組み立てに関与しています。
    -   `function`, `switch`, `if`, `map`, `replace`, `return`, `filter`, `sort`, `for`, `while`: これらは特定の関数ではなく、JavaScript/TypeScript言語における一般的なプログラミングの制御構文や配列/文字列操作のための組み込みメソッドです。様々な関数内でロジックの実装に使用されます。

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
Generated at: 2025-11-12 07:09:55 JST
