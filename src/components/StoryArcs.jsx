import { motion } from "framer-motion";
import { arcs } from '../lib/utils.ts';

const ArcCard = ({ arc }) => {
    return (
        <motion.li
            className="p-4 border border-blue-300 rounded-lg shadow-lg overflow-hidden relative flex flex-col justify-between"
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.95, rotate: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <motion.img
                src={arc.image}
                alt={arc.name}
                className="w-full h-48 object-cover rounded-md mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            />
            <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.5 }}
            />
            <h3 className="text-xl font-bold text-white">{arc.name}</h3>
            <p className="text-gray-300">{arc.description}</p>
        </motion.li>
    );
};

const StoryArcs = () => {
    return (
        <div id="moments" className=" p-8 rounded-xl shadow-xl mb-8">
            <motion.h2
                className="text-3xl font-extrabold text-white mb-6 text-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                Story Arcs
            </motion.h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {arcs.map((arc, index) => (
                    <ArcCard key={index} arc={arc} />
                ))}
            </ul>
        </div>
    );
};

export default StoryArcs;
