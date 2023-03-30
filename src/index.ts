type Product = {
  id: number;
  title: string;
  description: string;

  brand: string;
  category: string;
};

const root: HTMLElement = document.getElementById("root")!;
const loading: HTMLElement = document.getElementById("loading")!;
root.appendChild(loading);

const toggleLoading = (showLoading: boolean) => {
  if (showLoading) {
    loading.style.display = "block";
  } else {
    loading.style.display = "none";
  }
};

const fetchProducts = async () => {
  toggleLoading(true);
  const response = await (await fetch("https://dummyjson.com/products")).json();
  const products: Product[] = response["products"];
  toggleLoading(false);
  createTableWithProducts(products);
};

const createTableHeader = (table: HTMLTableElement) => {
  var tr = document.createElement("tr");
  var th1 = document.createElement("td");
  var th2 = document.createElement("td");
  var th3 = document.createElement("td");
  var th4 = document.createElement("td");
  var th5 = document.createElement("td");

  var text1 = document.createTextNode("ID");
  var text2 = document.createTextNode("Title");
  var text3 = document.createTextNode("Description");
  var text4 = document.createTextNode("Brand");
  var text5 = document.createTextNode("Category");

  th1.appendChild(text1);
  th2.appendChild(text2);
  th3.appendChild(text3);
  th4.appendChild(text4);
  th5.appendChild(text5);

  tr.appendChild(th1);
  tr.appendChild(th2);
  tr.appendChild(th3);
  tr.appendChild(th4);
  tr.appendChild(th5);

  table.appendChild(tr);
};

const createTableWithProducts = (products: Product[]) => {
  const table: HTMLTableElement = document.createElement("table");
  root.appendChild(table);
  createTableHeader(table);

  products.forEach((element, idx) => {
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");

    var text1 = document.createTextNode(element.id.toString());
    var text2 = document.createTextNode(element.title);
    var text3 = document.createTextNode(element.description);
    var text4 = document.createTextNode(element.brand);
    var text5 = document.createTextNode(element.category);

    td1.appendChild(text1);
    td2.appendChild(text2);
    td3.appendChild(text3);
    td4.appendChild(text4);
    td5.appendChild(text5);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    table.appendChild(tr);
  });
};

fetchProducts();

