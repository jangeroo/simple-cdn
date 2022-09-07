import images from "./images/gallery";

const Gallery = () => {
  return (
    <div id="gallery-container">
      {images.map((img, index) => (
        <div>
          <img key={index} src={img} alt={img} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
