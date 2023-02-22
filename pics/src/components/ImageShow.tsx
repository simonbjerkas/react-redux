export interface IImage {
  id: string;
  alt_description: string;
  urls: {
    small: string;
  };
}

interface IImageShow {
  image: IImage;
}

const ImageShow = ({ image }: IImageShow) => {
  return (
    <div>
      <img src={image.urls.small} alt={image.alt_description} />
    </div>
  );
};

export default ImageShow;
