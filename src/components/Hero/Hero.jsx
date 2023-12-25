import Link from "next/link";
function Hero() {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">Hero Section</h1>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            iste sequi at error quis iure cupiditate repudiandae, saepe eius
            asperiores corporis velit nostrum dolor voluptate molestias, animi
            voluptatem fugit dolore.
          </p>
          <Link href="/shop" className="btn btn-primary">
            <span>Shop Now</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
