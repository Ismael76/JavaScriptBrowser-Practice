(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw ((a.code = "MODULE_NOT_FOUND"), a);
        }
        var p = (n[i] = { exports: {} });
        e[i][0].call(
          p.exports,
          function (r) {
            var n = e[i][1][r];
            return o(n || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        );
      }
      return n[i].exports;
    }
    for (
      var u = "function" == typeof require && require, i = 0;
      i < t.length;
      i++
    )
      o(t[i]);
    return o;
  }
  return r;
})()(
  {
    1: [
      function (require, module, exports) {
        let mainHeader = document.querySelector("#header1");
        let subHeader = document.querySelector("#header2");

        let home = document.querySelector(".home");
        let about = document.querySelector(".about");
        let contact = document.querySelector(".contact");

        let homePara = document.querySelector(".home-para");
        let aboutPara = document.querySelector(".about-para");
        let contactPara = document.querySelector(".contact-para");

        home.addEventListener("click", () => {
          if (
            homePara.style.fontWeight === "bold" &&
            homePara.style.fontSize === "20px"
          ) {
            homePara.style.fontWeight = "normal";
            homePara.style.fontSize = "16px";
          } else {
            homePara.style.fontWeight = "bold";
            homePara.style.fontSize = "20px";
          }
        });

        about.addEventListener("click", () => {
          if (
            aboutPara.style.fontWeight === "bold" &&
            aboutPara.style.fontSize === "20px"
          ) {
            aboutPara.style.fontWeight = "normal";
            aboutPara.style.fontSize = "16px";
          } else {
            aboutPara.style.fontWeight = "bold";
            aboutPara.style.fontSize = "20px";
          }
        });

        contact.addEventListener("click", () => {
          if (
            contactPara.style.fontWeight === "bold" &&
            contactPara.style.fontSize === "20px"
          ) {
            contactPara.style.fontWeight = "normal";
            contactPara.style.fontSize = "16px";
          } else {
            contactPara.style.fontWeight = "bold";
            contactPara.style.fontSize = "20px";
          }
        });

        let body = document.querySelector("body");

        let paragraph = document.createElement("p");

        mainHeader.addEventListener("click", () => {
          mainHeader.style.backgroundColor = "red";
        });

        mainHeader.addEventListener("mouseout", () => {
          mainHeader.style.backgroundColor = "white";
        });

        subHeader.addEventListener("mouseover", () => {
          subHeader.textContent = "Welcome to the website!";
        });

        // window.addEventListener("keydown", (e) => {
        //   paragraph.textContent = e.key;
        //   body.append(paragraph);
        // });
      },
      {},
    ],
  },
  {},
  [1]
);
