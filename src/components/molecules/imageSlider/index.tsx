import Carousel from 'react-bootstrap/Carousel';
import { Image } from '@atoms/image';
import { Props } from './types';

export const ImageSlider: React.FC<Props> = ({ images }: Props) => (
  <Carousel controls={false}>
    {images?.items.map((item) => (
      <Carousel.Item key={Math.random()}>
        <Image src={item.url} height={560} alt="slides" />
      </Carousel.Item>
    ))}
  </Carousel>
);
