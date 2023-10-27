import Image from 'next/image';

export default function About() {
    return (
        <div className="mx-auto max-w-5xl p-4 flex justify-center items-center flex-col">
            <Image
                alt="Picture of the author"
                src={'/xulingzhi-aboutme.jpg'}
                width={200}
                height={200}
                style={{ borderRadius: '100%' }}
            />
            <div className="text-2xl m-12 leading-loose">
                I value sustainability and accessibility. I believe we human
                beings need to have more compassion to our earth 🌎 and to each
                other in order to face the big challenge in front of us.
                <br />
                <br />
                I am constantly in awe by nature and love to explore the world.
                I also enjoy volunteering and contribute to local communities.
                <br />
                <br />
                In my spare time, I like to practice muay thai, jog and go to
                beautiful places to document street art.
            </div>
        </div>
    );
}
