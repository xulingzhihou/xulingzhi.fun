import Gallery from '../components/gallery';

export default function Homepage() {
    return (
        <div>
            <div className="flex justify-center m-14">
                <div className="flex flex-col h-40 opacity-100 z-40 h-full">
                    <h1 className="text-5xl font-bold m-4 h-full">
                        {' '}
                        Hello, I am Lingzhi!
                    </h1>

                    <h1 className="text-3xl font-bold m-4 h-full">
                        I am a software engineer based in San Francisco
                    </h1>

                    <div className="text-2xl m-4 h-full">
                        This is just a fun space where I showcase my love for
                        photography and art
                    </div>
                </div>
            </div>
            <div id="#gallery">
                <Gallery />
            </div>
        </div>
    );
}
