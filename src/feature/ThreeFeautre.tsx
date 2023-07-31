import Image from 'next/image';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const ThreeFeature = (props: IVerticalFeatureRowProps) => {
  return (
    <div className="card mt-6 flex w-96 flex-col items-center justify-center space-y-4 text-center md:mt-0">
      <div>
        <Image
          src={props.image}
          alt={props.imageAlt}
          width={100}
          height={100}
        />
      </div>
      <div>
        <h2 className="text-3xl font-medium">{props.title}</h2>
      </div>
      <div>
        <p className="px-2 text-lg md:px-0">{props.description}</p>
      </div>
    </div>
  );
};

export { ThreeFeature };
