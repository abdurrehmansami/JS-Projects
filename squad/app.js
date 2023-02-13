let data = [
  {
    name: "mat",
    age: "30",
  },
  {
    name: "math",
    age: "30",
  },
  {
    name: "hmat",
    age: "30",
  },
  {
    name: "maht",
    age: "30",
  },
  {
    name: "mhat",
    age: "30",
  },
  {
    name: "hmath",
    age: "30",
  },
  {
    name: "mhhat",
    age: "30",
  },
];

const info = document.querySelector("#info");

let details = data.map(function (item) {
  return "<div>" + item.name + " is " + item.age + " years old " + "</div>";
});

info.innerHTML = details.join("\n");
