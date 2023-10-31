const itens = [
  {
    id: "1",
    name: "Arroz",
    price: 12.0,
    qtd: 0,
    src: "https://prezunic.vtexassets.com/arquivos/ids/155688/63a219a5b1a426136f3f05ba.png?v=638071645856100000",
  },
  {
    id: "2",
    name: "Feijão",
    price: 10.0,
    qtd: 0,
    src: "https://assets.unileversolutions.com/v1/89535939.png",
  },
  {
    id: "3",
    name: "Carne",
    price: 5.0,
    qtd: 0,
    src: "https://unidasul-img.f1cdn.com.br//imagem/produto/id/8393/width/290/height/290/normalize/?h=6776f2b122ff9dae9ab93aaade776966bec9639f",
  },
  {
    id: "4",
    name: "Sushi",
    price: 15.0,
    qtd: 0,
    src: "https://img.freepik.com/fotos-gratis/uma-pintura-de-sushi-e-um-prato-com-a-imagem-de-um-peixe_188544-12221.jpg?w=1380&t=st=1698277656~exp=1698278256~hmac=42d7ff528b396de1d4d887be05c3f677143dfd76f5228b3342ef12337ef97c59",
  },
  {
    id: "5",
    name: "Burrito",
    price: 8.0,
    qtd: 0,
    src: "https://img.freepik.com/fotos-gratis/vista-lateral-shawarma-com-batatas-fritas-em-panelas-de-bordo_176474-3215.jpg?w=740&t=st=1698277681~exp=1698278281~hmac=9abb859293eaad8b5cc68d23ab0047a1579bda54bd3dac56c947de2f5c1f7451",
  },
  {
    id: "6",
    name: "Taco",
    price: 6.0,
    qtd: 0,
    src: "https://img.freepik.com/fotos-gratis/tacos-mexicanos-com-carne-em-molho-de-tomate-e-salsa_2829-14218.jpg?w=1380&t=st=1698277701~exp=1698278301~hmac=fa29e8429d5add7da708c3742346a1c5d7432c9fb20d21e875ed62f79412e41c",
  },
  {
    id: "7",
    name: "Macarrão",
    price: 9.0,
    qtd: 0,
    src: "https://img.freepik.com/fotos-gratis/macarrao-penne-em-molho-de-tomate-com-frango-e-tomate-em-uma-mesa-de-madeira_2829-19739.jpg?w=1380&t=st=1698277758~exp=1698278358~hmac=63d261f005e73f4ed8fc6c104b2b80a9f5c7cc3ce346d43ac10e7ac3c1dd6ce9",
  },
  {
    id: "8",
    name: "Salada",
    price: 7.0,
    qtd: 0,
    src: "https://img.freepik.com/fotos-gratis/salada-de-tomate-pepino-cebola-roxa-e-folhas-de-alface-menu-de-vitamina-verao-saudavel-comida-vegetal-vegana-mesa-de-jantar-vegetariana-vista-do-topo-configuracao-plana_2829-6482.jpg?w=1380&t=st=1698277775~exp=1698278375~hmac=68deb5a16801f9a02ec36cd8d2c966efac1f6faac3cdcd80c92f2a48a25e5fd8",
  },
  {
    id: "9",
    name: "Churros",
    price: 20.0,
    qtd: 0,
    src: "https://img.freepik.com/fotos-gratis/churros-fritos-de-close-up-com-chocolate-derretido_23-2148379621.jpg?w=996&t=st=1698277805~exp=1698278405~hmac=76d40eb77a34ec362c2b175d96edb56e153963c7f04b5c84b13cfa5e82ecca72",
  },
  {
    id: "10",
    name: "Chicken Wings",
    price: 11.0,
    qtd: 0,
    src: "https://img.freepik.com/fotos-gratis/asas-de-frango-bufalo-grelhadas-em-chapa-de-madeira-rustica-gerada-por-ia_188544-26049.jpg?w=1380&t=st=1698277824~exp=1698278424~hmac=3523e6fa923b057c180dd6cdc5828391848c9cf5b73b57d08948be0e8bb64f0f",
  },
];

export function getItens() {
  return itens;
}

export function getItem(id) {
  return itens.find((i) => i.id === id);
}

export function calculateTotalPrice(itens) {
  const total = itens.reduce((acc, item) => {
    const foundItem = getItem(item.id);
    return foundItem ? acc + foundItem.price * Number(item.qtd) : acc;
  }, 0);
  return total;
}
