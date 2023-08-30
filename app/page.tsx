import Img1 from "@/example-1.webp";
import Img2 from "@/example-2.avif";
import Img3 from "@/Без названия.jpeg";
import Image from "next/image";

const Home = () => {
  // в реакт импорченные изображения представляются строкой. Однако в некст это объекты, у которых есть свойства. Например:
  // Img1.src

  return (
    <div>
      <h1>Welcome page</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* по умолчанию этот компонент загружается лениво */}
        <Image
          alt="Test image 3"
          // раньше в некст обязательно нужно было прописывать ширину и высоту как ниже. сейчас это не нужно для файлов, которые есть локально. если мы указываем импорт строкового значения, то нам необходимо ширину и высоту указывать
          // width={Img1.width}
          // height={Img1.height}
          // также нужно было передавать src как ниже. Сейчас в src можно сразу объект весь передать
          // src={Img1.src}
          src={Img3}
          // также есть такой пропс, который указывает загрузку изображения в приоритетном порядке (как правило добавляем только на первое изображение)
          // priority
          // также если мы будем использовать свойство sizes, то в конфиге мы можем задать размерность расширений и для каждого типа будет использоваться разные размеры картинок
          // sizes='(max-width: 768px) 100vw, 50vw'
        />
        <Image alt="Test image 1" src={Img1} />
        <Image alt="Test image 2" src={Img2} />
      </div>
    </div>
  );
};

export default Home;
