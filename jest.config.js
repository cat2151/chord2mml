/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
//  testEnvironment: 'node',
  testEnvironment: 'jsdom', // 取り急ぎwindow を書いたTypeScriptのjestエラーを防止する用
};