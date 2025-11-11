# chord2mml
A library transpiles Chord notation into Music Macro Language.

# Demo
https://cat2151.github.io/chord2mml/dist/

# Features
- A simple text-to-text JavaScript library
- Generates MML from chord progressions (Chord notation)
- Easily play chord progressions in browsers and [Obsidian](https://github.com/cat2151/obsidian-plugin-mmlabc).

## Related Projects
- [MML-chord-generator](https://github.com/cat2151/MML-chord-generator): Some specifications of chord2mml are inherited from MML-chord-generator.
- [obsidian-plugin-mmlabc](https://github.com/cat2151/obsidian-plugin-mmlabc): chord2mml is integrated into this plugin. When you write chord progressions in Obsidian, it plays the sound. It's intended for use cases such as sketching composition ideas.

# Project Scope
- This repository is responsible for creating `chord2mml_chord2ast.pegjs` to `chord2mml_notes2mml.ts`.
- [easychord2mml](https://github.com/cat2151/easychord2mml/) is responsible for creating a mechanism to use chord2mml easily.
- [obsidian-plugin-mmlabc](https://github.com/cat2151/obsidian-plugin-mmlabc) is responsible for utilizing chord progressions to help with sketching composition ideas, etc., by playing them.

# Project Priorities
- Be able to provide a `Chord notation string` to a function and receive an `MML string`.
- Enable playing chord progressions in [obsidian-plugin-mmlabc](https://github.com/cat2151/obsidian-plugin-mmlabc).

# Goals
- Proof of Concept
  - Prioritize establishing the prospects for features with broad applications, rather than meticulously crafting every detail for perfect operation.
- Simplicity
  - Prioritize simple rules.
  - Process input data as directly as possible.
  - For example, octave control will be manual.
    - Users explicitly write "octave-up" or similar.
    - This is because it's impossible to determine from the input data whether "octave up" or "octave down" is preferred.
    - We also won't automatically select the "standard" octave and provide user control only when deviating from it.
      - This is because the boundaries of what is "standard" are often a gradient, and defining rules for what constitutes "standard" would be complex, leading to a complicated specification.

# Out of Scope
- Exhaustive rare case investigation: Thoroughly researching every rare chord notation across all books and the entire internet.
- Proactive support for potential, yet unencountered, possibilities: Implementing everything that "might be a possible chord notation."
- Perfect format: Completing a notation format that can accommodate everything.
- Full combinatorial testing: Completing test cases for all combinations to ensure everything is covered.
- Perfect full automation: Building a system that automatically "makes everything nice" for all ambiguous inputs.
- Production-ready practicality: Providing high functionality and quality suitable for practical use.