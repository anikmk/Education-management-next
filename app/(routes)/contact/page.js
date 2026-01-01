import { LuMap, LuMail, LuPhone } from "react-icons/lu";

// Dynamic metadata for SEO
export async function generateMetadata() {
  return {
    title: "Contact Us - Pathshala School",
    description:
      "Get in touch with Pathshala School. Find our location, email, and contact number.",
    openGraph: {
      title: "Contact Us - Pathshala School",
      description:
        "Get in touch with Pathshala School. Find our location, email, and contact number.",
      type: "website",
      images: ["/assets/pathshala-contact.png"], // replace with OG image if available
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact Us - Pathshala School",
      description:
        "Get in touch with Pathshala School. Find our location, email, and contact number.",
      images: ["/assets/pathshala-contact.png"],
    },
  };
}

export default function ContactPage() {
  return (
    <section className="my-32 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold text-orange-500">Contact</h2>
        <div className="w-20 h-[2px] bg-gray-400 mx-auto mt-2"></div>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
        {/* Location Card */}
        <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow hover:shadow-md transition">
          <div className="p-3 bg-orange-100 rounded-full text-orange-500">
            <LuMap size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Our Location</h3>
            <p className="text-gray-500 text-sm">
              Sylhet Sadar, Sylhet, Bangladesh
            </p>
          </div>
        </div>

        {/* Email Card */}
        <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow hover:shadow-md transition">
          <div className="p-3 bg-orange-100 rounded-full text-orange-500">
            <LuMail size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Email Address</h3>
            <p className="text-gray-500 text-sm">
              pathshala.school.demo@yahoo.com
            </p>
          </div>
        </div>

        {/* Contact Card */}
        <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow hover:shadow-md transition">
          <div className="p-3 bg-orange-100 rounded-full text-orange-500">
            <LuPhone size={24} />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Contact</h3>
            <p className="text-gray-500 text-sm">+8801842485222</p>
          </div>
        </div>
      </div>
    </section>
  );
}
