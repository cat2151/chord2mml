// Generated by Peggy 3.0.2.
//
// https://peggyjs.org/

"use strict";

function peg$subclass(child, parent) {
  function C() { this.constructor = child; }
  C.prototype = parent.prototype;
  child.prototype = new C();
}

function peg$SyntaxError(message, expected, found, location) {
  var self = Error.call(this, message);
  // istanbul ignore next Check is a necessary evil to support older environments
  if (Object.setPrototypeOf) {
    Object.setPrototypeOf(self, peg$SyntaxError.prototype);
  }
  self.expected = expected;
  self.found = found;
  self.location = location;
  self.name = "SyntaxError";
  return self;
}

peg$subclass(peg$SyntaxError, Error);

function peg$padEnd(str, targetLength, padString) {
  padString = padString || " ";
  if (str.length > targetLength) { return str; }
  targetLength -= str.length;
  padString += padString.repeat(targetLength);
  return str + padString.slice(0, targetLength);
}

peg$SyntaxError.prototype.format = function(sources) {
  var str = "Error: " + this.message;
  if (this.location) {
    var src = null;
    var k;
    for (k = 0; k < sources.length; k++) {
      if (sources[k].source === this.location.source) {
        src = sources[k].text.split(/\r\n|\n|\r/g);
        break;
      }
    }
    var s = this.location.start;
    var offset_s = (this.location.source && (typeof this.location.source.offset === "function"))
      ? this.location.source.offset(s)
      : s;
    var loc = this.location.source + ":" + offset_s.line + ":" + offset_s.column;
    if (src) {
      var e = this.location.end;
      var filler = peg$padEnd("", offset_s.line.toString().length, ' ');
      var line = src[s.line - 1];
      var last = s.line === e.line ? e.column : line.length + 1;
      var hatLen = (last - s.column) || 1;
      str += "\n --> " + loc + "\n"
          + filler + " |\n"
          + offset_s.line + " | " + line + "\n"
          + filler + " | " + peg$padEnd("", s.column - 1, ' ')
          + peg$padEnd("", hatLen, "^");
    } else {
      str += "\n at " + loc;
    }
  }
  return str;
};

peg$SyntaxError.buildMessage = function(expected, found) {
  var DESCRIBE_EXPECTATION_FNS = {
    literal: function(expectation) {
      return "\"" + literalEscape(expectation.text) + "\"";
    },

    class: function(expectation) {
      var escapedParts = expectation.parts.map(function(part) {
        return Array.isArray(part)
          ? classEscape(part[0]) + "-" + classEscape(part[1])
          : classEscape(part);
      });

      return "[" + (expectation.inverted ? "^" : "") + escapedParts.join("") + "]";
    },

    any: function() {
      return "any character";
    },

    end: function() {
      return "end of input";
    },

    other: function(expectation) {
      return expectation.description;
    }
  };

  function hex(ch) {
    return ch.charCodeAt(0).toString(16).toUpperCase();
  }

  function literalEscape(s) {
    return s
      .replace(/\\/g, "\\\\")
      .replace(/"/g,  "\\\"")
      .replace(/\0/g, "\\0")
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/[\x00-\x0F]/g,          function(ch) { return "\\x0" + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return "\\x"  + hex(ch); });
  }

  function classEscape(s) {
    return s
      .replace(/\\/g, "\\\\")
      .replace(/\]/g, "\\]")
      .replace(/\^/g, "\\^")
      .replace(/-/g,  "\\-")
      .replace(/\0/g, "\\0")
      .replace(/\t/g, "\\t")
      .replace(/\n/g, "\\n")
      .replace(/\r/g, "\\r")
      .replace(/[\x00-\x0F]/g,          function(ch) { return "\\x0" + hex(ch); })
      .replace(/[\x10-\x1F\x7F-\x9F]/g, function(ch) { return "\\x"  + hex(ch); });
  }

  function describeExpectation(expectation) {
    return DESCRIBE_EXPECTATION_FNS[expectation.type](expectation);
  }

  function describeExpected(expected) {
    var descriptions = expected.map(describeExpectation);
    var i, j;

    descriptions.sort();

    if (descriptions.length > 0) {
      for (i = 1, j = 1; i < descriptions.length; i++) {
        if (descriptions[i - 1] !== descriptions[i]) {
          descriptions[j] = descriptions[i];
          j++;
        }
      }
      descriptions.length = j;
    }

    switch (descriptions.length) {
      case 1:
        return descriptions[0];

      case 2:
        return descriptions[0] + " or " + descriptions[1];

      default:
        return descriptions.slice(0, -1).join(", ")
          + ", or "
          + descriptions[descriptions.length - 1];
    }
  }

  function describeFound(found) {
    return found ? "\"" + literalEscape(found) + "\"" : "end of input";
  }

  return "Expected " + describeExpected(expected) + " but " + describeFound(found) + " found.";
};

