import {
  GoBell,
  GoFlame,
  GoGear,
  GoGift,
  GoLaw,
  GoLightBulb,
} from 'react-icons/go';
import Button from '../components/Button';

const ButtonPage = () => {
  const handleClick = (): void => console.log('Clicked!');

  return (
    <div className="flex flex-col gap-4 p-5">
      <div>
        <Button onClick={handleClick}>
          <GoBell />
          Plain
        </Button>
      </div>
      <div>
        <Button primary rounded onClick={handleClick}>
          <GoFlame />
          Button
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoLaw />
          Buy Now!
        </Button>
      </div>
      <div>
        <Button success>
          <GoLightBulb />
          See Deals!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoGear />
          Advanced
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoGift />
          Hide Ads
        </Button>
      </div>
    </div>
  );
};

export default ButtonPage;
