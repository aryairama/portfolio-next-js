import { LayoutPrimary } from '../components/module';

const HomeView = (props) => {
  return (
    <LayoutPrimary name="Arya Irama Wahono" job="Fullstack Web Developer" avatar="/assets/profile/cv5_compress.jpg">
      <section id="about" className="container">
        <div className="min-h-screen w-full flex justify-center items-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi, veniam? Sit maiores quaerat repellendus
          fuga saepe facilis, numquam, voluptatem voluptatum autem dolorum tenetur ipsam? Atque aut magnam ratione
          numquam voluptatibus.
        </div>
      </section>
    </LayoutPrimary>
  );
};

export default HomeView;
