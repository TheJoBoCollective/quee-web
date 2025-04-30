import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";

export default function Home() {
  const gradient =
    "linear-gradient(242.58deg, #016295 -6.13%, #083863 20.31%, rgba(31, 20, 57, 0.8) 43.94%, #450E4B 100.93%)";

  return (
    <div className="w-full h-full">
      <main className="w-full h-full">
        <section
          style={{
            background: "url('/hero-bg.png')," + gradient,
          }}
          className=""
        >
          <div className="w-full min-h-screen bg-center bg-no-repeat bg-contain pt-14 max-w-7xl mx-auto">
            <Header />
            <div className="pt-19">
              <Hero />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
