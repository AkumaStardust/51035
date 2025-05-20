import antlr4, { CommonTokenStream, InputStream, ParseTreeWalker } from 'antlr4';
import { readFileSync } from 'fs';

import  VueloLexer  from './antlr/VueloLexer.js';
import  VueloParser  from './antlr/VueloParser.js';
import  VueloListener  from './antlr/VueloListener.js';
import { tabla } from './lexer.js';
import VueloVisitor from './antlr/VueloVisitor.js';

const input = readFileSync('./input.txt', 'utf8');
const chars = new InputStream(input);
const lexer = new VueloLexer(chars);
const tokens = new CommonTokenStream(lexer);
const parser = new VueloParser(tokens);
class CustomErrorListener extends antlr4.error.ErrorListener {
  constructor() {
    super();
    this.errors = [];
  }
  syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
    this.errors.push(`Error en línea ${line}, columna ${column}: ${msg}`);
  }
}
const errorListener = new CustomErrorListener();
parser.removeErrorListeners();
parser.addErrorListener(errorListener);
const tree = parser.vuelo();
if (errorListener.errors.length > 0) {
  console.error('errores encontrados:');
  errorListener.errors.forEach(e => console.error(e));
} else {
  console.log('analisis sintactico exitoso');
  tabla()
  console.log('\narbol de anaisis sintactico');
const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`${cadena_tree}`);
        const visitor = new VueloVisitor();
        visitor.visit(tree);   


  function js(tree) {
  const vuelo = {};
  const children = tree.children;
  vuelo.code = children[0].getText();
  vuelo.from = children[1].getText();
  vuelo.to = children[3].getText();
  vuelo.time = children[4].getText();
  vuelo.status = children[6].getText();
  vuelo.gate = children[9].getText();
  return vuelo;
}
const vueloObj = js(tree);
console.log('\nTraducción a JavaScript:');
console.log(`const flight = ${JSON.stringify(vueloObj, null, 2)};`);
}