function peg$parse(input, options) {
  options = options !== undefined ? options : {};

  var peg$FAILED = {};
  var peg$source = options.grammarSource;

  var peg$startRuleFunctions = { CHORDS: peg$parseCHORDS };
  var peg$startRuleFunction = peg$parseCHORDS;

  var peg$c0 = "/";
  var peg$c1 = "compound chord";
  var peg$c2 = "inversion";
  var peg$c3 = "upper structure";
  var peg$c4 = "maj";
  var peg$c5 = "M";
  var peg$c6 = "maj7";
  var peg$c7 = "\u25B3";

  var peg$r0 = /^[A-G]/;
  var peg$r1 = /^[#\uFF03\u266F]/;
  var peg$r2 = /^[b\u266D]/;
  var peg$r3 = /^[ \t\n\r]/;

  var peg$e0 = peg$literalExpectation("/", false);
  var peg$e1 = peg$literalExpectation("compound chord", true);
  var peg$e2 = peg$literalExpectation("inversion", true);
  var peg$e3 = peg$literalExpectation("upper structure", true);
  var peg$e4 = peg$classExpectation([["A", "G"]], false, false);
  var peg$e5 = peg$classExpectation(["#", "\uFF03", "\u266F"], false, false);
  var peg$e6 = peg$classExpectation(["b", "\u266D"], false, false);
  var peg$e7 = peg$literalExpectation("maj", true);
  var peg$e8 = peg$literalExpectation("M", false);
  var peg$e9 = peg$literalExpectation("maj7", true);
  var peg$e10 = peg$literalExpectation("\u25B3", false);
  var peg$e11 = peg$otherExpectation("whitespace");
  var peg$e12 = peg$classExpectation([" ", "\t", "\n", "\r"], false, false);

  var peg$f0 = function(root, quality) { return { event: "chord", root, quality }; };
  var peg$f1 = function(upperRoot, upperQuality, lowerRoot, lowerQuality) {
    return { event: "slash chord", upperRoot, upperQuality, lowerRoot, lowerQuality }; };
  var peg$f2 = function() { return { event: "compound chord" }; };
  var peg$f3 = function() { return { event: "inversion" }; };
  var peg$f4 = function() { return { event: "upper structure" }; };
  var peg$f5 = function(root, sharp, flat) {
	let offset;
    switch (root) {
    case 'C': offset =  0; break;
    case 'D': offset =  2; break;
    case 'E': offset =  4; break;
    case 'F': offset =  5; break;
    case 'G': offset =  7; break;
    case 'A': offset =  9; break;
    case 'B': offset = 11; break;
    defaut: assert(false); break;
    }
    offset += sharp.length - flat.length;
    offset %= 12;
    return offset; };
  var peg$f6 = function() { return "#"; };
  var peg$f7 = function() { return "b"; };
  var peg$f8 = function(quality) { return quality; };
  var peg$f9 = function() { return "maj"; };
  var peg$f10 = function() { return "maj7"; };
  var peg$currPos = 0;
  var peg$savedPos = 0;
  var peg$posDetailsCache = [{ line: 1, column: 1 }];
  var peg$maxFailPos = 0;
  var peg$maxFailExpected = [];
  var peg$silentFails = 0;

  var peg$result;

  if ("startRule" in options) {
    if (!(options.startRule in peg$startRuleFunctions)) {
      throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
    }

    peg$startRuleFunction = peg$startRuleFunctions[options.startRule];
  }

  function text() {
    return input.substring(peg$savedPos, peg$currPos);
  }

  function offset() {
    return peg$savedPos;
  }

  function range() {
    return {
      source: peg$source,
      start: peg$savedPos,
      end: peg$currPos
    };
  }

  function location() {
    return peg$computeLocation(peg$savedPos, peg$currPos);
  }

  function expected(description, location) {
    location = location !== undefined
      ? location
      : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildStructuredError(
      [peg$otherExpectation(description)],
      input.substring(peg$savedPos, peg$currPos),
      location
    );
  }

  function error(message, location) {
    location = location !== undefined
      ? location
      : peg$computeLocation(peg$savedPos, peg$currPos);

    throw peg$buildSimpleError(message, location);
  }

  function peg$literalExpectation(text, ignoreCase) {
    return { type: "literal", text: text, ignoreCase: ignoreCase };
  }

  function peg$classExpectation(parts, inverted, ignoreCase) {
    return { type: "class", parts: parts, inverted: inverted, ignoreCase: ignoreCase };
  }

  function peg$anyExpectation() {
    return { type: "any" };
  }

  function peg$endExpectation() {
    return { type: "end" };
  }

  function peg$otherExpectation(description) {
    return { type: "other", description: description };
  }

  function peg$computePosDetails(pos) {
    var details = peg$posDetailsCache[pos];
    var p;

    if (details) {
      return details;
    } else {
      p = pos - 1;
      while (!peg$posDetailsCache[p]) {
        p--;
      }

      details = peg$posDetailsCache[p];
      details = {
        line: details.line,
        column: details.column
      };

      while (p < pos) {
        if (input.charCodeAt(p) === 10) {
          details.line++;
          details.column = 1;
        } else {
          details.column++;
        }

        p++;
      }

      peg$posDetailsCache[pos] = details;

      return details;
    }
  }

  function peg$computeLocation(startPos, endPos, offset) {
    var startPosDetails = peg$computePosDetails(startPos);
    var endPosDetails = peg$computePosDetails(endPos);

    var res = {
      source: peg$source,
      start: {
        offset: startPos,
        line: startPosDetails.line,
        column: startPosDetails.column
      },
      end: {
        offset: endPos,
        line: endPosDetails.line,
        column: endPosDetails.column
      }
    };
    if (offset && peg$source && (typeof peg$source.offset === "function")) {
      res.start = peg$source.offset(res.start);
      res.end = peg$source.offset(res.end);
    }
    return res;
  }

  function peg$fail(expected) {
    if (peg$currPos < peg$maxFailPos) { return; }

    if (peg$currPos > peg$maxFailPos) {
      peg$maxFailPos = peg$currPos;
      peg$maxFailExpected = [];
    }

    peg$maxFailExpected.push(expected);
  }

  function peg$buildSimpleError(message, location) {
    return new peg$SyntaxError(message, null, null, location);
  }

  function peg$buildStructuredError(expected, found, location) {
    return new peg$SyntaxError(
      peg$SyntaxError.buildMessage(expected, found),
      expected,
      found,
      location
    );
  }

  function peg$parseCHORDS() {
    var s0, s1;

    s0 = [];
    s1 = peg$parseEVENT();
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      s1 = peg$parseEVENT();
    }

    return s0;
  }

  function peg$parseEVENT() {
    var s0;

    s0 = peg$parseCOMPOUND_CHORD_MODE();
    if (s0 === peg$FAILED) {
      s0 = peg$parseUPPER_STRUCTURE_MODE();
      if (s0 === peg$FAILED) {
        s0 = peg$parseINVERSION_MODE();
        if (s0 === peg$FAILED) {
          s0 = peg$parseSLASH_CHORD();
          if (s0 === peg$FAILED) {
            s0 = peg$parseCHORD();
          }
        }
      }
    }

    return s0;
  }

  function peg$parseCHORD() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    s1 = peg$parse_();
    s2 = peg$parseROOT();
    if (s2 !== peg$FAILED) {
      s3 = peg$parseCHORD_QUALITY();
      if (s3 !== peg$FAILED) {
        s4 = peg$parse_();
        peg$savedPos = s0;
        s0 = peg$f0(s2, s3);
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseSLASH_CHORD() {
    var s0, s1, s2, s3, s4, s5, s6, s7;

    s0 = peg$currPos;
    s1 = peg$parse_();
    s2 = peg$parseROOT();
    if (s2 !== peg$FAILED) {
      s3 = peg$parseCHORD_QUALITY();
      if (s3 !== peg$FAILED) {
        if (input.charCodeAt(peg$currPos) === 47) {
          s4 = peg$c0;
          peg$currPos++;
        } else {
          s4 = peg$FAILED;
          if (peg$silentFails === 0) { peg$fail(peg$e0); }
        }
        if (s4 !== peg$FAILED) {
          s5 = peg$parseROOT();
          if (s5 !== peg$FAILED) {
            s6 = peg$parseCHORD_QUALITY();
            if (s6 !== peg$FAILED) {
              s7 = peg$parse_();
              peg$savedPos = s0;
              s0 = peg$f1(s2, s3, s5, s6);
            } else {
              peg$currPos = s0;
              s0 = peg$FAILED;
            }
          } else {
            peg$currPos = s0;
            s0 = peg$FAILED;
          }
        } else {
          peg$currPos = s0;
          s0 = peg$FAILED;
        }
      } else {
        peg$currPos = s0;
        s0 = peg$FAILED;
      }
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseCOMPOUND_CHORD_MODE() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parse_();
    if (input.substr(peg$currPos, 14).toLowerCase() === peg$c1) {
      s2 = input.substr(peg$currPos, 14);
      peg$currPos += 14;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e1); }
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$parse_();
      peg$savedPos = s0;
      s0 = peg$f2();
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseINVERSION_MODE() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parse_();
    if (input.substr(peg$currPos, 9).toLowerCase() === peg$c2) {
      s2 = input.substr(peg$currPos, 9);
      peg$currPos += 9;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e2); }
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$parse_();
      peg$savedPos = s0;
      s0 = peg$f3();
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseUPPER_STRUCTURE_MODE() {
    var s0, s1, s2, s3;

    s0 = peg$currPos;
    s1 = peg$parse_();
    if (input.substr(peg$currPos, 15).toLowerCase() === peg$c3) {
      s2 = input.substr(peg$currPos, 15);
      peg$currPos += 15;
    } else {
      s2 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e3); }
    }
    if (s2 !== peg$FAILED) {
      s3 = peg$parse_();
      peg$savedPos = s0;
      s0 = peg$f4();
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseROOT() {
    var s0, s1, s2, s3, s4;

    s0 = peg$currPos;
    if (peg$r0.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e4); }
    }
    if (s1 !== peg$FAILED) {
      s2 = [];
      s3 = peg$parseSHARP();
      while (s3 !== peg$FAILED) {
        s2.push(s3);
        s3 = peg$parseSHARP();
      }
      s3 = [];
      s4 = peg$parseFLAT();
      while (s4 !== peg$FAILED) {
        s3.push(s4);
        s4 = peg$parseFLAT();
      }
      peg$savedPos = s0;
      s0 = peg$f5(s1, s2, s3);
    } else {
      peg$currPos = s0;
      s0 = peg$FAILED;
    }

    return s0;
  }

  function peg$parseSHARP() {
    var s0, s1;

    s0 = peg$currPos;
    if (peg$r1.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e5); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f6();
    }
    s0 = s1;

    return s0;
  }

  function peg$parseFLAT() {
    var s0, s1;

    s0 = peg$currPos;
    if (peg$r2.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e6); }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f7();
    }
    s0 = s1;

    return s0;
  }

  function peg$parseCHORD_QUALITY() {
    var s0, s1;

    s0 = peg$currPos;
    s1 = peg$parseMAJ7();
    if (s1 === peg$FAILED) {
      s1 = peg$parseMAJ();
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f8(s1);
    }
    s0 = s1;

    return s0;
  }

  function peg$parseMAJ() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 3).toLowerCase() === peg$c4) {
      s1 = input.substr(peg$currPos, 3);
      peg$currPos += 3;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e7); }
    }
    if (s1 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 77) {
        s1 = peg$c5;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e8); }
      }
      if (s1 === peg$FAILED) {
        s1 = '';
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f9();
    }
    s0 = s1;

    return s0;
  }

  function peg$parseMAJ7() {
    var s0, s1;

    s0 = peg$currPos;
    if (input.substr(peg$currPos, 4).toLowerCase() === peg$c6) {
      s1 = input.substr(peg$currPos, 4);
      peg$currPos += 4;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e9); }
    }
    if (s1 === peg$FAILED) {
      if (input.charCodeAt(peg$currPos) === 9651) {
        s1 = peg$c7;
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e10); }
      }
    }
    if (s1 !== peg$FAILED) {
      peg$savedPos = s0;
      s1 = peg$f10();
    }
    s0 = s1;

    return s0;
  }

  function peg$parse_() {
    var s0, s1;

    peg$silentFails++;
    s0 = [];
    if (peg$r3.test(input.charAt(peg$currPos))) {
      s1 = input.charAt(peg$currPos);
      peg$currPos++;
    } else {
      s1 = peg$FAILED;
      if (peg$silentFails === 0) { peg$fail(peg$e12); }
    }
    while (s1 !== peg$FAILED) {
      s0.push(s1);
      if (peg$r3.test(input.charAt(peg$currPos))) {
        s1 = input.charAt(peg$currPos);
        peg$currPos++;
      } else {
        s1 = peg$FAILED;
        if (peg$silentFails === 0) { peg$fail(peg$e12); }
      }
    }
    peg$silentFails--;
    s1 = peg$FAILED;
    if (peg$silentFails === 0) { peg$fail(peg$e11); }

    return s0;
  }

  peg$result = peg$startRuleFunction();

  if (peg$result !== peg$FAILED && peg$currPos === input.length) {
    return peg$result;
  } else {
    if (peg$result !== peg$FAILED && peg$currPos < input.length) {
      peg$fail(peg$endExpectation());
    }

    throw peg$buildStructuredError(
      peg$maxFailExpected,
      peg$maxFailPos < input.length ? input.charAt(peg$maxFailPos) : null,
      peg$maxFailPos < input.length
        ? peg$computeLocation(peg$maxFailPos, peg$maxFailPos + 1)
        : peg$computeLocation(peg$maxFailPos, peg$maxFailPos)
    );
  }
}

module.exports = {
  SyntaxError: peg$SyntaxError,
  parse: peg$parse
};
