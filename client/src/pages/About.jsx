import { assets } from "../assets/frontend_assets/assets"
import Title from "../components/Title"
import NewsletterBox from "../components/NewsletterBox"

const About = () => {
    return (
        <div>
            <div className="text-2xl text-center pt-8 border-t">
                <Title text1={"ABOUT"} text2={"US"} />
            </div>
            <div className="my-10 flex flex-col md:flex-row gap-16">
                <img className="w-full md:max-w-112.5" src={assets.about_img} alt="" />
                <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, voluptatem est accusantium perferendis delectus exercitationem error excepturi fugiat nemo nulla corrupti pariatur animi, corporis, ipsa vitae amet neque. Itaque, temporibus?</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo nisi excepturi veniam. Odio, fugiat. Similique suscipit dolor distinctio id aut itaque ipsum laboriosam numquam fuga.</p>
                    <b className="text-gray-800">Our Mission</b>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi qui nulla expedita consequuntur aliquid, voluptatum magni fuga vero dolor, ipsum maxime tempora ullam iusto voluptates culpa ut laudantium nobis. Temporibus?</p>

                </div>
            </div>
            <div className="text-xl py-4">
                <Title text1={"WHY"} text2={"CHOOSE US"}/>
            </div>
            <div className="flex flex-col md:flex-row text-sm mb-20">
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Quality Assurance:</b>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum labore asperiores libero. Perspiciatis voluptatum dolorem dignissimos, repellendus iste minus ipsa rem reiciendis dolores, libero quia eligendi deserunt ducimus, expedita corporis!</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Convenience:</b>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum labore asperiores libero. Perspiciatis voluptatum dolorem dignissimos, repellendus iste minus ipsa rem reiciendis dolores, libero quia eligendi deserunt ducimus, expedita corporis!</p>
                </div>
                <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
                    <b>Exceptional Customer Service:</b>
                    <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum labore asperiores libero. Perspiciatis voluptatum dolorem dignissimos, repellendus iste minus ipsa rem reiciendis dolores, libero quia eligendi deserunt ducimus, expedita corporis!</p>
                </div>
            </div>
            <NewsletterBox/>
        </div>
    )
}

export default About