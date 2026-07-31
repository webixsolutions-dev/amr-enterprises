
import MissionIimg from '../../../assets/OurMission-1.webp'
import OurVission from "../../../assets/OurVission.webp"
const items = [
  {
    title: 'Our Mission',
    text: 'At Amayra Enterprises, our mission is to empower businesses to achieve sustainable growth and success by providing innovative solutions tailored to their unique needs. Through strategic guidance, industry expertise, and collaborative partnerships, we strive to unlock new opportunities, drive operational excellence, and create long-term value for our clients.',
    img: MissionIimg
  },
  {
    title: 'Our Vision',
    text: 'Our vision at Amayra Enterprises is to be the leading partner of choice for businesses seeking to thrive in a dynamic and competitive marketplace. We envision a future where every business, regardless of size or industry, has the tools, resources, and support needed to realize its full potential and make a positive impact on the world.',
    img: OurVission
  },
]

export default function MissionVision() {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto bg-black">
      <div className="text-start px-4 mb-12">
        <h2 className="text-4xl md:text-4xl font-bold text-white tracking-wide">
          WHO WE ARE AT AMAYRA ENTERPRISES
        </h2>
        <div className="w-full max-w-5xl h-[1px] bg-gray-700 mt-4 mb-8"></div>

      </div>
      <div className="grid md:grid-cols-2 gap-10">
        {items.map((item) => (
          <div key={item.title} className="bg-black text-white p-8">
            {/* Image Section */}
            <div className="mb-6">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-100 object-cover "
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}