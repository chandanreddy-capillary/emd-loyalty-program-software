import clubxLogo from "@/assets/clubx_logo2.png";
import devicecoLogo from "@/assets/deviceco_logo.png";
import slicehouseLogo from "@/assets/slicehouse_logo.png";
import nexoraLogo from "@/assets/nexora_logo.png";
import stridezLogo from "@/assets/stridez_logo.png";
import swirlLogo from "@/assets/swirl_logo.png";
import vertexLogo from "@/assets/vertex_logo.png";

const LogoStrip = () => {
  const logos = [
    { name: "ClubX", src: clubxLogo },
    { name: "DeviceCo", src: devicecoLogo },
    { name: "Slicehouse", src: slicehouseLogo },
    { name: "Nexora", src: nexoraLogo },
    { name: "Stridez", src: stridezLogo },
    { name: "Swirl", src: swirlLogo },
    { name: "Vertex", src: vertexLogo },
  ];

  return (
    <section className="bg-white py-12 border-t border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-gray-600 font-medium mb-8">
          Trusted by leading brands worldwide
        </p>

        <div className="overflow-hidden relative">
          <div className="flex w-max logo-scroll">
            {logos.concat(logos).map((logo, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-10 opacity-80 hover:opacity-100 transition-opacity duration-300"
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-16 md:h-20 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
