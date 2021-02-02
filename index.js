var database = require('./database');

/* INSERT DE DADOS

var dados = [
    {
        nome: "Paciencia",
        preco: 20.00
    },
    {
        nome: "Freecell",
        preco: 10.00
    },
    {
        nome: "Spider",
        preco: 70.00
    }
]

database.insert(dados).into('games').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});

*/


/* SELECT - CONSULTA DADOS

database.select(['id', 'preco']).table('games').then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
})

*/

/* NESTED QUERIES

database.insert({ nome: 'GTA', preco: 25 }).into('games').then(data => {
    database.select(['id', 'preco']).table('games').then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });
}).catch(err => {
    console.log(err);
});
*/

/* WHERE
database.select()
    .whereRaw("nome = 'Paciencia' OR preco > 120")
    .table('games').then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });

*/
