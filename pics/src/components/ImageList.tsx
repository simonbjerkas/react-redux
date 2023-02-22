import './ImageList.css';
import ImageShow, { IImage } from './ImageShow';

interface IImageList {
  images: IImage[];
}

const ImageList = ({ images }: IImageList) => {
  const renderedImages = images.map((image: IImage) => {
    return <ImageShow key={image.id} image={image} />;
  });
  return <div className="image-list">{renderedImages}</div>;
};

export default ImageList;
