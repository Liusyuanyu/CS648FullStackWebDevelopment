const name = "Hsuan Yu, Liu";
const headshot = "/hsuan.jpg";
const element = React.createElement("div", null, React.createElement("div", {
  id: "name",
  title: "My Name"
}, name), React.createElement("img", {
  id: "headshot",
  alt: "headshot",
  src: headshot,
  accessKey: "img"
}), React.createElement("div", {
  id: "introduction",
  title: "My Introduction"
}, "I am currently a graduate student in Computer Science at San Diego state University. I have token Machine Learning, Data mining, and Big data classes, etc. My skills include python, C#, and Java. Moreover, I was a software engineer for three years, and a data scientist intern for two months."), React.createElement("a", {
  href: "https://www.google.com/"
}, React.createElement("button", {
  id: "github"
}, "VIEW MY GITHUB REPO")));
ReactDOM.render(element, document.getElementById('contents'));