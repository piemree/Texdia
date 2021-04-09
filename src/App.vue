<template>
  <div id="app">
     <nav class="nav-bar">
      <Nav />
    </nav>
    <div class="app-main-content">
      <MainHeader/>
    <router-view></router-view>
    </div>
    <nav class="chat-section"></nav>
  </div>
</template>

<script>
import Nav from './components/Nav'
import MainHeader from './components/MainHeader'
export default {
  components:{
    Nav,
    MainHeader
  }
};
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400&display=swap");

:root {
  --grey1: #fff;
  --grey2: #e4eded;
  --grey3: #d7e0e0;
  --grey4: #bfc7c7;
  --grey5: #9aa1a1;
  --grey6: #272929;
}

body,
input,
textarea,
button {
  font-family: "Fira Sans", sans-serif;
}
.chat-section{
  border-left:1px solid var(--grey2) ;
}
.nav-bar{
  border-right:1px solid var(--grey2) ;
  position: sticky;
  top: 0;
  left: 0;
}
.app-main-content{
  position: relative;
  width: 100%;

}
#app {
  background-color: var(--grey1);
  min-height: 100vh;
  height: 100%;
  max-width: 100%;
  font-family: "Fira Sans", sans-serif;
  display: grid;
  grid-template-columns: 20rem 35rem auto;
}

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  margin-left: 1rem;
}

</style>
