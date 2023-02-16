interface VoiceAssistant {
  title: string;
  handle: string;
  image: '*.png';
  description: string;
}

const ProfileCard = ({ title, handle, image, description }: VoiceAssistant) => {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt={`${title}-logo`} />
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
        <div className="content">{description}</div>
      </div>
    </div>
  );
};

export default ProfileCard;
