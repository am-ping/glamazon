import Image from 'next/image'

export default function Page({ params }) {
    return (
        <>
            <div className="rent-main">
                <Image src="/rent-main.jpg" alt='Photo of married couple at their wedding' fill />
                <div>
                    <p>Your Love Story Deserves More Than Just an Expensive Outfit</p>
                    <p>Invest in Memories, Not Overpriced Attire</p>
                    <p>Rent Your Dream Wedding Gown</p>
                </div>
            </div>
        </>
    )
}