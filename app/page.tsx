import Link from 'next/link';

export default function Home() {
    return <div className="relative w-full h-screen overflow-hidden">
        <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/bg-video-poster.jpg"
            className="absolute inset-0 w-full h-full object-cover"
        >
            <source
                src="/bg-video.mp4"
                type="video/mp4"
            />
            Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/40">
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white space-y-6 px-4">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                    Welcome to Our Site
                </h1>
                <p className="text-xl md:text-2xl max-w-2xl text-gray-200">
                    Experience stunning visuals with our video background hero section
                </p>
                <Link href="/imagekit" className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
                    Visit ImageKit version
                </Link>
            </div>
        </div>
    </div>
}
