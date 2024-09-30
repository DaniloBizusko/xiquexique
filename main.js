//  alert('danilo')
// function soma(num1,num2){
//     return num1+num2;
// }
// console.log(soma(2,3));

// function areaQuadrado(lado){
//     return lado**2;
// }
// console.log(areaQuadrado(5));

// function areatriangulo(base,altura){
//     return (base*altura)/2;
// }
// console.log(areatriangulo(8,5));

// let valor1=parseInt(prompt('digite um numero'));
// let valor2=parseInt(prompt('digite um segundo numero'));
// let valor3=parseInt(prompt('digite um terceiro numero'));
// function media(valor1,valor2,valor3){
//     return (valor1+valor2+valor3)/3;
// }
// console.log(media(valor1,valor2,valor3));
// document.write(media(valor1,valor2,valor3));
let estados=['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Distrito   Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná',   'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins']
let i = 0;
while(i<estados.length){
    console.log(i);
  console.log(estados[i]);
i++;
}
let idade=parseInt(prompt('qual a sua idade?'))
if(idade>17){
    console.log('já pode dirigir');
}
else{
    console.log('ilegal dirigir')
}
for (let i = 0; i < estados.length; i++) {
    const element = estados[i];
    
}