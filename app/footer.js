import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
        <>
            <footer>
                <div>
                    <p><strong>Shop</strong></p>
                    <ul>
                        <li><Link href="#">Men</Link></li>
                        <li><Link href="#">Women</Link></li>
                        <li><Link href="#">Kids (Coming Soon!)</Link></li>
                    </ul>
                </div>
                <div>
                    <p><strong>Corporate</strong></p>
                    <ul>
                        <li><Link href="#">Career at Glamazon</Link></li>
                        <li><Link href="#">About</Link></li>
                        <li><Link href="#">Contact</Link></li>
                    </ul>
                </div>
                <div className='my-links'>
                    <ul>
                        <li><Link href="github.com/am-ping/glamazon"><Image src="/github-mark.png" alt="github logo" height={25} width={25} /></Link></li>
                        <li><Link href="#"><Image src="/linkedin-logo.png" alt="linkedin logo" height={25} width={30} /></Link></li>
                        {/* <li><Link href="#">Portfolio</Link></li> */}
                    </ul>
                    <p>© 2023 Glamazon Inc.</p>
                </div>
            </footer>
        </>
    )
}