import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {ranks,clans} from '../lib/utils.ts';

// const RanksAndClans = () => {
//     const controls = useAnimation();
//     const [ref, inView] = useInView();
//
//     React.useEffect(() => {
//         if (inView) {
//             controls.start("visible");
//         } else {
//             controls.start("hidden");
//         }
//     }, [controls, inView]);
//
//     const listVariants = {
//         hidden: { opacity: 0, y: 20 },
//         visible: (i) => ({
//             opacity: 1,
//             y: 0,
//             transition: {
//                 delay: i * 0.2,
//             },
//         }),
//     };
//
//     return (
//         <div className="p-6 ">
//             <h2 className="text-2xl font-bold mb-4 text-center text-white">Jujutsu Sorcerer Ranks & Clans</h2>
//             <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                     <h3 className="text-xl font-semibold mb-2">Ranks</h3>
//                     <ul className="space-y-2" ref={ref}>
//                         {ranks.map((rank, index) => (
//                             <motion.li
//                                 key={index}
//                                 custom={index}
//                                 variants={listVariants}
//                                 animate={controls}
//                                 initial="hidden"
//                                 className="p-3 bg-gray-700 rounded-lg shadow"
//                             >
//                                 <strong>{rank.rank}</strong>: {rank.description}
//                             </motion.li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div>
//                     <h3 className="text-xl font-semibold mb-2">Clans</h3>
//                     <ul className="space-y-2" ref={ref}>
//                         {clans.map((clan, index) => (
//                             <motion.li
//                                 key={index}
//                                 custom={index}
//                                 variants={listVariants}
//                                 animate={controls}
//                                 initial="hidden"
//                                 className="p-3 bg-gray-700 rounded-lg shadow"
//                             >
//                                 <strong>{clan.name}</strong>: {clan.description}
//                             </motion.li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default RanksAndClans;
const RanksAndClans = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50, rotateX: 90 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
            },
        },
    };



    return (
        <motion.div
            className=" p-6 mt-6"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
        >
            <h2 className="text-3xl font-bold mb-4 text-center text-white">Jujutsu Sorcerer Ranks & Clans</h2>
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h3 className="text-xl font-semibold mb-2 text-white text-center">Ranks</h3>
                    <ul className="space-y-2" ref={ref}>
                        {ranks.map((rank, index) => (
                            <motion.li
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.1 }}
                                className=" text-white p-3  rounded-lg shadow-lg border border-b-blue-300"
                            >
                                <strong>{rank.rank}</strong>: {rank.description}
                            </motion.li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-2 text-center text-white">Clans</h3>
                    <ul className="space-y-2" ref={ref}>
                        {clans.map((clan, index) => (
                            <motion.li
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.1 }}
                                className=" text-white p-3  rounded-lg shadow-lg border border-b-blue-300"
                            >
                                <strong>{clan.name}</strong>: {clan.description}
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>

        </motion.div>
    );
};

export default RanksAndClans;
