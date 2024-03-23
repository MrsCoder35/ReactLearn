//* JSX'de stillendirme farkli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{color:"red"}})
//* 3-) Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Module CSS, Material UI, Styled Component, Sass, Bootstrap, Tailwind, Emotion, Ant Design v.b harici kutuphaneler kullanilabilir.

//? CSS dosyalari import "path" seklinde eklenir.

const Main = () => {
  const headerStyle = {
    color: "blue",
    backgroundColor: "lightblue",
    fonsSize: "1rem",
    fontWeight: "bold",
  };
  return (
    <main>
      {/* Inline CSS */}
      <h2 style={{ color: "red", backgroundColor: "gray" }}>MAIN SECTION</h2>
      <h2 style={headerStyle}>Other Header</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo repellat
        tempora, vitae maxime doloribus, eos voluptas vero itaque ipsam
        accusantium provident, molestiae incidunt enim aperiam.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure,
        necessitatibus? Eos fugiat consectetur deserunt adipisci!
      </p>
      <p style={headerStyle}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet porro
        officiis ipsa quibusdam, similique veniam.
      </p>
    </main>
  );
};

export default Main;
