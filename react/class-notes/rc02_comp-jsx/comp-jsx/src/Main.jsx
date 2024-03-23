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
import "./Main.css"

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
      <p className="par">
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
      <div>
      <img
          className="img"
          src="https://cdn.pixabay.com/photo/2023/04/29/09/51/polana-kalatowki-7958161_640.jpg"
          alt="yayla"
          />
           <img
          className="img"
          src="https://cdn.pixabay.com/photo/2024/02/19/22/58/forest-8584311_640.jpg"
          alt="orman"
        />

        <img
          id="img-id"
          src="https://cdn.pixabay.com/photo/2024/02/16/16/39/flower-8577961_640.jpg"
          alt="cicek"
        />
        <img className="img" src="./images/kedi.jpeg" alt="kedi" />
        
      </div>
    </main>
  );
};

export default Main;
