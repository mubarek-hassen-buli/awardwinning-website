// import { BentoGrid, BentoGridItem } from '../ui/bento-grid'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'


export function BentoGridDemo() {
    // max-w-4xl
    return (
        <div id="casts"   className="bg-black text-white pt-12">
            <div>
                <h1 className="text-4xl font-bold my-9 text-center"> The Main Casts Of The Show </h1>
            </div>
            <BentoGrid className="max-w-4xl mx-auto ">
                {items.map((item, i) => (
                    <BentoGridItem
                        key={i}
                        image={item.image}
                        title={item.title}
                        className={i === 3 || i === 6 ? 'md:col-span-2' : ''}
                    />
                ))}
            </BentoGrid>
        </div>
    )
}


const items = [
    {
        image: '/img/yuta.img.jpg',
        title: 'Yuta Okkotsu',


    },
    {
        image: '/img/yuji.img.jpg',
        title: 'Yuji Itadori',


    },
    {
        image: '/img/guru.img.jpg',
        title: 'Suguru Geto ',


    },
    {
        image:'/img/gojo.img.jpg',
        title: 'Gojo Satoru (The main character)',


    },
    {
        image:'/img/Maki.img.jpg',
        title: 'Maki Zenin',


    },
    {
        image:'/img/Megumi.img.jpg',
        title: 'Megumi Fushiguro',


    },
    {
        image:'/img/sukuna.img.jpg',
        title: 'Ryomen Sukuna (The main villain)',


    },
]
