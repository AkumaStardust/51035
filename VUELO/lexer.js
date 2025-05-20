import antlr4 from 'antlr4';
import fs from 'fs';
import Vuelolexer from './antlr/VueloLexer.js';

const input = fs.readFileSync('input.txt', 'utf-8');
const chars = new antlr4.InputStream(input);
const lexer = new Vuelolexer(chars);

const tokens = lexer.getAllTokens();
lexer.reset();

export const tabla = ()=>{
  console.log('Lexema\t        Token');
console.log('------\t        ------');

tokens.forEach((token) => {
  const name= Vuelolexer.symbolicNames[token.type];
  console.log(
    `${name}\t${"      " + token.text}`
  );
  
})
}