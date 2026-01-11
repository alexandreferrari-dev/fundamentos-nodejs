const buf = Buffer.from('ok');
console.log(buf.toJSON());
/*
Buffer é a representação de um espaço na 
memória do computador usado especificamente 
para transitar dados de uma maneira muito rápida. 
Os dados são armazenado para serem tratados, enviados 
pra outro lugar e logo removidos. São maneira de salvar 
e ler de maneira muito performática, e isso acontece porque 
esse modelo de Buffer lê parcialmente a informação e 
guarda no formato binário que é mais simples, leve e 
mais performático do que fazer isso com um texto ou uma string, 
por exemplo. O Buffer foi uma APIP criada dentro do Node 
pela incapacidade do JavaScript trabalhar com dados binários. 
Para entendermos como o Buffer funciona vamos criar um arquivo com 
o nome de buffer.js e vamos ver o que ele armazena. No nosso 
exemplo vamos ver que o Buffer transforma uma palavra em um 
código hexadecimal, mas porque? Porque uma palavra, um texto 
teria acentos e outras particularidades que teriam que ser usados 
encodings para "traduzir" uma palavra para um código binário e isso
 deixaria tudo mais pesado e menos performático, por isso o Buffer 
 transforma tudo em código hexadecimal que transforma tudo em códigos 
 simples formados pelos números de 0 a 9 e as letras de A a F, assim: 
 ABCDEF0123456789, então um "ok"seria transformado em algo assim: 6c 6b
 */

// Exemplo de uso do Buffer em uma aplicação real
// Veja no arquivo streams/STREAM-HTTP-SERVER.JS e src/server.js  '
// como o Buffer é usado para ler dados de uma requisição HTTP
// e transformar esses dados em um JSON ou manipular os dados
// antes de enviar na resposta da requisição HTTP.
